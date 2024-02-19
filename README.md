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
Created At : Mon Feb 19 2024, 12:37:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47529|50787|46784|45015|
|[fast](https://github.com/danteissaias/fast)|46814|50000|45013|45428|
|[hono](https://github.com/honojs/hono)|46256|48694|46746|43328|
|[oak](https://github.com/oakserver/oak)|27210|28722|27307|25600|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24360|30972|22760|19347|
|[fastify](https://github.com/fastify/fastify)|16321|16274|16550|16138|
|[koa](https://github.com/koajs/koa)|14252|15264|13291|14202|
|[express](https://github.com/expressjs/express)|6405|6608|6087|6521|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73016|84188|76031|58828|
|[nhttp](https://github.com/nhttp/nhttp)|61114|85805|50603|46935|
|[hono](https://github.com/honojs/hono)|58130|68763|56231|49396|
|[baojs](https://github.com/mattreid1/baojs)|36631|41707|36238|31949|
  



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

