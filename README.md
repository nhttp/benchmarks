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
Created At : Sat Sep 21 2024, 12:46:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47704|52024|46728|44359|
|[hono](https://github.com/honojs/hono)|47314|50634|48044|43265|
|[fast](https://github.com/danteissaias/fast)|45570|50005|42553|44152|
|[oak](https://github.com/oakserver/oak)|25239|26461|24647|24608|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24873|31455|22660|20503|
|[fastify](https://github.com/fastify/fastify)|16943|17227|16976|16625|
|[koa](https://github.com/koajs/koa)|13560|14349|12738|13594|
|[express](https://github.com/expressjs/express)|6049|6192|5712|6242|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|63692|80153|66871|44051|
|[nhttp](https://github.com/nhttp/nhttp)|53386|80155|39107|40897|
|[hono](https://github.com/honojs/hono)|48294|63644|40629|40608|
|[baojs](https://github.com/mattreid1/baojs)|34021|38543|30659|32861|
  



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

