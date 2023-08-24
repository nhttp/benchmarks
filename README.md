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
Created At : Thu Aug 24 2023, 12:34:14 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|51099|54944|49491|48863|
|[hono](https://github.com/honojs/hono)|46736|46034|49359|44815|
|[fastro](https://github.com/fastrodev/fastro)|20244|51477|4583|4671|
|[oak](https://github.com/oakserver/oak)|15846|16861|15633|15043|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|30744|33297|30327|28607|
|[fastify](https://github.com/fastify/fastify)|24670|25673|24763|23573|
|[koa](https://github.com/koajs/koa)|15541|16297|14530|15797|
|[express](https://github.com/expressjs/express)|5328|5570|4723|5692|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|55376|55247|56793|54089|
|[hono](https://github.com/honojs/hono)|53679|55653|54669|50715|
|[nhttp](https://github.com/nhttp/nhttp)|52591|56905|51769|49099|
|[baojs](https://github.com/mattreid1/baojs)|37469|42817|38553|31036|
  



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

