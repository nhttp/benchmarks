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
Created At : Wed Aug 09 2023, 12:42:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|38359|41516|38895|34667|
|[nhttp](https://github.com/nhttp/nhttp)|37229|40549|35950|35188|
|[fastro](https://github.com/fastrodev/fastro)|13622|34331|3036|3499|
|[oak](https://github.com/oakserver/oak)|10342|10609|10528|9889|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18566|21172|17926|16599|
|[fastify](https://github.com/fastify/fastify)|14554|15125|14713|13824|
|[koa](https://github.com/koajs/koa)|9515|9751|9231|9564|
|[express](https://github.com/expressjs/express)|3932|3951|3727|4117|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47548|46792|47357|48496|
|[hono](https://github.com/honojs/hono)|43952|48765|43711|39379|
|[elysia](https://github.com/elysiajs/elysia)|43455|46538|44628|39198|
|[baojs](https://github.com/mattreid1/baojs)|33917|37315|37159|27276|
  



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

