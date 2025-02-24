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
Created At : Mon Feb 24 2025, 12:53:00 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|57196|61922|59548|50117|
|[nhttp](https://github.com/nhttp/nhttp)|56107|59064|58215|51041|
|[fast](https://github.com/danteissaias/fast)|53450|64044|47677|48628|
|[oak](https://github.com/oakserver/oak)|27484|29271|26223|26959|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40318|46226|36312|38416|
|[fastify](https://github.com/fastify/fastify)|24312|25328|24888|22721|
|[koa](https://github.com/koajs/koa)|17263|18524|15983|17282|
|[express](https://github.com/expressjs/express)|6924|7343|6528|6900|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74199|84356|74355|63886|
|[nhttp](https://github.com/nhttp/nhttp)|66355|90238|53578|55250|
|[hono](https://github.com/honojs/hono)|58926|63909|56977|55893|
|[baojs](https://github.com/mattreid1/baojs)|48308|53549|43937|47438|
  



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

