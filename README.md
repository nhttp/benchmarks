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
Created At : Sat May 20 2023, 12:38:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|53718|57625|55509|48019|
|[nhttp](https://github.com/nhttp/nhttp)|50736|52599|53551|46058|
|[fast](https://github.com/danteissaias/fast)|47641|56800|40636|45487|
|[fastro](https://github.com/fastrodev/fastro)|46559|57426|48966|33285|
|[oak](https://github.com/oakserver/oak)|18320|19393|18242|17325|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37295|39967|37416|34503|
|[fastify](https://github.com/fastify/fastify)|28516|31593|29995|23960|
|[koa](https://github.com/koajs/koa)|18783|19659|17572|19119|
|[express](https://github.com/expressjs/express)|6483|6697|6065|6688|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64331|64444|64930|63619|
|[hono](https://github.com/honojs/hono)|63777|61887|64584|64859|
|[elysia](https://github.com/elysiajs/elysia)|60242|61092|59328|60307|
|[baojs](https://github.com/mattreid1/baojs)|52977|59386|43691|55854|
  



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

