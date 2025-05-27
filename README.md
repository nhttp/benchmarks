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
Created At : Tue May 27 2025, 1:02:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57588|64364|58172|50227|
|[hono](https://github.com/honojs/hono)|56144|59742|59294|49395|
|[fast](https://github.com/danteissaias/fast)|52643|61828|47425|48676|
|[oak](https://github.com/oakserver/oak)|26829|27747|25790|26951|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38437|45498|36570|33244|
|[fastify](https://github.com/fastify/fastify)|25323|26698|25051|24219|
|[koa](https://github.com/koajs/koa)|16295|16224|16987|15674|
|[express](https://github.com/expressjs/express)|6259|6363|6089|6326|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|82392|97487|76791|72898|
|[nhttp](https://github.com/nhttp/nhttp)|62760|85385|48905|53991|
|[hono](https://github.com/honojs/hono)|62661|72745|57927|57312|
|[baojs](https://github.com/mattreid1/baojs)|44946|50150|40778|43909|
  



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

