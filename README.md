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
Created At : Tue Apr 25 2023, 12:40:19 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38993|41219|38401|37360|
|[hono](https://github.com/honojs/hono)|37003|39180|37544|34285|
|[fast](https://github.com/danteissaias/fast)|35245|40259|28489|36988|
|[fastro](https://github.com/fastrodev/fastro)|32321|37730|33332|25902|
|[oak](https://github.com/oakserver/oak)|17870|19237|17609|16764|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36684|39911|35678|34462|
|[fastify](https://github.com/fastify/fastify)|29560|30888|29482|28310|
|[koa](https://github.com/koajs/koa)|18386|19206|17287|18666|
|[express](https://github.com/expressjs/express)|6347|6580|5802|6658|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63538|62848|65286|62480|
|[elysia](https://github.com/elysiajs/elysia)|60063|61223|59728|59238|
|[hono](https://github.com/honojs/hono)|59664|54014|61610|63368|
|[baojs](https://github.com/mattreid1/baojs)|50766|57543|40592|54164|
  



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

