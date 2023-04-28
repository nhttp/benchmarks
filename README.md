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
Created At : Fri Apr 28 2023, 11:24:31 PM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|55158|59561|56588|49325|
|[nhttp](https://github.com/nhttp/nhttp)|55006|60517|52733|51767|
|[fast](https://github.com/danteissaias/fast)|53393|63384|42079|54717|
|[fastro](https://github.com/fastrodev/fastro)|50163|61816|52467|36206|
|[oak](https://github.com/oakserver/oak)|18877|20303|18877|17450|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45476|48761|45139|42529|
|[fastify](https://github.com/fastify/fastify)|35467|37003|35499|33900|
|[koa](https://github.com/koajs/koa)|22042|23259|20762|22105|
|[express](https://github.com/expressjs/express)|7887|8204|7254|8202|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|70110|69966|71717|68648|
|[elysia](https://github.com/elysiajs/elysia)|68458|68729|70825|65819|
|[hono](https://github.com/honojs/hono)|68324|68402|69397|67174|
|[baojs](https://github.com/mattreid1/baojs)|60383|66776|51576|62796|
  



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

