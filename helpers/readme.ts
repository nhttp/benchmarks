// deno-lint-ignore-file no-explicit-any
import mark from "https://esm.sh/json-to-markdown-table@1.0.0";

const headers_all = [
  "Name",
  "Lang/Runtime",
  "AVG",
  "GET /",
  "GET /blog/:id",
  "GET /api/user"
] as const;
const headers = [
  "Name",
  "AVG",
  "GET /",
  "GET /blog/:id",
  "GET /api/user"
] as const;
const named = "Lang/Runtime";
const result = JSON.parse(await Deno.readTextFile("results/result.json"));
const deno = result.filter((el: any) => el[named] === "Deno");
const bun = result.filter((el: any) => el[named] === "Bun");
const node = result.filter((el: any) => el[named] === "Node");
const tables = <any[]> [];
function buildReadmeRuntime(runtime: any, name: string) {
  const table = mark(runtime, headers);
  tables.push(`
### ${name}
${table}  
`);
}

buildReadmeRuntime(deno, "Deno");
buildReadmeRuntime(bun, "Bun");
buildReadmeRuntime(node, "Node");

const all_table = mark(result, headers_all);

const readme = await Deno.readTextFile("./helpers/__README.txt");
await Deno.writeTextFile(
  "README.md",
  readme.replace(
    `## Output`,
    `
## Output
Created At : ${result[0]?.Date ?? "null"}

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)

${tables.join("\n")}

### All
${all_table}
`,
  ),
);