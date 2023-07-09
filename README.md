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
Created At : Sun Jul 09 2023, 12:56:10 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61710|66010|60401|58718|
|[hono](https://github.com/honojs/hono)|55466|63450|47193|55755|
|[oak](https://github.com/oakserver/oak)|18652|19969|18419|17569|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|33272|34552|32992|32272|
|[nhttp](https://github.com/nhttp/nhttp)|22399|22148|22312|22738|
|[koa](https://github.com/koajs/koa)|18936|19679|17933|19197|
|[express](https://github.com/expressjs/express)|7249|7471|6826|7451|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|67286|64635|67996|69228|
|[hono](https://github.com/honojs/hono)|66752|65295|67767|67194|
|[elysia](https://github.com/elysiajs/elysia)|66234|65500|66246|66955|
|[baojs](https://github.com/mattreid1/baojs)|55510|63788|55724|47019|
  



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

