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
Created At : Fri May 05 2023, 12:37:11 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58655|63400|57879|54687|
|[fast](https://github.com/danteissaias/fast)|53842|63954|53926|43646|
|[hono](https://github.com/honojs/hono)|51414|58276|54775|41190|
|[fastro](https://github.com/fastrodev/fastro)|48477|60321|50569|34542|
|[oak](https://github.com/oakserver/oak)|18845|20187|18961|17387|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45114|48697|44373|42272|
|[fastify](https://github.com/fastify/fastify)|35365|36640|35593|33861|
|[koa](https://github.com/koajs/koa)|22050|23252|21028|21870|
|[express](https://github.com/expressjs/express)|7964|8212|7707|7972|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|70945|69057|73114|70665|
|[hono](https://github.com/honojs/hono)|68487|68711|69014|67735|
|[elysia](https://github.com/elysiajs/elysia)|66671|67857|66668|65488|
|[baojs](https://github.com/mattreid1/baojs)|59130|65695|56622|55074|
  



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

