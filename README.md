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
Created At : Mon Apr 17 2023, 4:48:37 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42367|44717|42062|40321|
|[hono](https://github.com/honojs/hono)|40538|43330|41377|36908|
|[fast](https://github.com/danteissaias/fast)|39972|44049|36833|39033|
|[fastro](https://github.com/fastrodev/fastro)|34992|41993|34971|28011|
|[oak](https://github.com/oakserver/oak)|16382|17472|16396|15277|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44290|47324|43365|42181|
|[fastify](https://github.com/fastify/fastify)|35915|37196|36062|34486|
|[koa](https://github.com/koajs/koa)|21977|23138|20775|22018|
|[express](https://github.com/expressjs/express)|7824|8145|7138|8189|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|69680|68629|71705|68705|
|[hono](https://github.com/honojs/hono)|67227|66928|68817|65937|
|[elysia](https://github.com/elysiajs/elysia)|66806|67413|67332|65674|
|[baojs](https://github.com/mattreid1/baojs)|59915|67527|50981|61238|
  



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

