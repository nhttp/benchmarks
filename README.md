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
Created At : Sat Mar 02 2024, 12:35:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48658|52336|47105|46533|
|[fast](https://github.com/danteissaias/fast)|48141|51919|46232|46273|
|[hono](https://github.com/honojs/hono)|46898|49186|47415|44094|
|[oak](https://github.com/oakserver/oak)|27529|29177|27595|25816|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25389|32404|23044|20720|
|[fastify](https://github.com/fastify/fastify)|17062|17291|16931|16963|
|[koa](https://github.com/koajs/koa)|14814|15680|13846|14915|
|[express](https://github.com/expressjs/express)|6461|6554|6179|6650|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75972|88648|81317|57952|
|[hono](https://github.com/honojs/hono)|58256|62839|54285|57643|
|[nhttp](https://github.com/nhttp/nhttp)|58033|85899|46732|41469|
|[baojs](https://github.com/mattreid1/baojs)|34850|41280|31795|31475|
  



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

