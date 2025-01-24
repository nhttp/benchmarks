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
Created At : Fri Jan 24 2025, 12:49:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57407|61976|56137|54107|
|[hono](https://github.com/honojs/hono)|57342|60729|58387|52910|
|[fast](https://github.com/danteissaias/fast)|52379|63044|46782|47311|
|[oak](https://github.com/oakserver/oak)|27570|29789|26265|26656|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38853|43998|38011|34550|
|[fastify](https://github.com/fastify/fastify)|24907|24792|25713|24217|
|[koa](https://github.com/koajs/koa)|17112|18026|16054|17256|
|[express](https://github.com/expressjs/express)|7027|7302|6476|7302|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80044|89787|81997|68347|
|[nhttp](https://github.com/nhttp/nhttp)|70172|90794|59392|60329|
|[hono](https://github.com/honojs/hono)|64988|74104|57610|63249|
|[baojs](https://github.com/mattreid1/baojs)|49115|54311|45577|47457|
  



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

