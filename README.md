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
Created At : Tue Mar 19 2024, 12:36:34 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48445|52349|47359|45628|
|[fast](https://github.com/danteissaias/fast)|48318|51475|44948|48530|
|[hono](https://github.com/honojs/hono)|47711|49824|48604|44705|
|[oak](https://github.com/oakserver/oak)|27444|29025|27509|25799|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24140|29739|22711|19970|
|[fastify](https://github.com/fastify/fastify)|16718|17175|16689|16289|
|[koa](https://github.com/koajs/koa)|14324|15046|13599|14328|
|[express](https://github.com/expressjs/express)|6424|6607|6104|6560|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75548|87661|82855|56127|
|[nhttp](https://github.com/nhttp/nhttp)|62104|82955|55239|48118|
|[hono](https://github.com/honojs/hono)|58662|66665|57908|51412|
|[baojs](https://github.com/mattreid1/baojs)|35320|40388|32880|32691|
  



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

