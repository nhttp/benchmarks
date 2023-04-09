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
Created At : Sun Apr 09 2023, 12:40:59 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41898|43814|42750|39131|
|[hono](https://github.com/honojs/hono)|41241|47091|42136|34496|
|[fast](https://github.com/danteissaias/fast)|38646|43481|31599|40859|
|[fastro](https://github.com/fastrodev/fastro)|33763|45140|30702|25448|
|[oak](https://github.com/oakserver/oak)|14137|14306|15606|12498|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|35795|38155|35728|33502|
|[fastify](https://github.com/fastify/fastify)|28407|29011|28366|27844|
|[koa](https://github.com/koajs/koa)|17727|18609|16509|18062|
|[express](https://github.com/expressjs/express)|5960|6241|5769|5870|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60762|59295|61680|61312|
|[elysia](https://github.com/elysiajs/elysia)|58170|59224|58732|56555|
|[hono](https://github.com/honojs/hono)|57255|56655|58228|56882|
|[baojs](https://github.com/mattreid1/baojs)|53198|60019|55184|44390|
  



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

