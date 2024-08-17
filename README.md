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
Created At : Sat Aug 17 2024, 12:42:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47234|50429|46837|44436|
|[hono](https://github.com/honojs/hono)|47055|50595|47349|43220|
|[fast](https://github.com/danteissaias/fast)|46203|49848|43106|45656|
|[oak](https://github.com/oakserver/oak)|26128|27243|25601|25541|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24810|30441|22916|21073|
|[fastify](https://github.com/fastify/fastify)|17059|17669|16990|16519|
|[koa](https://github.com/koajs/koa)|14076|14783|13071|14373|
|[express](https://github.com/expressjs/express)|6432|6572|6171|6552|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67079|83583|73364|44291|
|[nhttp](https://github.com/nhttp/nhttp)|53775|80584|39759|40981|
|[hono](https://github.com/honojs/hono)|52103|67350|50094|38866|
|[baojs](https://github.com/mattreid1/baojs)|31441|34368|31449|28505|
  



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

