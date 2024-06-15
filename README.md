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
Created At : Sat Jun 15 2024, 12:40:25 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|49240|51997|50474|45250|
|[nhttp](https://github.com/nhttp/nhttp)|48708|52511|47770|45843|
|[fast](https://github.com/danteissaias/fast)|48183|52274|45131|47145|
|[oak](https://github.com/oakserver/oak)|27826|28740|27468|27271|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24532|30116|22715|20765|
|[fastify](https://github.com/fastify/fastify)|17086|17509|16892|16856|
|[koa](https://github.com/koajs/koa)|14620|15663|13736|14460|
|[express](https://github.com/expressjs/express)|6515|6612|6390|6542|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67073|87566|71980|41674|
|[nhttp](https://github.com/nhttp/nhttp)|57779|80562|48879|43896|
|[hono](https://github.com/honojs/hono)|56211|69255|54444|44935|
|[baojs](https://github.com/mattreid1/baojs)|36475|44569|33143|31712|
  



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

