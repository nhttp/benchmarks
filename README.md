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
Created At : Mon Sep 25 2023, 12:39:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|66414|69173|67032|63036|
|[hono](https://github.com/honojs/hono)|62660|68829|64073|55077|
|[fast](https://github.com/danteissaias/fast)|58544|67496|50411|57726|
|[fastro](https://github.com/fastrodev/fastro)|27614|69424|6628|6789|
|[oak](https://github.com/oakserver/oak)|19609|20811|19403|18612|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45000|47823|44427|42751|
|[fastify](https://github.com/fastify/fastify)|34298|35479|34021|33395|
|[koa](https://github.com/koajs/koa)|21630|22908|20315|21666|
|[express](https://github.com/expressjs/express)|7496|7650|7095|7742|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60817|59570|56864|66017|
|[hono](https://github.com/honojs/hono)|59708|58114|56054|64955|
|[elysia](https://github.com/elysiajs/elysia)|58218|60378|59001|55276|
|[baojs](https://github.com/mattreid1/baojs)|53338|61430|44203|54380|
  



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

