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
Created At : Thu Sep 26 2024, 12:49:03 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47036|50796|46399|43913|
|[hono](https://github.com/honojs/hono)|46696|49826|47529|42734|
|[fast](https://github.com/danteissaias/fast)|45974|50625|42501|44796|
|[oak](https://github.com/oakserver/oak)|25330|26340|24792|24859|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24703|30481|22573|21054|
|[fastify](https://github.com/fastify/fastify)|16759|17204|16485|16589|
|[koa](https://github.com/koajs/koa)|13457|14057|12768|13546|
|[express](https://github.com/expressjs/express)|6067|6174|5698|6328|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|62451|80423|65875|41056|
|[nhttp](https://github.com/nhttp/nhttp)|49935|78304|35172|36328|
|[hono](https://github.com/honojs/hono)|47866|53378|48033|42186|
|[baojs](https://github.com/mattreid1/baojs)|34025|37757|33675|30643|
  



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

