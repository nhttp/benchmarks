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
Created At : Sun Aug 04 2024, 12:47:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46162|49049|46276|43161|
|[hono](https://github.com/honojs/hono)|46058|49546|46791|41836|
|[fast](https://github.com/danteissaias/fast)|44428|47959|42179|43147|
|[oak](https://github.com/oakserver/oak)|25859|26709|25318|25550|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24863|30457|22857|21276|
|[fastify](https://github.com/fastify/fastify)|17022|17469|16877|16721|
|[koa](https://github.com/koajs/koa)|14341|15391|13516|14116|
|[express](https://github.com/expressjs/express)|6427|6554|6112|6614|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70368|83645|79841|47618|
|[nhttp](https://github.com/nhttp/nhttp)|63047|83989|55194|49958|
|[hono](https://github.com/honojs/hono)|56622|72628|49129|48108|
|[baojs](https://github.com/mattreid1/baojs)|36718|43248|32921|33984|
  



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

