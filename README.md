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
Created At : Fri May 17 2024, 12:39:21 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48092|51608|47139|45530|
|[fast](https://github.com/danteissaias/fast)|47458|50942|44926|46506|
|[hono](https://github.com/honojs/hono)|46581|49430|47090|43222|
|[oak](https://github.com/oakserver/oak)|27332|28858|27508|25630|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24293|31045|22133|19702|
|[fastify](https://github.com/fastify/fastify)|16074|16511|15722|15989|
|[koa](https://github.com/koajs/koa)|14332|15245|13355|14397|
|[express](https://github.com/expressjs/express)|6350|6518|6052|6481|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70824|79144|77812|55515|
|[nhttp](https://github.com/nhttp/nhttp)|60614|82282|49740|49821|
|[hono](https://github.com/honojs/hono)|52935|62294|53374|43136|
|[baojs](https://github.com/mattreid1/baojs)|32680|37688|32035|28317|
  



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

