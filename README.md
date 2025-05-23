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
Created At : Fri May 23 2025, 1:00:54 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59964|69208|55990|54694|
|[hono](https://github.com/honojs/hono)|57273|63017|58802|49999|
|[fast](https://github.com/danteissaias/fast)|53329|61501|47408|51078|
|[oak](https://github.com/oakserver/oak)|27665|28852|27456|26686|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38439|44703|38629|31984|
|[fastify](https://github.com/fastify/fastify)|24905|24525|25981|24210|
|[koa](https://github.com/koajs/koa)|17146|17563|16999|16875|
|[express](https://github.com/expressjs/express)|6576|6634|6363|6732|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|82850|94983|73158|80410|
|[nhttp](https://github.com/nhttp/nhttp)|70179|90831|59272|60433|
|[hono](https://github.com/honojs/hono)|66515|76586|63300|59658|
|[baojs](https://github.com/mattreid1/baojs)|50970|56143|45879|50888|
  



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

