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
Created At : Sat Jun 07 2025, 1:03:46 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60361|68252|59124|53708|
|[hono](https://github.com/honojs/hono)|56414|61802|56267|51172|
|[fast](https://github.com/danteissaias/fast)|51873|59224|43999|52395|
|[oak](https://github.com/oakserver/oak)|28365|29537|28141|27418|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40009|46120|40362|33546|
|[fastify](https://github.com/fastify/fastify)|24982|25278|25102|24566|
|[koa](https://github.com/koajs/koa)|17044|17649|17086|16397|
|[express](https://github.com/expressjs/express)|6568|6680|6334|6689|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|83320|91959|79148|78853|
|[nhttp](https://github.com/nhttp/nhttp)|69729|93117|56907|59163|
|[hono](https://github.com/honojs/hono)|64799|75550|60497|58349|
|[baojs](https://github.com/mattreid1/baojs)|48910|54034|48564|44131|
  



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

