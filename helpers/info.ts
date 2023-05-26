import { join } from "../deps.ts";

async function readDir(path: string) {
  const files: string[] = [];
  const getFiles = async (path: string) => {
    for await (const dirEntry of Deno.readDir(path)) {
      if (dirEntry.isDirectory) {
        await getFiles(join(path, dirEntry.name));
      } else if (dirEntry.isFile) {
        files.push(join(path, dirEntry.name));
      }
    }
  };
  await getFiles(path);
  return files;
}

export default async () => {
  const dirs = await readDir("frameworks");
  const infos = dirs.filter((str) => str.includes("info.json")).map((str) =>
    JSON.parse(Deno.readTextFileSync(str))
  );
  return infos.sort((a, b) => (b["name"] > a["name"] ? -1 : 1)).sort((
    a,
    b,
  ) => (b["lang"] > a["lang"] ? -1 : 1));
};
