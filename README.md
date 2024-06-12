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
Created At : Wed Jun 12 2024, 12:41:06 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|50149|56186|48181|46079|
|[hono](https://github.com/honojs/hono)|47269|51203|47994|42609|
|[fast](https://github.com/danteissaias/fast)|46702|51893|44135|44077|
|[oak](https://github.com/oakserver/oak)|26771|27825|26148|26341|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23171|27269|22049|20196|
|[fastify](https://github.com/fastify/fastify)|17092|17501|16905|16870|
|[koa](https://github.com/koajs/koa)|14286|15217|13714|13927|
|[express](https://github.com/expressjs/express)|6308|6424|6031|6469|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70903|84350|72389|55970|
|[nhttp](https://github.com/nhttp/nhttp)|59544|80535|51680|46417|
|[hono](https://github.com/honojs/hono)|56610|68345|56863|44621|
|[baojs](https://github.com/mattreid1/baojs)|36643|42955|36009|30966|
  



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

