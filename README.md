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
Created At : Fri Aug 25 2023, 12:34:39 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63285|69499|60869|59487|
|[hono](https://github.com/honojs/hono)|60145|63751|61178|55505|
|[fastro](https://github.com/fastrodev/fastro)|25350|64254|6385|5410|
|[oak](https://github.com/oakserver/oak)|0|0|0|0|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42948|46495|42455|39894|
|[fastify](https://github.com/fastify/fastify)|33764|33853|34363|33076|
|[koa](https://github.com/koajs/koa)|21090|22342|19802|21126|
|[express](https://github.com/expressjs/express)|7567|7862|7438|7401|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|68921|67651|69117|69994|
|[nhttp](https://github.com/nhttp/nhttp)|68533|68429|69919|67252|
|[elysia](https://github.com/elysiajs/elysia)|67730|66183|68210|68796|
|[baojs](https://github.com/mattreid1/baojs)|50292|56971|42842|51063|
  



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

