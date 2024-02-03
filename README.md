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
Created At : Sat Feb 03 2024, 12:36:22 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47657|51325|43710|47937|
|[nhttp](https://github.com/nhttp/nhttp)|47195|50717|46301|44568|
|[hono](https://github.com/honojs/hono)|46131|48691|46618|43084|
|[oak](https://github.com/oakserver/oak)|27201|28625|27251|25726|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24234|30521|22407|19775|
|[fastify](https://github.com/fastify/fastify)|16459|16742|16339|16296|
|[koa](https://github.com/koajs/koa)|14149|14891|13192|14364|
|[express](https://github.com/expressjs/express)|6403|6544|6157|6509|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72210|85317|75987|55327|
|[nhttp](https://github.com/nhttp/nhttp)|61808|87698|50318|47408|
|[hono](https://github.com/honojs/hono)|61095|71283|58125|53876|
|[baojs](https://github.com/mattreid1/baojs)|34814|39025|32607|32811|
  



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

