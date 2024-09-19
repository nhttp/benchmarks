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
Created At : Thu Sep 19 2024, 12:47:29 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47563|52322|46698|43670|
|[fast](https://github.com/danteissaias/fast)|46034|50128|42794|45179|
|[hono](https://github.com/honojs/hono)|45060|49840|44631|40709|
|[oak](https://github.com/oakserver/oak)|25493|26311|24960|25208|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23128|27539|21584|20262|
|[fastify](https://github.com/fastify/fastify)|16817|17319|16714|16417|
|[koa](https://github.com/koajs/koa)|12760|13145|12055|13079|
|[express](https://github.com/expressjs/express)|5821|5983|5446|6033|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|55238|69259|58547|37909|
|[nhttp](https://github.com/nhttp/nhttp)|48464|76142|34162|35088|
|[hono](https://github.com/honojs/hono)|46356|56214|40734|42119|
|[baojs](https://github.com/mattreid1/baojs)|31415|35357|31451|27436|
  



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

