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
Created At : Mon Aug 19 2024, 12:49:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47150|50807|45907|44736|
|[hono](https://github.com/honojs/hono)|46088|49299|46614|42350|
|[fast](https://github.com/danteissaias/fast)|45731|50535|43853|42805|
|[oak](https://github.com/oakserver/oak)|25888|27038|25204|25421|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24181|29795|22262|20486|
|[fastify](https://github.com/fastify/fastify)|16518|16864|16372|16319|
|[koa](https://github.com/koajs/koa)|13842|14580|12866|14081|
|[express](https://github.com/expressjs/express)|6269|6426|5956|6425|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71386|81118|80003|53036|
|[nhttp](https://github.com/nhttp/nhttp)|61952|78009|58055|49792|
|[hono](https://github.com/honojs/hono)|60922|75029|52016|55721|
|[baojs](https://github.com/mattreid1/baojs)|38026|46736|33476|33866|
  



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

