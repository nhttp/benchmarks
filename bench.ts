import now from "./helpers/date.ts";
import getInfo from "./helpers/info.ts";

export type TResult = {
  "OriginalName": string;
  "Name": string;
  "AVG": number;
  "GET /": number;
  "GET /blog/:id": number;
  "GET /api/user": number;
  "Lang/Runtime": string;
  "Date": string;
  "Flag": string;
};

type TInfo = {
  name: string;
  run: string;
  lang: string;
  link: string;
  command: string;
  args: string[];
};

const sleep = (sec: number) =>
  new Promise((res) => setTimeout(res, sec * 1000));
const lookup = "./frameworks/";
const fw = Deno.args[0];
const defs = ["-j", "-z", "10s", "--no-tui"];
const cmds: string[][] = [
  [...defs, "http://localhost:8000/"],
  [...defs, "http://localhost:8000/blog/99?title=bench"],
  [...defs, "http://localhost:8000/api/user"],
];
const c_len = cmds.length;
const decoder = new TextDecoder();
async function oha(args: string[]) {
  const cmd = new Deno.Command("oha", { args });
  const output = decoder.decode((await cmd.output()).stdout);
  return JSON.parse(output);
}
async function bench(info: TInfo) {
  const name = info.name + " " + info.lang;
  try {
    const result = <TResult> {};
    result["OriginalName"] = info.name;
    result["Name"] = `[${info.name}](${info.link})`;
    result["Lang/Runtime"] = info.lang;
    result["AVG"] = 0;
    result["Flag"] = name;
    console.log("~ Start bench", name);
    const server = new Deno.Command(info.command, { args: info.args });
    const child = server.spawn();
    console.log(`~ Warming up ${name}. (10s)`);
    await sleep(10);
    console.log(`~ Run bench ${name}. (wait...)`);
    let i = 0;
    while (i < c_len) {
      const ret = await oha(cmds[i]);
      const int = Math.round(ret.summary.requestsPerSec);
      if (i === 0) result["GET /"] = int;
      else if (i === 1) result["GET /blog/:id"] = int;
      else if (i === 2) result["GET /api/user"] = int;
      result["AVG"] += int;
      i++;
    }
    console.log("~ Success bench", name);
    await sleep(2);
    child.kill("SIGKILL");
    await sleep(3);
    result["AVG"] = Math.round(result["AVG"] / 3);
    console.log("~ Result for", name, "=>", result);
    return result;
  } catch (error) {
    console.log(name, error);
    return null;
  }
}
function mutateInfo(info: TInfo) {
  const args = info.run.split(" ");
  info.command = args[0];
  args.shift();
  info.args = args;
  return info;
}
if (fw) {
  const raw = await Deno.readTextFile(lookup + fw + "/info.json");
  await bench(mutateInfo(JSON.parse(raw)));
} else {
  const arr: TInfo[] = await getInfo();
  for (let i = 0; i < arr.length; i++) {
    const info = arr[i];
    const args = info.run.split(" ");
    arr[i].command = args[0];
    args.shift();
    arr[i].args = args;
  }
  // deno-lint-ignore no-explicit-any
  const obj = {} as Record<string, any>;
  let i = 0;
  const len = arr.length;
  while (i < len) {
    const result = await bench(arr[i]);
    if (result) obj[result.Flag] = result;
    i++;
  }
  const end = Object.values<TResult>(obj).map((el) => {
    el.Date = `${now.toDateString() + ", " + now.toLocaleTimeString()}`;
    return el;
  }).sort((a, b) => (b["AVG"] < a["AVG"] ? -1 : 1));
  console.log(end);
  await Deno.writeTextFile("results/result.json", JSON.stringify(end));
}
