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
Created At : Fri Jul 28 2023, 12:40:40 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63692|69649|63066|58360|
|[hono](https://github.com/honojs/hono)|62657|68785|62419|56767|
|[fastro](https://github.com/fastrodev/fastro)|22984|57675|5497|5780|
|[oak](https://github.com/oakserver/oak)|18416|19714|18076|17459|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42517|45866|42165|39520|
|[fastify](https://github.com/fastify/fastify)|34859|36576|34868|33134|
|[koa](https://github.com/koajs/koa)|21937|23091|20754|21965|
|[express](https://github.com/expressjs/express)|7744|7950|7523|7759|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|69667|68510|71829|68661|
|[hono](https://github.com/honojs/hono)|69240|67317|68796|71608|
|[elysia](https://github.com/elysiajs/elysia)|67393|65752|68160|68268|
|[baojs](https://github.com/mattreid1/baojs)|55703|63089|45139|58880|
  



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

