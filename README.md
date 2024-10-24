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
Created At : Thu Oct 24 2024, 12:49:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47748|51915|46705|44624|
|[hono](https://github.com/honojs/hono)|47016|49634|48111|43302|
|[fast](https://github.com/danteissaias/fast)|46703|51057|44249|44804|
|[oak](https://github.com/oakserver/oak)|25467|26452|24933|25015|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24464|30618|22283|20490|
|[fastify](https://github.com/fastify/fastify)|16263|16712|16215|15862|
|[koa](https://github.com/koajs/koa)|13772|14075|13060|14180|
|[express](https://github.com/expressjs/express)|6181|6439|5902|6203|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73912|79182|79491|63063|
|[hono](https://github.com/honojs/hono)|54510|70236|47473|45821|
|[nhttp](https://github.com/nhttp/nhttp)|54202|82162|43215|37230|
|[baojs](https://github.com/mattreid1/baojs)|31820|35123|33540|26798|
  



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

