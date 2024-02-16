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
Created At : Fri Feb 16 2024, 12:35:53 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47320|50656|46202|45102|
|[fast](https://github.com/danteissaias/fast)|47138|50733|44656|46024|
|[hono](https://github.com/honojs/hono)|46295|48569|47379|42938|
|[oak](https://github.com/oakserver/oak)|27145|28644|27212|25578|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24244|30715|22407|19611|
|[fastify](https://github.com/fastify/fastify)|16434|16492|16396|16414|
|[koa](https://github.com/koajs/koa)|14076|14674|13482|14073|
|[express](https://github.com/expressjs/express)|6438|6521|6214|6579|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74698|85019|73860|65215|
|[hono](https://github.com/honojs/hono)|61246|76617|54036|53085|
|[nhttp](https://github.com/nhttp/nhttp)|60431|82526|49556|49210|
|[baojs](https://github.com/mattreid1/baojs)|35656|42085|33948|30935|
  



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

