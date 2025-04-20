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
Created At : Sun Apr 20 2025, 1:03:30 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58081|63664|60193|50385|
|[nhttp](https://github.com/nhttp/nhttp)|57774|58523|61893|52905|
|[fast](https://github.com/danteissaias/fast)|55826|67379|51815|48283|
|[oak](https://github.com/oakserver/oak)|28979|30066|29020|27852|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39694|47734|37463|33884|
|[fastify](https://github.com/fastify/fastify)|24495|24847|24581|24056|
|[koa](https://github.com/koajs/koa)|17239|18332|16075|17311|
|[express](https://github.com/expressjs/express)|6415|6557|6169|6519|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75648|82042|73587|71314|
|[nhttp](https://github.com/nhttp/nhttp)|70002|87933|60622|61452|
|[hono](https://github.com/honojs/hono)|64934|73578|63181|58042|
|[baojs](https://github.com/mattreid1/baojs)|50401|53128|49083|48992|
  



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

