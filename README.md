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
Created At : Sat May 10 2025, 12:58:03 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58605|66208|55212|54395|
|[hono](https://github.com/honojs/hono)|57634|61198|60084|51619|
|[fast](https://github.com/danteissaias/fast)|56191|66371|46867|55336|
|[oak](https://github.com/oakserver/oak)|28329|29271|28419|27296|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37369|42709|35758|33639|
|[fastify](https://github.com/fastify/fastify)|24665|24768|24763|24464|
|[koa](https://github.com/koajs/koa)|17284|18005|17208|16639|
|[express](https://github.com/expressjs/express)|6320|6367|6026|6566|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|83850|92102|77260|82189|
|[hono](https://github.com/honojs/hono)|66661|76132|65456|58394|
|[nhttp](https://github.com/nhttp/nhttp)|63814|86457|53575|51410|
|[baojs](https://github.com/mattreid1/baojs)|47134|52402|43748|45252|
  



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

