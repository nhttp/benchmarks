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
Created At : Mon May 01 2023, 12:41:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|53008|57136|53296|48591|
|[hono](https://github.com/honojs/hono)|47740|51914|48988|42319|
|[fast](https://github.com/danteissaias/fast)|47666|54630|39084|49284|
|[fastro](https://github.com/fastrodev/fastro)|43547|53923|45268|31449|
|[oak](https://github.com/oakserver/oak)|16517|17546|16529|15475|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37587|40586|37171|35003|
|[fastify](https://github.com/fastify/fastify)|28785|29776|28026|28554|
|[koa](https://github.com/koajs/koa)|18368|19164|17137|18804|
|[express](https://github.com/expressjs/express)|6257|6517|5669|6584|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63223|62258|64560|62851|
|[hono](https://github.com/honojs/hono)|61395|61576|61451|61158|
|[elysia](https://github.com/elysiajs/elysia)|59664|59652|60834|58505|
|[baojs](https://github.com/mattreid1/baojs)|49913|58416|54384|36940|
  



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

