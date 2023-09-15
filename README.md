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
Created At : Fri Sep 15 2023, 12:35:44 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|67034|70997|66985|63121|
|[hono](https://github.com/honojs/hono)|64052|69656|64841|57660|
|[fast](https://github.com/danteissaias/fast)|57211|69790|38250|63592|
|[fastro](https://github.com/fastrodev/fastro)|28052|71403|6558|6194|
|[oak](https://github.com/oakserver/oak)|19121|20201|18706|18457|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44429|48987|45065|39234|
|[fastify](https://github.com/fastify/fastify)|34777|35205|35177|33948|
|[koa](https://github.com/koajs/koa)|21927|22968|20803|22009|
|[express](https://github.com/expressjs/express)|7571|7826|7056|7832|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|65375|62844|66060|67220|
|[hono](https://github.com/honojs/hono)|61687|60785|57820|66457|
|[elysia](https://github.com/elysiajs/elysia)|61325|62157|59137|62681|
|[baojs](https://github.com/mattreid1/baojs)|53169|60943|45145|53419|
  



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

