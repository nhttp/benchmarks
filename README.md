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
Created At : Tue Jan 07 2025, 12:51:11 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46825|50574|45789|44111|
|[hono](https://github.com/honojs/hono)|46288|49299|46538|43028|
|[fast](https://github.com/danteissaias/fast)|45042|49833|42469|42825|
|[oak](https://github.com/oakserver/oak)|25141|25977|24825|24622|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25832|32531|23361|21604|
|[fastify](https://github.com/fastify/fastify)|16961|17374|16948|16561|
|[koa](https://github.com/koajs/koa)|14379|15245|13149|14742|
|[express](https://github.com/expressjs/express)|6369|6529|5947|6632|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68358|77462|70557|57054|
|[nhttp](https://github.com/nhttp/nhttp)|52068|78771|36290|41142|
|[hono](https://github.com/honojs/hono)|44231|56374|37301|39019|
|[baojs](https://github.com/mattreid1/baojs)|31796|35651|30145|29592|
  



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

