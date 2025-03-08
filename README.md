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
Created At : Sat Mar 08 2025, 12:41:01 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61054|71605|61858|49700|
|[hono](https://github.com/honojs/hono)|54939|58823|53646|52348|
|[fast](https://github.com/danteissaias/fast)|54810|63956|47253|53222|
|[oak](https://github.com/oakserver/oak)|28219|28621|27505|28531|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39166|45232|40038|32227|
|[fastify](https://github.com/fastify/fastify)|25433|25641|26148|24511|
|[koa](https://github.com/koajs/koa)|17241|18212|15790|17722|
|[express](https://github.com/expressjs/express)|7065|7227|6657|7311|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80526|92148|80204|69226|
|[nhttp](https://github.com/nhttp/nhttp)|70976|88723|62123|62082|
|[hono](https://github.com/honojs/hono)|65775|71903|62825|62596|
|[baojs](https://github.com/mattreid1/baojs)|49066|53164|45278|48756|
  



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

