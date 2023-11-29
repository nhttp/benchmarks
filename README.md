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
Created At : Wed Nov 29 2023, 12:38:39 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45632|49708|44560|42627|
|[fast](https://github.com/danteissaias/fast)|45509|49729|42850|43948|
|[hono](https://github.com/honojs/hono)|43910|46462|44540|40729|
|[fastro](https://github.com/fastrodev/fastro)|23310|48085|11174|10670|
|[oak](https://github.com/oakserver/oak)|20654|21923|20253|19786|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26303|31170|24581|23158|
|[fastify](https://github.com/fastify/fastify)|16014|17065|15578|15399|
|[koa](https://github.com/koajs/koa)|14264|14837|13606|14348|
|[express](https://github.com/expressjs/express)|6384|6441|6093|6619|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|70811|77780|67233|67421|
|[elysia](https://github.com/elysiajs/elysia)|69697|79833|71861|57398|
|[nhttp](https://github.com/nhttp/nhttp)|66317|80177|64608|54167|
|[baojs](https://github.com/mattreid1/baojs)|36573|41900|35255|32563|
  



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

