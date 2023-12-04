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
Created At : Mon Dec 04 2023, 12:38:51 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|46298|50637|43369|44889|
|[nhttp](https://github.com/nhttp/nhttp)|46249|49611|44813|44324|
|[hono](https://github.com/honojs/hono)|44831|48343|44971|41180|
|[fastro](https://github.com/fastrodev/fastro)|23594|49698|10473|10612|
|[oak](https://github.com/oakserver/oak)|20747|21618|20698|19926|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25462|29521|24283|22582|
|[fastify](https://github.com/fastify/fastify)|15796|15890|15959|15540|
|[koa](https://github.com/koajs/koa)|14367|15028|13519|14553|
|[express](https://github.com/expressjs/express)|6421|6559|6136|6568|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73999|84351|74987|62658|
|[nhttp](https://github.com/nhttp/nhttp)|69525|81087|65958|61530|
|[hono](https://github.com/honojs/hono)|65214|76539|67995|51109|
|[baojs](https://github.com/mattreid1/baojs)|35879|42133|35208|30295|
  



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

