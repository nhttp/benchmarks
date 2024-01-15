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
Created At : Mon Jan 15 2024, 12:40:54 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47628|51159|46392|45334|
|[fast](https://github.com/danteissaias/fast)|47424|50875|44225|47172|
|[hono](https://github.com/honojs/hono)|46462|49001|46776|43610|
|[fastro](https://github.com/fastrodev/fastro)|24539|51220|11501|10895|
|[oak](https://github.com/oakserver/oak)|22557|23972|22438|21261|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25375|31900|23278|20948|
|[fastify](https://github.com/fastify/fastify)|16008|16463|15613|15948|
|[koa](https://github.com/koajs/koa)|14289|14912|13486|14468|
|[express](https://github.com/expressjs/express)|6418|6537|6157|6560|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|66096|79084|61880|57324|
|[nhttp](https://github.com/nhttp/nhttp)|59845|79333|55057|45144|
|[hono](https://github.com/honojs/hono)|58846|73050|55831|47658|
|[baojs](https://github.com/mattreid1/baojs)|36129|41276|34659|32451|
  



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

