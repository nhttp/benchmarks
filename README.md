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
Created At : Mon May 19 2025, 1:03:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58174|60864|64270|49387|
|[nhttp](https://github.com/nhttp/nhttp)|57575|63897|55637|53192|
|[fast](https://github.com/danteissaias/fast)|57154|69787|48070|53605|
|[oak](https://github.com/oakserver/oak)|27130|28210|26611|26570|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40701|49528|36981|35593|
|[fastify](https://github.com/fastify/fastify)|24885|25772|26042|22841|
|[koa](https://github.com/koajs/koa)|16926|17361|16800|16616|
|[express](https://github.com/expressjs/express)|6426|6537|6240|6502|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80347|81782|79875|79383|
|[nhttp](https://github.com/nhttp/nhttp)|73244|100420|59712|59600|
|[hono](https://github.com/honojs/hono)|66780|75078|63239|62024|
|[baojs](https://github.com/mattreid1/baojs)|50124|56155|45528|48688|
  



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

