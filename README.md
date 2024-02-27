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
Created At : Tue Feb 27 2024, 12:36:10 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47376|50150|46509|45470|
|[fast](https://github.com/danteissaias/fast)|47362|51826|45055|45204|
|[hono](https://github.com/honojs/hono)|46293|49134|46727|43019|
|[oak](https://github.com/oakserver/oak)|26824|28646|26788|25037|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24594|31378|22470|19934|
|[fastify](https://github.com/fastify/fastify)|16429|17247|16396|15645|
|[koa](https://github.com/koajs/koa)|14190|14747|13391|14431|
|[express](https://github.com/expressjs/express)|6310|6299|6051|6581|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71879|85374|75608|54656|
|[nhttp](https://github.com/nhttp/nhttp)|65527|84586|63599|48396|
|[hono](https://github.com/honojs/hono)|61609|67950|61560|55316|
|[baojs](https://github.com/mattreid1/baojs)|35918|39997|31141|36616|
  



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

