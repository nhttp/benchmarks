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
Created At : Sun Oct 01 2023, 12:41:07 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61299|62990|62586|58322|
|[hono](https://github.com/honojs/hono)|57577|62307|59282|51141|
|[fast](https://github.com/danteissaias/fast)|51194|63011|43999|46572|
|[fastro](https://github.com/fastrodev/fastro)|25766|63347|6992|6958|
|[oak](https://github.com/oakserver/oak)|18017|18717|18017|17317|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39569|42764|38726|37216|
|[fastify](https://github.com/fastify/fastify)|28761|30051|28749|27483|
|[koa](https://github.com/koajs/koa)|18734|19810|17640|18751|
|[express](https://github.com/expressjs/express)|6155|6345|5672|6448|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|59836|56702|62410|60396|
|[nhttp](https://github.com/nhttp/nhttp)|59524|54548|62340|61683|
|[elysia](https://github.com/elysiajs/elysia)|58020|57617|55025|61419|
|[baojs](https://github.com/mattreid1/baojs)|45253|51812|37215|46733|
  



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

