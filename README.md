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
Created At : Sun Nov 19 2023, 12:41:00 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|44564|48408|42786|42497|
|[nhttp](https://github.com/nhttp/nhttp)|43706|46768|42968|41383|
|[hono](https://github.com/honojs/hono)|42859|45499|43581|39497|
|[fastro](https://github.com/fastrodev/fastro)|22971|46574|11417|10921|
|[oak](https://github.com/oakserver/oak)|19997|21392|20083|18517|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25098|29344|23979|21972|
|[fastify](https://github.com/fastify/fastify)|14831|15044|14785|14664|
|[koa](https://github.com/koajs/koa)|13689|14145|13127|13796|
|[express](https://github.com/expressjs/express)|6073|6385|5598|6235|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69740|79480|72744|56997|
|[hono](https://github.com/honojs/hono)|63377|73333|56526|60273|
|[nhttp](https://github.com/nhttp/nhttp)|62102|78507|53766|54034|
|[baojs](https://github.com/mattreid1/baojs)|34695|41742|33351|28992|
  



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

