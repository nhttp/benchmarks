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
Created At : Wed Jun 11 2025, 1:03:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|59314|63311|64921|49710|
|[nhttp](https://github.com/nhttp/nhttp)|56572|66517|54814|48384|
|[fast](https://github.com/danteissaias/fast)|55946|64205|47251|56381|
|[oak](https://github.com/oakserver/oak)|27819|28242|27199|28016|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38726|43901|37892|34386|
|[fastify](https://github.com/fastify/fastify)|25485|26673|25466|24315|
|[koa](https://github.com/koajs/koa)|17113|17548|17322|16469|
|[express](https://github.com/expressjs/express)|6536|6677|6261|6670|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|83030|98249|77392|73448|
|[nhttp](https://github.com/nhttp/nhttp)|68469|87098|58773|59537|
|[hono](https://github.com/honojs/hono)|64373|72845|60837|59436|
|[baojs](https://github.com/mattreid1/baojs)|48408|54901|43754|46570|
  



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

