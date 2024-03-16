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
Created At : Sat Mar 16 2024, 12:35:05 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48256|52257|46425|46087|
|[fast](https://github.com/danteissaias/fast)|48230|51825|43750|49114|
|[hono](https://github.com/honojs/hono)|47008|49346|47366|44311|
|[oak](https://github.com/oakserver/oak)|27736|29370|27896|25942|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25337|32902|23202|19907|
|[fastify](https://github.com/fastify/fastify)|16374|16597|16702|15823|
|[koa](https://github.com/koajs/koa)|14305|15199|13538|14178|
|[express](https://github.com/expressjs/express)|6395|6610|6054|6521|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76886|84672|81147|64839|
|[nhttp](https://github.com/nhttp/nhttp)|65336|87133|59048|49826|
|[hono](https://github.com/honojs/hono)|57433|72732|48127|51440|
|[baojs](https://github.com/mattreid1/baojs)|34543|42195|32836|28597|
  



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

