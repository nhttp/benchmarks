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
Created At : Sat Feb 10 2024, 12:35:14 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47567|50976|45437|46287|
|[nhttp](https://github.com/nhttp/nhttp)|47461|51081|46116|45187|
|[hono](https://github.com/honojs/hono)|47108|49650|47516|44158|
|[oak](https://github.com/oakserver/oak)|26973|28525|27055|25339|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24242|30860|22164|19701|
|[fastify](https://github.com/fastify/fastify)|16065|16343|15793|16058|
|[koa](https://github.com/koajs/koa)|14245|14872|13424|14438|
|[express](https://github.com/expressjs/express)|6350|6463|6183|6403|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74647|81995|78282|63665|
|[nhttp](https://github.com/nhttp/nhttp)|63940|84604|56143|51072|
|[hono](https://github.com/honojs/hono)|60708|69181|56889|56054|
|[baojs](https://github.com/mattreid1/baojs)|35380|39978|35448|30714|
  



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

