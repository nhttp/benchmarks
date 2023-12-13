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
Created At : Wed Dec 13 2023, 12:38:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45615|49420|44188|43236|
|[fast](https://github.com/danteissaias/fast)|45283|48709|43671|43468|
|[hono](https://github.com/honojs/hono)|44441|46845|45436|41041|
|[fastro](https://github.com/fastrodev/fastro)|23329|47596|11225|11166|
|[oak](https://github.com/oakserver/oak)|20104|21145|19992|19174|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26704|32431|24768|22913|
|[fastify](https://github.com/fastify/fastify)|15741|16099|15300|15824|
|[koa](https://github.com/koajs/koa)|14301|14770|13467|14666|
|[express](https://github.com/expressjs/express)|6396|6592|6056|6540|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70106|79232|77028|54058|
|[nhttp](https://github.com/nhttp/nhttp)|61566|80736|51383|52579|
|[hono](https://github.com/honojs/hono)|57516|69949|53866|48734|
|[baojs](https://github.com/mattreid1/baojs)|32659|36396|32970|28610|
  



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

