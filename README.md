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
Created At : Sat Nov 23 2024, 12:51:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48735|52860|47836|45510|
|[fast](https://github.com/danteissaias/fast)|47956|52139|45511|46217|
|[hono](https://github.com/honojs/hono)|47883|50842|48790|44017|
|[oak](https://github.com/oakserver/oak)|26176|27069|25454|26004|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23858|29510|22073|19991|
|[fastify](https://github.com/fastify/fastify)|17094|17515|16977|16790|
|[koa](https://github.com/koajs/koa)|14131|14808|13274|14310|
|[express](https://github.com/expressjs/express)|6335|6517|5984|6505|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74484|84576|70860|68017|
|[hono](https://github.com/honojs/hono)|56446|68525|50228|50584|
|[nhttp](https://github.com/nhttp/nhttp)|56211|85211|36708|46715|
|[baojs](https://github.com/mattreid1/baojs)|36577|42575|36925|30230|
  



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

