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
Created At : Wed Nov 27 2024, 12:53:47 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48411|52668|47697|44868|
|[hono](https://github.com/honojs/hono)|47974|51129|48307|44486|
|[fast](https://github.com/danteissaias/fast)|47696|51997|45091|45999|
|[oak](https://github.com/oakserver/oak)|26108|27205|25646|25474|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24369|29432|22696|20979|
|[fastify](https://github.com/fastify/fastify)|17096|17512|16928|16848|
|[koa](https://github.com/koajs/koa)|13799|14588|12863|13945|
|[express](https://github.com/expressjs/express)|6319|6562|5909|6487|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74990|81037|82216|61717|
|[nhttp](https://github.com/nhttp/nhttp)|57579|84387|42312|46038|
|[hono](https://github.com/honojs/hono)|55344|70623|43177|52233|
|[baojs](https://github.com/mattreid1/baojs)|33795|39487|33968|27931|
  



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

