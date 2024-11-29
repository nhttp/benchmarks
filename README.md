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
Created At : Fri Nov 29 2024, 12:53:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48123|52288|47583|44497|
|[hono](https://github.com/honojs/hono)|47489|49887|48511|44068|
|[fast](https://github.com/danteissaias/fast)|47251|51588|43889|46275|
|[oak](https://github.com/oakserver/oak)|25798|26520|25292|25581|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24014|30106|22048|19888|
|[fastify](https://github.com/fastify/fastify)|17016|17284|17134|16629|
|[koa](https://github.com/koajs/koa)|14003|14926|12849|14234|
|[express](https://github.com/expressjs/express)|6290|6429|5910|6531|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72034|82436|69801|63865|
|[nhttp](https://github.com/nhttp/nhttp)|60090|80633|49262|50374|
|[hono](https://github.com/honojs/hono)|55368|71131|48715|46258|
|[baojs](https://github.com/mattreid1/baojs)|33191|39563|31289|28720|
  



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

