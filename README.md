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
Created At : Mon Feb 03 2025, 12:50:56 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60035|67874|60922|51310|
|[hono](https://github.com/honojs/hono)|55462|67248|52221|46917|
|[fast](https://github.com/danteissaias/fast)|53306|62363|49204|48352|
|[oak](https://github.com/oakserver/oak)|27950|28606|26435|28810|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40414|48426|39297|33518|
|[fastify](https://github.com/fastify/fastify)|23803|25771|22897|22741|
|[koa](https://github.com/koajs/koa)|16579|17360|15857|16520|
|[express](https://github.com/expressjs/express)|6981|7221|6497|7226|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77327|93355|73477|65149|
|[nhttp](https://github.com/nhttp/nhttp)|67906|86580|57868|59269|
|[hono](https://github.com/honojs/hono)|63595|73988|62412|54384|
|[baojs](https://github.com/mattreid1/baojs)|47356|51048|45123|45898|
  



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

