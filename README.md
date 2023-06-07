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
Created At : Wed Jun 07 2023, 12:49:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|53351|57568|52911|49573|
|[hono](https://github.com/honojs/hono)|51588|56577|51514|46672|
|[fast](https://github.com/danteissaias/fast)|48910|57486|38185|51059|
|[fastro](https://github.com/fastrodev/fastro)|43292|53739|44758|31380|
|[oak](https://github.com/oakserver/oak)|17811|18860|18043|16531|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38295|41756|37977|35151|
|[fastify](https://github.com/fastify/fastify)|29443|30369|29538|28422|
|[koa](https://github.com/koajs/koa)|18943|20053|17573|19203|
|[express](https://github.com/expressjs/express)|6525|6661|6161|6753|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|61659|61254|63142|60582|
|[nhttp](https://github.com/nhttp/nhttp)|61414|59402|63384|61457|
|[elysia](https://github.com/elysiajs/elysia)|58361|57564|60169|57351|
|[baojs](https://github.com/mattreid1/baojs)|51685|58551|43797|52706|
  



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

