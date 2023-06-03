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
Created At : Sat Jun 03 2023, 12:44:15 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|51804|59087|50299|46025|
|[hono](https://github.com/honojs/hono)|51536|56815|53577|44216|
|[fast](https://github.com/danteissaias/fast)|49848|58428|42391|48725|
|[fastro](https://github.com/fastrodev/fastro)|43350|54211|44752|31088|
|[oak](https://github.com/oakserver/oak)|16794|19530|14047|16806|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39588|42346|39209|37208|
|[fastify](https://github.com/fastify/fastify)|30342|31597|30367|29062|
|[koa](https://github.com/koajs/koa)|19203|20009|18115|19484|
|[express](https://github.com/expressjs/express)|6639|6857|6200|6859|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|63853|64919|62167|64474|
|[nhttp](https://github.com/nhttp/nhttp)|62048|60961|63941|61241|
|[elysia](https://github.com/elysiajs/elysia)|60819|60428|61897|60133|
|[baojs](https://github.com/mattreid1/baojs)|53950|62363|44686|54802|
  



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

