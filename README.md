## Runtime JS/TS benchmarks.
This benchmark uses [bombardier](https://github.com/codesenberg/bombardier).

> Focus on framework features.

Example code for benchmark.
```ts
// GET /
framework.get("/", (req, res) => {
  res.send("home");
});

// GET /blog/99?title=bench
framework.get("/blog/:id", (req, res) => {
  res.send(`${req.params.id} ${req.query.title}`);
});

// GET /api/user (set header & send json)
framework.get("/api/user", (req, res) => {
  res.setHeader("x-powered-by", "bench");
  res.json({ user: "john" });
});
```

## Output
Created At : Tue Mar 07 2023, 8:17:18 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|40211|44182|36994|39458|
|[nhttp](https://github.com/nhttp/nhttp)|39930|41096|39097|39598|
|[hono](https://github.com/honojs/hono)|34951|39023|38197|27632|
|[fastro](https://github.com/fastrodev/fastro)|30703|37830|26487|27792|
|[oak](https://github.com/oakserver/oak)|17246|16889|18139|16711|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|55680|60049|53855|53137|
|[elysia](https://github.com/elysiajs/elysia)|53679|61755|51453|47830|
|[hono](https://github.com/honojs/hono)|51983|62483|50539|42926|
|[baojs](https://github.com/mattreid1/baojs)|46323|46843|43591|48535|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|29426|30098|30729|27451|
|[fastify](https://github.com/fastify/fastify)|28878|32541|23220|30872|
|[koa](https://github.com/koajs/koa)|18179|17811|17635|19090|
|[express](https://github.com/expressjs/express)|6460|6472|6270|6639|
  


### Results
|Name|Lang/Runtime|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|Bun|55680|60049|53855|53137|
|[elysia](https://github.com/elysiajs/elysia)|Bun|53679|61755|51453|47830|
|[hono](https://github.com/honojs/hono)|Bun|51983|62483|50539|42926|
|[baojs](https://github.com/mattreid1/baojs)|Bun|46323|46843|43591|48535|
|[fast](https://github.com/danteissaias/fast)|Deno|40211|44182|36994|39458|
|[nhttp](https://github.com/nhttp/nhttp)|Deno|39930|41096|39097|39598|
|[hono](https://github.com/honojs/hono)|Deno|34951|39023|38197|27632|
|[fastro](https://github.com/fastrodev/fastro)|Deno|30703|37830|26487|27792|
|[nhttp](https://github.com/nhttp/nhttp)|Node|29426|30098|30729|27451|
|[fastify](https://github.com/fastify/fastify)|Node|28878|32541|23220|30872|
|[koa](https://github.com/koajs/koa)|Node|18179|17811|17635|19090|
|[oak](https://github.com/oakserver/oak)|Deno|17246|16889|18139|16711|
|[express](https://github.com/expressjs/express)|Node|6460|6472|6270|6639|



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

