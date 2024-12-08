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
Created At : Sun Dec 08 2024, 1:03:44 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|49088|52719|49697|44849|
|[nhttp](https://github.com/nhttp/nhttp)|49035|51936|49432|45738|
|[fast](https://github.com/danteissaias/fast)|48297|52731|44934|47226|
|[oak](https://github.com/oakserver/oak)|27196|28077|26758|26754|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24506|31132|22377|20010|
|[fastify](https://github.com/fastify/fastify)|17287|17892|16819|17150|
|[koa](https://github.com/koajs/koa)|14424|15212|13464|14595|
|[express](https://github.com/expressjs/express)|6392|6580|6066|6529|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70793|75604|77684|59091|
|[nhttp](https://github.com/nhttp/nhttp)|62811|81555|51010|55868|
|[hono](https://github.com/honojs/hono)|58572|67350|48152|60214|
|[baojs](https://github.com/mattreid1/baojs)|34566|39731|32743|31224|
  



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

