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
Created At : Fri May 26 2023, 7:07:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47088|51454|46922|42888|
|[fast](https://github.com/danteissaias/fast)|46116|51735|42179|44433|
|[hono](https://github.com/honojs/hono)|43620|49559|41493|39808|
|[fastro](https://github.com/fastrodev/fastro)|37434|46020|38840|27441|
|[oak](https://github.com/oakserver/oak)|15446|17139|14908|14291|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|35209|38268|35078|32280|
|[fastify](https://github.com/fastify/fastify)|24544|26127|25109|22397|
|[koa](https://github.com/koajs/koa)|16317|17150|15165|16635|
|[express](https://github.com/expressjs/express)|5667|5757|5456|5788|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|55948|54982|55882|56980|
|[elysia](https://github.com/elysiajs/elysia)|55915|54143|57172|56429|
|[nhttp](https://github.com/nhttp/nhttp)|52614|52852|54639|50350|
|[baojs](https://github.com/mattreid1/baojs)|49833|53011|47677|48810|
  



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

