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
Created At : Sun Mar 02 2025, 12:55:14 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58240|61687|60457|52576|
|[fast](https://github.com/danteissaias/fast)|57598|67514|54564|50715|
|[hono](https://github.com/honojs/hono)|54255|58669|57781|46315|
|[oak](https://github.com/oakserver/oak)|28732|30549|27473|28173|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40227|45447|39355|35879|
|[fastify](https://github.com/fastify/fastify)|24165|24535|25217|22744|
|[koa](https://github.com/koajs/koa)|16790|17809|15588|16973|
|[express](https://github.com/expressjs/express)|7098|7387|6637|7270|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78993|94837|73731|68411|
|[nhttp](https://github.com/nhttp/nhttp)|68212|92338|57071|55226|
|[hono](https://github.com/honojs/hono)|65939|75059|61585|61173|
|[baojs](https://github.com/mattreid1/baojs)|48480|53884|46350|45206|
  



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

