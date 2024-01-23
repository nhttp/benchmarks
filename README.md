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
Created At : Tue Jan 23 2024, 12:40:15 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47951|51580|46777|45497|
|[fast](https://github.com/danteissaias/fast)|47402|50431|44435|47341|
|[hono](https://github.com/honojs/hono)|46873|49286|47422|43911|
|[fastro](https://github.com/fastrodev/fastro)|24784|51433|11634|11284|
|[oak](https://github.com/oakserver/oak)|22356|23573|22263|21232|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24902|32016|22805|19884|
|[fastify](https://github.com/fastify/fastify)|16560|16669|16343|16669|
|[koa](https://github.com/koajs/koa)|14157|14958|13486|14026|
|[express](https://github.com/expressjs/express)|6373|6535|6058|6526|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68917|83151|72669|50930|
|[hono](https://github.com/honojs/hono)|62829|76640|56371|55477|
|[nhttp](https://github.com/nhttp/nhttp)|60239|83866|53724|43126|
|[baojs](https://github.com/mattreid1/baojs)|35384|40596|33709|31847|
  



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

