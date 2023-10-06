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
Created At : Fri Oct 06 2023, 12:37:36 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63082|64972|62621|61653|
|[hono](https://github.com/honojs/hono)|62408|66627|63878|56718|
|[fast](https://github.com/danteissaias/fast)|54966|68023|53807|43068|
|[fastro](https://github.com/fastrodev/fastro)|28145|69215|7853|7367|
|[oak](https://github.com/oakserver/oak)|19088|20142|19428|17695|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44243|47639|43806|41284|
|[fastify](https://github.com/fastify/fastify)|31390|31548|31300|31322|
|[koa](https://github.com/koajs/koa)|20534|21967|19361|20275|
|[express](https://github.com/expressjs/express)|7350|7502|7184|7365|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60590|56602|61367|63802|
|[elysia](https://github.com/elysiajs/elysia)|57508|59867|57185|55472|
|[hono](https://github.com/honojs/hono)|57486|56488|52421|63548|
|[baojs](https://github.com/mattreid1/baojs)|48082|52138|43381|48727|
  



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

