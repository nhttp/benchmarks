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
Created At : Sun Jun 09 2024, 12:45:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48940|52752|48610|45459|
|[hono](https://github.com/honojs/hono)|48800|51842|49772|44787|
|[fast](https://github.com/danteissaias/fast)|48130|52497|45640|46254|
|[oak](https://github.com/oakserver/oak)|27526|28664|27047|26867|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24245|29920|22563|20253|
|[fastify](https://github.com/fastify/fastify)|17215|17686|17093|16866|
|[koa](https://github.com/koajs/koa)|14515|15405|13756|14385|
|[express](https://github.com/expressjs/express)|6393|6540|6105|6535|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74925|87566|84431|52778|
|[nhttp](https://github.com/nhttp/nhttp)|61027|87363|48741|46977|
|[hono](https://github.com/honojs/hono)|56442|71354|56440|41533|
|[baojs](https://github.com/mattreid1/baojs)|36954|40926|38521|31416|
  



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

