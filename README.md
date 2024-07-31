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
Created At : Wed Jul 31 2024, 12:35:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45691|49885|45711|41477|
|[fast](https://github.com/danteissaias/fast)|45396|49868|43804|42517|
|[hono](https://github.com/honojs/hono)|45223|47640|46094|41936|
|[oak](https://github.com/oakserver/oak)|25301|26081|24909|24912|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24375|30185|22438|20501|
|[fastify](https://github.com/fastify/fastify)|17047|17352|16961|16828|
|[koa](https://github.com/koajs/koa)|14337|15054|13591|14367|
|[express](https://github.com/expressjs/express)|6233|6366|5922|6412|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73535|82088|82666|55852|
|[hono](https://github.com/honojs/hono)|65006|78184|61312|55522|
|[nhttp](https://github.com/nhttp/nhttp)|62631|82729|53101|52063|
|[baojs](https://github.com/mattreid1/baojs)|35886|41144|31763|34751|
  



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

