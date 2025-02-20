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
Created At : Thu Feb 20 2025, 12:51:10 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60683|66167|59519|56363|
|[hono](https://github.com/honojs/hono)|56177|59522|55808|53200|
|[fast](https://github.com/danteissaias/fast)|54992|62636|46165|56175|
|[oak](https://github.com/oakserver/oak)|29378|31005|28516|28614|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39703|46193|37054|35863|
|[fastify](https://github.com/fastify/fastify)|25242|25122|25531|25074|
|[koa](https://github.com/koajs/koa)|17134|18256|15808|17338|
|[express](https://github.com/expressjs/express)|7084|7262|6581|7409|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|81943|94545|80210|71073|
|[nhttp](https://github.com/nhttp/nhttp)|73356|95603|61668|62797|
|[hono](https://github.com/honojs/hono)|66055|74612|61726|61826|
|[baojs](https://github.com/mattreid1/baojs)|50993|55184|51225|46569|
  



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

