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
Created At : Mon May 20 2024, 12:40:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48344|51989|46921|46121|
|[fast](https://github.com/danteissaias/fast)|48155|51638|45864|46963|
|[hono](https://github.com/honojs/hono)|47839|50953|47852|44712|
|[oak](https://github.com/oakserver/oak)|27822|29328|27801|26338|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25785|33736|22849|20770|
|[fastify](https://github.com/fastify/fastify)|16903|17249|16763|16698|
|[koa](https://github.com/koajs/koa)|14552|15274|13735|14646|
|[express](https://github.com/expressjs/express)|6480|6634|6249|6558|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77874|87143|82220|64260|
|[nhttp](https://github.com/nhttp/nhttp)|64799|84049|57462|52885|
|[hono](https://github.com/honojs/hono)|62697|73583|66856|47651|
|[baojs](https://github.com/mattreid1/baojs)|36650|40784|36130|33037|
  



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

