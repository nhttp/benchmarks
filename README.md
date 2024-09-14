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
Created At : Sat Sep 14 2024, 12:45:54 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48576|52988|47720|45020|
|[hono](https://github.com/honojs/hono)|48303|50359|49656|44893|
|[fast](https://github.com/danteissaias/fast)|48148|53125|45735|45584|
|[oak](https://github.com/oakserver/oak)|26177|27067|25490|25973|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25227|31468|22958|21255|
|[fastify](https://github.com/fastify/fastify)|16794|17005|16682|16694|
|[express](https://github.com/expressjs/express)|6247|6489|5836|6416|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75197|81121|82138|62333|
|[hono](https://github.com/honojs/hono)|63899|77879|54145|59672|
|[nhttp](https://github.com/nhttp/nhttp)|57247|80258|50148|41334|
|[baojs](https://github.com/mattreid1/baojs)|34797|41024|33799|29567|
  



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

