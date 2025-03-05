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
Created At : Wed Mar 05 2025, 12:52:55 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56518|61058|56541|51956|
|[hono](https://github.com/honojs/hono)|56315|60797|58816|49331|
|[fast](https://github.com/danteissaias/fast)|54001|62369|47465|52168|
|[oak](https://github.com/oakserver/oak)|27479|28798|26348|27292|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38738|46856|35753|33605|
|[fastify](https://github.com/fastify/fastify)|25002|25591|24600|24814|
|[koa](https://github.com/koajs/koa)|16784|18118|15408|16826|
|[express](https://github.com/expressjs/express)|6923|6996|6613|7161|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76762|87462|74211|68614|
|[nhttp](https://github.com/nhttp/nhttp)|67762|89150|59506|54629|
|[hono](https://github.com/honojs/hono)|63469|76847|56748|56812|
|[baojs](https://github.com/mattreid1/baojs)|48009|55061|44624|44341|
  



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

