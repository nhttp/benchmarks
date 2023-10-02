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
Created At : Mon Oct 02 2023, 12:36:34 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61728|63375|62722|59086|
|[hono](https://github.com/honojs/hono)|58969|64026|60001|52881|
|[fast](https://github.com/danteissaias/fast)|54375|62852|43140|57132|
|[fastro](https://github.com/fastrodev/fastro)|25761|62927|7254|7103|
|[oak](https://github.com/oakserver/oak)|18653|19609|18423|17926|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39578|42883|39069|36781|
|[fastify](https://github.com/fastify/fastify)|29195|30235|29373|27977|
|[koa](https://github.com/koajs/koa)|18525|19629|17321|18625|
|[express](https://github.com/expressjs/express)|6365|6498|6088|6510|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|60515|58083|61030|62432|
|[elysia](https://github.com/elysiajs/elysia)|59264|58641|57195|61956|
|[nhttp](https://github.com/nhttp/nhttp)|58133|54560|60672|59167|
|[baojs](https://github.com/mattreid1/baojs)|47609|54249|40691|47887|
  



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

