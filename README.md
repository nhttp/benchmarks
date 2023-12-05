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
Created At : Tue Dec 05 2023, 12:39:18 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45445|48484|44672|43180|
|[fast](https://github.com/danteissaias/fast)|44465|47740|42606|43048|
|[hono](https://github.com/honojs/hono)|43610|46110|43833|40888|
|[fastro](https://github.com/fastrodev/fastro)|22889|46180|11871|10616|
|[oak](https://github.com/oakserver/oak)|20264|21309|20114|19370|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25931|30563|24423|22806|
|[fastify](https://github.com/fastify/fastify)|15371|15609|15237|15266|
|[koa](https://github.com/koajs/koa)|14077|14498|13213|14521|
|[express](https://github.com/expressjs/express)|6268|6407|6038|6360|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71671|80498|75512|59004|
|[nhttp](https://github.com/nhttp/nhttp)|60277|78193|48829|53810|
|[hono](https://github.com/honojs/hono)|54918|64943|55229|44582|
|[baojs](https://github.com/mattreid1/baojs)|31899|35232|32466|28000|
  



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

