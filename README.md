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
Created At : Fri Jan 26 2024, 12:37:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47395|51053|45945|45186|
|[fast](https://github.com/danteissaias/fast)|47084|51167|44057|46027|
|[hono](https://github.com/honojs/hono)|45978|48250|46204|43479|
|[fastro](https://github.com/fastrodev/fastro)|24264|50095|11529|11168|
|[oak](https://github.com/oakserver/oak)|22684|23885|22591|21575|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24471|30510|22642|20261|
|[fastify](https://github.com/fastify/fastify)|16603|17011|16643|16155|
|[koa](https://github.com/koajs/koa)|14302|14913|13656|14338|
|[express](https://github.com/expressjs/express)|6292|6383|6059|6434|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72571|81878|75304|60530|
|[nhttp](https://github.com/nhttp/nhttp)|58804|88012|44655|43745|
|[hono](https://github.com/honojs/hono)|57590|64267|57936|50567|
|[baojs](https://github.com/mattreid1/baojs)|36067|41591|36015|30595|
  



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

