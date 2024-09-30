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
Created At : Mon Sep 30 2024, 12:51:55 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|46983|49886|48077|42985|
|[nhttp](https://github.com/nhttp/nhttp)|46698|50294|45866|43933|
|[fast](https://github.com/danteissaias/fast)|46100|51052|42861|44387|
|[oak](https://github.com/oakserver/oak)|25946|27029|25144|25664|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24498|30032|22820|20642|
|[fastify](https://github.com/fastify/fastify)|16991|17534|16832|16606|
|[koa](https://github.com/koajs/koa)|13350|14108|12640|13302|
|[express](https://github.com/expressjs/express)|6140|6282|5906|6231|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|64300|81669|67028|44204|
|[nhttp](https://github.com/nhttp/nhttp)|56418|81609|48529|39116|
|[hono](https://github.com/honojs/hono)|55031|68421|53048|43625|
|[baojs](https://github.com/mattreid1/baojs)|35958|43559|34545|29770|
  



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

