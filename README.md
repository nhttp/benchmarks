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
Created At : Sat Oct 05 2024, 12:48:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47844|51376|47223|44932|
|[hono](https://github.com/honojs/hono)|47692|50763|48582|43732|
|[fast](https://github.com/danteissaias/fast)|47421|52136|43771|46357|
|[oak](https://github.com/oakserver/oak)|26005|26967|25458|25590|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24467|30499|22596|20306|
|[fastify](https://github.com/fastify/fastify)|16865|17413|16795|16387|
|[koa](https://github.com/koajs/koa)|13441|14237|12609|13478|
|[express](https://github.com/expressjs/express)|6204|6380|5831|6401|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|64494|79943|66445|47094|
|[nhttp](https://github.com/nhttp/nhttp)|57156|80141|45507|45821|
|[hono](https://github.com/honojs/hono)|48307|64651|41225|39046|
|[baojs](https://github.com/mattreid1/baojs)|33525|39058|33666|27850|
  



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

