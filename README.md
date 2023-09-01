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
Created At : Fri Sep 01 2023, 6:59:06 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63564|69046|62100|59547|
|[hono](https://github.com/honojs/hono)|59857|64020|60183|55367|
|[fast](https://github.com/danteissaias/fast)|58150|69970|44793|59687|
|[fastro](https://github.com/fastrodev/fastro)|25068|62229|6795|6179|
|[oak](https://github.com/oakserver/oak)|18952|20182|18742|17933|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46386|49837|45937|43384|
|[fastify](https://github.com/fastify/fastify)|34183|36172|32876|33501|
|[koa](https://github.com/koajs/koa)|21677|22890|20375|21765|
|[express](https://github.com/expressjs/express)|7611|7806|7272|7754|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|68378|67614|69564|67956|
|[elysia](https://github.com/elysiajs/elysia)|68307|67427|67079|70414|
|[nhttp](https://github.com/nhttp/nhttp)|60270|66652|47370|66789|
|[baojs](https://github.com/mattreid1/baojs)|49042|56591|52264|38272|
  



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

