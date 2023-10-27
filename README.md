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
Created At : Fri Oct 27 2023, 12:35:18 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60165|61236|62629|56631|
|[hono](https://github.com/honojs/hono)|58796|63071|61017|52299|
|[fast](https://github.com/danteissaias/fast)|53425|61707|54339|44228|
|[fastro](https://github.com/fastrodev/fastro)|24993|61793|6742|6445|
|[oak](https://github.com/oakserver/oak)|18172|19392|17862|17261|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39689|42769|39247|37052|
|[fastify](https://github.com/fastify/fastify)|29608|31021|29544|28260|
|[koa](https://github.com/koajs/koa)|19186|20411|17814|19332|
|[express](https://github.com/expressjs/express)|6221|6430|6075|6157|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58550|54752|60173|60724|
|[hono](https://github.com/honojs/hono)|56817|51543|58579|60329|
|[elysia](https://github.com/elysiajs/elysia)|55392|55337|51380|59460|
|[baojs](https://github.com/mattreid1/baojs)|48196|54860|48671|41057|
  



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

