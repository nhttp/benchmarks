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
Created At : Sat May 17 2025, 12:59:44 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57902|65807|57786|50113|
|[fast](https://github.com/danteissaias/fast)|57329|63686|47421|60881|
|[hono](https://github.com/honojs/hono)|56884|65198|56214|49239|
|[oak](https://github.com/oakserver/oak)|28959|30544|27825|28507|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39833|49209|35541|34748|
|[fastify](https://github.com/fastify/fastify)|24912|25348|24856|24532|
|[koa](https://github.com/koajs/koa)|16997|17562|16750|16679|
|[express](https://github.com/expressjs/express)|6527|6668|6328|6585|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|81034|85210|77793|80098|
|[nhttp](https://github.com/nhttp/nhttp)|70247|94293|59395|57053|
|[hono](https://github.com/honojs/hono)|67578|73708|68157|60870|
|[baojs](https://github.com/mattreid1/baojs)|50267|56922|48554|45326|
  



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

