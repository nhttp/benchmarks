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
Created At : Sun Feb 11 2024, 12:39:42 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47549|51224|45300|46124|
|[nhttp](https://github.com/nhttp/nhttp)|47078|49908|46015|45312|
|[hono](https://github.com/honojs/hono)|46264|48501|46627|43664|
|[oak](https://github.com/oakserver/oak)|27244|28646|27266|25820|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24603|30850|22690|20270|
|[fastify](https://github.com/fastify/fastify)|16876|17300|16823|16504|
|[koa](https://github.com/koajs/koa)|14523|15206|13639|14724|
|[express](https://github.com/expressjs/express)|6403|6514|6132|6562|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72577|80693|76787|60252|
|[nhttp](https://github.com/nhttp/nhttp)|60240|84183|49628|46909|
|[hono](https://github.com/honojs/hono)|59252|72512|55295|49948|
|[baojs](https://github.com/mattreid1/baojs)|35233|37476|31859|36363|
  



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

