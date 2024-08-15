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
Created At : Thu Aug 15 2024, 12:41:56 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|45517|49169|41825|45556|
|[hono](https://github.com/honojs/hono)|45167|47722|45778|42001|
|[nhttp](https://github.com/nhttp/nhttp)|45148|48397|44982|42064|
|[oak](https://github.com/oakserver/oak)|25490|26593|24777|25100|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24312|30113|22605|20218|
|[fastify](https://github.com/fastify/fastify)|16530|17050|16283|16257|
|[koa](https://github.com/koajs/koa)|14315|15026|13572|14348|
|[express](https://github.com/expressjs/express)|6255|6402|5927|6435|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|65579|81999|71529|43210|
|[nhttp](https://github.com/nhttp/nhttp)|53527|84183|37650|38749|
|[hono](https://github.com/honojs/hono)|49696|62222|46094|40771|
|[baojs](https://github.com/mattreid1/baojs)|31502|35532|30484|28491|
  



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

