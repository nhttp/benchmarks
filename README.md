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
Created At : Mon Nov 25 2024, 12:54:08 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48580|53027|47399|45314|
|[hono](https://github.com/honojs/hono)|48414|51625|49522|44096|
|[fast](https://github.com/danteissaias/fast)|48357|52914|44844|47313|
|[oak](https://github.com/oakserver/oak)|26013|26635|25485|25920|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23935|28836|22408|20560|
|[fastify](https://github.com/fastify/fastify)|17015|17312|16896|16838|
|[koa](https://github.com/koajs/koa)|14014|14659|13213|14169|
|[express](https://github.com/expressjs/express)|6260|6434|5898|6449|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73105|83390|72715|63210|
|[nhttp](https://github.com/nhttp/nhttp)|59260|86352|42741|48688|
|[hono](https://github.com/honojs/hono)|54665|70354|49027|44615|
|[baojs](https://github.com/mattreid1/baojs)|34381|40550|31368|31224|
  



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

