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
Created At : Fri Oct 20 2023, 12:36:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60330|62812|61765|56414|
|[hono](https://github.com/honojs/hono)|56776|60324|58575|51428|
|[fast](https://github.com/danteissaias/fast)|51933|60692|40284|54822|
|[fastro](https://github.com/fastrodev/fastro)|24441|59799|6752|6773|
|[oak](https://github.com/oakserver/oak)|17713|18631|17711|16797|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38448|41784|37849|35710|
|[fastify](https://github.com/fastify/fastify)|28210|29538|28283|26809|
|[koa](https://github.com/koajs/koa)|18862|19802|17504|19280|
|[express](https://github.com/expressjs/express)|6049|6141|5757|6248|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57454|56114|57574|58673|
|[hono](https://github.com/honojs/hono)|57373|53072|59147|59900|
|[elysia](https://github.com/elysiajs/elysia)|55795|56041|51342|60002|
|[baojs](https://github.com/mattreid1/baojs)|44335|49685|36856|46463|
  



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

