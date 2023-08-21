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
Created At : Mon Aug 21 2023, 12:34:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62626|69016|60451|58410|
|[hono](https://github.com/honojs/hono)|59278|63021|60678|54134|
|[fastro](https://github.com/fastrodev/fastro)|23643|58848|6726|5354|
|[oak](https://github.com/oakserver/oak)|18670|19724|18626|17661|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42516|46443|42570|38535|
|[fastify](https://github.com/fastify/fastify)|34138|35821|33928|32664|
|[koa](https://github.com/koajs/koa)|21575|22526|20507|21691|
|[express](https://github.com/expressjs/express)|7446|7866|6842|7630|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|68251|66465|68688|69600|
|[hono](https://github.com/honojs/hono)|67845|66015|67139|70382|
|[elysia](https://github.com/elysiajs/elysia)|67781|66524|68441|68377|
|[baojs](https://github.com/mattreid1/baojs)|54741|60138|58044|46042|
  



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

