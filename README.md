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
Created At : Fri Apr 14 2023, 12:38:27 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|34644|36774|33832|33325|
|[hono](https://github.com/honojs/hono)|33961|35990|34055|31839|
|[fast](https://github.com/danteissaias/fast)|31063|36932|31094|25163|
|[fastro](https://github.com/fastrodev/fastro)|29019|34285|29935|22837|
|[oak](https://github.com/oakserver/oak)|13347|14060|13376|12604|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|34647|37368|34539|32035|
|[fastify](https://github.com/fastify/fastify)|27954|29661|27768|26432|
|[koa](https://github.com/koajs/koa)|17566|18682|16533|17483|
|[express](https://github.com/expressjs/express)|5884|6047|5314|6292|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59069|58393|58120|60693|
|[hono](https://github.com/honojs/hono)|56333|55260|55687|58053|
|[elysia](https://github.com/elysiajs/elysia)|55838|55449|56652|55413|
|[baojs](https://github.com/mattreid1/baojs)|48813|56155|37981|52302|
  



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

