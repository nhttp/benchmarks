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
Created At : Sat Jul 22 2023, 12:44:26 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61718|65332|61278|58543|
|[hono](https://github.com/honojs/hono)|61479|66582|62371|55485|
|[fastro](https://github.com/fastrodev/fastro)|23699|60093|5270|5734|
|[oak](https://github.com/oakserver/oak)|18278|19628|18150|17055|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42145|45816|41671|38947|
|[fastify](https://github.com/fastify/fastify)|33814|34418|34136|32887|
|[koa](https://github.com/koajs/koa)|21145|22211|20118|21107|
|[express](https://github.com/expressjs/express)|7608|7892|7186|7746|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|69236|67255|70483|69970|
|[hono](https://github.com/honojs/hono)|67349|66083|67151|68812|
|[elysia](https://github.com/elysiajs/elysia)|66865|67010|67909|65676|
|[baojs](https://github.com/mattreid1/baojs)|56253|62812|46894|59053|
  



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

