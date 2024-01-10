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
Created At : Wed Jan 10 2024, 12:39:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46367|50281|44731|44088|
|[fast](https://github.com/danteissaias/fast)|45728|49295|44056|43833|
|[hono](https://github.com/honojs/hono)|44842|47703|45549|41273|
|[fastro](https://github.com/fastrodev/fastro)|23533|47881|11251|11467|
|[oak](https://github.com/oakserver/oak)|21322|22340|21304|20321|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26221|32993|23468|22203|
|[fastify](https://github.com/fastify/fastify)|15671|16185|15290|15538|
|[koa](https://github.com/koajs/koa)|14254|14988|13439|14335|
|[express](https://github.com/expressjs/express)|6355|6405|6135|6526|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73376|79737|78764|61627|
|[nhttp](https://github.com/nhttp/nhttp)|62894|81779|53561|53342|
|[hono](https://github.com/honojs/hono)|59561|73429|53590|51663|
|[baojs](https://github.com/mattreid1/baojs)|35786|41239|33731|32389|
  



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

