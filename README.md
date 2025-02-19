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
Created At : Wed Feb 19 2025, 12:50:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|56713|61975|57060|51104|
|[nhttp](https://github.com/nhttp/nhttp)|55855|62675|53600|51290|
|[fast](https://github.com/danteissaias/fast)|54708|64068|48801|51255|
|[oak](https://github.com/oakserver/oak)|27425|28743|26666|26866|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41037|48806|37255|37049|
|[fastify](https://github.com/fastify/fastify)|25461|25350|26710|24322|
|[koa](https://github.com/koajs/koa)|16923|18037|15625|17106|
|[express](https://github.com/expressjs/express)|7084|7360|6441|7452|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78572|96273|73224|66218|
|[nhttp](https://github.com/nhttp/nhttp)|73869|98557|63959|59091|
|[hono](https://github.com/honojs/hono)|65278|70857|62737|62241|
|[baojs](https://github.com/mattreid1/baojs)|48919|56374|44123|46259|
  



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

