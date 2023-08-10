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
Created At : Thu Aug 10 2023, 12:44:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|35805|37296|35787|34331|
|[hono](https://github.com/honojs/hono)|33977|35521|35035|31374|
|[fastro](https://github.com/fastrodev/fastro)|13542|34142|3275|3210|
|[oak](https://github.com/oakserver/oak)|9763|10293|9739|9256|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|17763|20854|16853|15582|
|[fastify](https://github.com/fastify/fastify)|13339|13811|12952|13255|
|[koa](https://github.com/koajs/koa)|9561|9750|9171|9763|
|[express](https://github.com/expressjs/express)|3690|3771|3300|3999|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|40210|37308|44009|39312|
|[nhttp](https://github.com/nhttp/nhttp)|40065|39983|39671|40542|
|[hono](https://github.com/honojs/hono)|39287|44966|37322|35574|
|[baojs](https://github.com/mattreid1/baojs)|31908|35215|28147|32361|
  



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

