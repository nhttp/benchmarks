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
Created At : Tue Jun 06 2023, 12:47:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57716|63372|55933|53843|
|[hono](https://github.com/honojs/hono)|55848|59644|58044|49856|
|[fast](https://github.com/danteissaias/fast)|52475|61389|45866|50169|
|[fastro](https://github.com/fastrodev/fastro)|47556|59230|48868|34569|
|[oak](https://github.com/oakserver/oak)|19576|21129|19165|18435|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44179|47354|43178|42004|
|[fastify](https://github.com/fastify/fastify)|35458|36954|35655|33764|
|[koa](https://github.com/koajs/koa)|21945|23348|20412|22075|
|[express](https://github.com/expressjs/express)|7617|7816|7119|7917|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|68436|67920|69821|67567|
|[nhttp](https://github.com/nhttp/nhttp)|67797|66462|69366|67562|
|[elysia](https://github.com/elysiajs/elysia)|65444|65535|66066|64731|
|[baojs](https://github.com/mattreid1/baojs)|55744|63621|46370|57241|
  



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

