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
Created At : Tue Jun 20 2023, 12:43:13 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|65607|70494|64166|62162|
|[hono](https://github.com/honojs/hono)|64046|69172|65093|57872|
|[fastro](https://github.com/fastrodev/fastro)|51787|66845|53187|35330|
|[oak](https://github.com/oakserver/oak)|19650|20950|19884|18115|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44263|48016|43901|40872|
|[fastify](https://github.com/fastify/fastify)|35192|36447|35054|34074|
|[koa](https://github.com/koajs/koa)|22151|23231|20997|22225|
|[express](https://github.com/expressjs/express)|7839|8031|7364|8122|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|68838|67839|69202|69473|
|[hono](https://github.com/honojs/hono)|65880|66907|65286|65448|
|[elysia](https://github.com/elysiajs/elysia)|65787|65387|66336|65639|
|[baojs](https://github.com/mattreid1/baojs)|58288|66054|60039|48772|
  



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

