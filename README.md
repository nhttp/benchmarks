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
Created At : Wed Oct 11 2023, 12:36:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39028|43844|37883|35358|
|[hono](https://github.com/honojs/hono)|35761|38747|36398|32137|
|[fast](https://github.com/danteissaias/fast)|34093|41334|35816|25129|
|[fastro](https://github.com/fastrodev/fastro)|15807|38729|4529|4164|
|[oak](https://github.com/oakserver/oak)|11133|11591|11151|10658|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|20740|23434|20703|18084|
|[fastify](https://github.com/fastify/fastify)|13210|13523|13179|12929|
|[koa](https://github.com/koajs/koa)|9016|9249|8690|9109|
|[express](https://github.com/expressjs/express)|3717|3833|3590|3728|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|38626|40227|38326|37324|
|[hono](https://github.com/honojs/hono)|38158|41837|37245|35391|
|[nhttp](https://github.com/nhttp/nhttp)|34979|37349|33382|34205|
|[baojs](https://github.com/mattreid1/baojs)|23706|27137|21507|22475|
  



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

