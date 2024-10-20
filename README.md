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
Created At : Sun Oct 20 2024, 12:54:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48062|51917|48224|44046|
|[nhttp](https://github.com/nhttp/nhttp)|47968|52037|47240|44627|
|[fast](https://github.com/danteissaias/fast)|47399|51845|45495|44857|
|[oak](https://github.com/oakserver/oak)|26328|27247|25915|25823|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25445|32523|22974|20838|
|[fastify](https://github.com/fastify/fastify)|16759|17086|16649|16541|
|[koa](https://github.com/koajs/koa)|14060|14985|13066|14129|
|[express](https://github.com/expressjs/express)|6390|6614|6004|6552|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74847|79719|78395|66427|
|[nhttp](https://github.com/nhttp/nhttp)|61484|80763|51304|52386|
|[hono](https://github.com/honojs/hono)|61362|79701|54124|50262|
|[baojs](https://github.com/mattreid1/baojs)|35252|40947|33027|31781|
  



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

