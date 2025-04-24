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
Created At : Thu Apr 24 2025, 12:59:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58366|65548|59451|50100|
|[hono](https://github.com/honojs/hono)|57145|62633|59896|48907|
|[fast](https://github.com/danteissaias/fast)|54737|66735|45936|51541|
|[oak](https://github.com/oakserver/oak)|28195|29984|26952|27650|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39485|45456|37977|35023|
|[fastify](https://github.com/fastify/fastify)|24842|24574|26334|23618|
|[koa](https://github.com/koajs/koa)|16262|16982|15824|15981|
|[express](https://github.com/expressjs/express)|6449|6630|6377|6341|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80163|91174|81042|68273|
|[nhttp](https://github.com/nhttp/nhttp)|69674|88355|60088|60579|
|[hono](https://github.com/honojs/hono)|65612|73850|62059|60926|
|[baojs](https://github.com/mattreid1/baojs)|46619|49458|43946|46452|
  



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

