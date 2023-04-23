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
Created At : Sun Apr 23 2023, 12:43:35 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42297|45083|41668|40140|
|[hono](https://github.com/honojs/hono)|39631|42204|41403|35287|
|[fast](https://github.com/danteissaias/fast)|37586|43944|29742|39072|
|[fastro](https://github.com/fastrodev/fastro)|35132|42292|35756|27349|
|[oak](https://github.com/oakserver/oak)|19624|21016|19417|18439|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44380|47567|44228|41344|
|[fastify](https://github.com/fastify/fastify)|34448|35353|34690|33302|
|[koa](https://github.com/koajs/koa)|21892|23068|20633|21974|
|[express](https://github.com/expressjs/express)|7841|7980|7567|7976|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|70135|69772|70804|69830|
|[elysia](https://github.com/elysiajs/elysia)|66530|66249|67352|65990|
|[hono](https://github.com/honojs/hono)|66105|66242|66564|65508|
|[baojs](https://github.com/mattreid1/baojs)|59370|65425|60663|52021|
  



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

