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
Created At : Thu Sep 21 2023, 12:35:31 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61400|64922|61072|58206|
|[hono](https://github.com/honojs/hono)|56803|61590|58611|50209|
|[fast](https://github.com/danteissaias/fast)|54486|63872|54035|45552|
|[fastro](https://github.com/fastrodev/fastro)|25589|64558|6148|6060|
|[oak](https://github.com/oakserver/oak)|18312|19420|18128|17389|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39840|42023|40184|37312|
|[fastify](https://github.com/fastify/fastify)|29396|31316|29266|27606|
|[koa](https://github.com/koajs/koa)|18824|19848|17462|19163|
|[express](https://github.com/expressjs/express)|6159|6448|5714|6314|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|59835|53329|63614|62562|
|[nhttp](https://github.com/nhttp/nhttp)|59683|55192|62433|61423|
|[elysia](https://github.com/elysiajs/elysia)|57964|54731|55758|63404|
|[baojs](https://github.com/mattreid1/baojs)|48376|55710|49862|39556|
  



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

