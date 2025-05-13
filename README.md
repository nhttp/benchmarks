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
Created At : Tue May 13 2025, 1:00:54 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59477|66306|60433|51691|
|[fast](https://github.com/danteissaias/fast)|57573|69485|45965|57269|
|[hono](https://github.com/honojs/hono)|57179|63564|55710|52263|
|[oak](https://github.com/oakserver/oak)|27952|28649|27365|27843|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41005|46815|40686|35514|
|[fastify](https://github.com/fastify/fastify)|24571|24048|26566|23099|
|[koa](https://github.com/koajs/koa)|17105|17283|17090|16943|
|[express](https://github.com/expressjs/express)|6531|6636|6342|6616|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|89965|101642|84051|84203|
|[nhttp](https://github.com/nhttp/nhttp)|73224|96403|61478|61791|
|[hono](https://github.com/honojs/hono)|66302|72946|63503|62458|
|[baojs](https://github.com/mattreid1/baojs)|49719|55041|45143|48974|
  



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

