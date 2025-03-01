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
Created At : Sat Mar 01 2025, 12:56:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58200|65440|56061|53099|
|[nhttp](https://github.com/nhttp/nhttp)|57484|64652|53551|54250|
|[fast](https://github.com/danteissaias/fast)|52445|61966|47389|47980|
|[oak](https://github.com/oakserver/oak)|28421|29804|27134|28324|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38987|45821|36560|34579|
|[fastify](https://github.com/fastify/fastify)|25945|27018|25199|25617|
|[koa](https://github.com/koajs/koa)|16628|17431|15401|17052|
|[express](https://github.com/expressjs/express)|6981|7295|6369|7280|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78010|89929|80097|64003|
|[nhttp](https://github.com/nhttp/nhttp)|70346|94748|61025|55266|
|[hono](https://github.com/honojs/hono)|67481|74280|64247|63916|
|[baojs](https://github.com/mattreid1/baojs)|49291|52330|46592|48952|
  



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

