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
Created At : Thu Jun 05 2025, 1:04:26 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60391|65823|57565|57785|
|[hono](https://github.com/honojs/hono)|59207|62702|60058|54861|
|[fast](https://github.com/danteissaias/fast)|55078|64158|52166|48910|
|[oak](https://github.com/oakserver/oak)|28668|30547|27897|27561|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40545|47383|38870|35381|
|[fastify](https://github.com/fastify/fastify)|25410|25442|27195|23593|
|[koa](https://github.com/koajs/koa)|17280|17639|17135|17065|
|[express](https://github.com/expressjs/express)|6566|6714|6227|6758|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|85136|91802|82028|81578|
|[nhttp](https://github.com/nhttp/nhttp)|71324|91583|62172|60216|
|[hono](https://github.com/honojs/hono)|63412|73488|56758|59991|
|[baojs](https://github.com/mattreid1/baojs)|48977|52508|45493|48929|
  



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

