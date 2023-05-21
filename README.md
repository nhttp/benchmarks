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
Created At : Sun May 21 2023, 12:43:30 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|54655|58110|56700|49156|
|[nhttp](https://github.com/nhttp/nhttp)|54353|58299|54234|50525|
|[fastro](https://github.com/fastrodev/fastro)|46270|55586|49892|33332|
|[fast](https://github.com/danteissaias/fast)|45690|57612|49418|30040|
|[oak](https://github.com/oakserver/oak)|17965|19071|17954|16869|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37713|40847|37694|34599|
|[fastify](https://github.com/fastify/fastify)|29145|29810|29669|27956|
|[koa](https://github.com/koajs/koa)|18635|19624|17328|18952|
|[express](https://github.com/expressjs/express)|6377|6625|5888|6618|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64038|63304|63460|65350|
|[hono](https://github.com/honojs/hono)|61554|60956|62116|61590|
|[elysia](https://github.com/elysiajs/elysia)|60309|60124|59801|61001|
|[baojs](https://github.com/mattreid1/baojs)|54208|60705|56075|45844|
  



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

