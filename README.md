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
Created At : Wed Jul 19 2023, 1:21:06 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56926|61477|55330|53971|
|[hono](https://github.com/honojs/hono)|53621|56760|53866|50238|
|[fastro](https://github.com/fastrodev/fastro)|21704|54403|5124|5584|
|[oak](https://github.com/oakserver/oak)|17210|18092|17210|16327|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36693|39541|35944|34595|
|[fastify](https://github.com/fastify/fastify)|28589|30051|28381|27336|
|[koa](https://github.com/koajs/koa)|18437|19378|17438|18494|
|[express](https://github.com/expressjs/express)|6412|6685|5818|6733|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63674|63612|62378|65031|
|[hono](https://github.com/honojs/hono)|62359|59739|64926|62411|
|[elysia](https://github.com/elysiajs/elysia)|61123|60364|60167|62837|
|[baojs](https://github.com/mattreid1/baojs)|50764|56008|44256|52028|
  



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

