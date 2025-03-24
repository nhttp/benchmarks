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
Created At : Mon Mar 24 2025, 12:55:51 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59872|66307|59190|54118|
|[hono](https://github.com/honojs/hono)|58551|66963|56181|52510|
|[fast](https://github.com/danteissaias/fast)|54824|64690|45594|54188|
|[oak](https://github.com/oakserver/oak)|27845|29052|26497|27987|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38427|45646|36639|32995|
|[fastify](https://github.com/fastify/fastify)|24416|24552|26646|22050|
|[koa](https://github.com/koajs/koa)|16596|17293|15530|16965|
|[express](https://github.com/expressjs/express)|6907|7100|6411|7210|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79214|86168|79751|71723|
|[nhttp](https://github.com/nhttp/nhttp)|67959|92694|55823|55360|
|[hono](https://github.com/honojs/hono)|66611|75217|63821|60795|
|[baojs](https://github.com/mattreid1/baojs)|47247|50895|45195|45650|
  



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

