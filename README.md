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
Created At : Sun Oct 06 2024, 12:53:47 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47648|51572|47088|44284|
|[fast](https://github.com/danteissaias/fast)|47597|51507|44095|47188|
|[hono](https://github.com/honojs/hono)|47375|50755|48116|43253|
|[oak](https://github.com/oakserver/oak)|25456|26389|24975|25005|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25382|32116|22963|21068|
|[fastify](https://github.com/fastify/fastify)|17195|17753|17010|16823|
|[koa](https://github.com/koajs/koa)|13603|14312|12960|13537|
|[express](https://github.com/expressjs/express)|6160|6302|5794|6384|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70575|81964|71223|58537|
|[nhttp](https://github.com/nhttp/nhttp)|59803|84229|48994|46185|
|[hono](https://github.com/honojs/hono)|54643|59399|54089|50442|
|[baojs](https://github.com/mattreid1/baojs)|36511|42834|36466|30233|
  



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

