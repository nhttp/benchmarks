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
Created At : Sun Sep 22 2024, 12:53:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47150|50500|46410|44539|
|[hono](https://github.com/honojs/hono)|46408|49332|47543|42349|
|[fast](https://github.com/danteissaias/fast)|45812|50163|42716|44558|
|[oak](https://github.com/oakserver/oak)|25667|26562|24988|25451|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24313|30346|22297|20296|
|[fastify](https://github.com/fastify/fastify)|16652|17038|16432|16487|
|[koa](https://github.com/koajs/koa)|13280|14013|12434|13393|
|[express](https://github.com/expressjs/express)|6034|6226|5628|6248|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|63037|79540|64445|45125|
|[nhttp](https://github.com/nhttp/nhttp)|54765|80676|41855|41763|
|[hono](https://github.com/honojs/hono)|51742|64417|47603|43205|
|[baojs](https://github.com/mattreid1/baojs)|33060|35116|34159|29905|
  



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

