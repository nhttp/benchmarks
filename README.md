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
Created At : Tue May 21 2024, 12:39:35 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48115|51479|47157|45708|
|[hono](https://github.com/honojs/hono)|47745|50294|48086|44854|
|[fast](https://github.com/danteissaias/fast)|47424|51055|45405|45812|
|[oak](https://github.com/oakserver/oak)|27838|29187|28115|26213|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25261|32483|22943|20358|
|[fastify](https://github.com/fastify/fastify)|16162|16560|16332|15594|
|[koa](https://github.com/koajs/koa)|14299|15202|13285|14411|
|[express](https://github.com/expressjs/express)|6354|6471|6057|6535|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77010|84570|79695|66766|
|[nhttp](https://github.com/nhttp/nhttp)|57815|83937|43714|45794|
|[hono](https://github.com/honojs/hono)|57713|61472|56471|55197|
|[baojs](https://github.com/mattreid1/baojs)|37307|42130|36804|32987|
  



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

