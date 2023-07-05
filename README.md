## Runtime JS/TS benchmarks.

> Focus on framework features.

Example code for benchmark.
```ts
// GET /
framework.get("/", (req, res) => {
  res.send("home");
});

// GET /blog/99?title=bench (params and queryParams)
framework.get("/blog/:id", (req, res) => {
  const data = `${req.params.id} ${req.query.title}`;
  res.send(data);
});

// GET /api/user (set header & send json)
framework.get("/api/user", (req, res) => {
  res.setHeader("x-powered-by", "bench");
  res.json({ user: "john" });
});
```

## Output
Created At : Wed Jul 05 2023, 12:53:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|49375|51501|51245|45380|
|[nhttp](https://github.com/nhttp/nhttp)|46503|43464|48242|47802|
|[fastro](https://github.com/fastrodev/fastro)|38398|51057|33092|31046|
|[oak](https://github.com/oakserver/oak)|15268|15913|15411|14481|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|24883|26125|24424|24099|
|[nhttp](https://github.com/nhttp/nhttp)|16471|16241|16350|16822|
|[koa](https://github.com/koajs/koa)|14056|14732|13231|14204|
|[express](https://github.com/expressjs/express)|5177|5316|4826|5390|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|55639|54871|56615|55430|
|[hono](https://github.com/honojs/hono)|55507|54240|55431|56849|
|[elysia](https://github.com/elysiajs/elysia)|53091|51509|53771|53992|
|[baojs](https://github.com/mattreid1/baojs)|45807|50808|40628|45984|
  



## Usage

```bash
git clone https://github.com/herudi/deno_benchmark.git
cd deno_benchmark

// for_all
deno task bench

// for_single
deno task bench framework_name
```

## License

[MIT](LICENSE)

