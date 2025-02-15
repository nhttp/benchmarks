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
Created At : Sat Feb 15 2025, 12:49:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61513|70097|57500|56941|
|[hono](https://github.com/honojs/hono)|56625|60580|58787|50508|
|[fast](https://github.com/danteissaias/fast)|54063|64959|44347|52882|
|[oak](https://github.com/oakserver/oak)|28116|28266|27286|28796|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40473|44148|39751|37521|
|[fastify](https://github.com/fastify/fastify)|25971|25547|27971|24394|
|[koa](https://github.com/koajs/koa)|17209|19001|15719|16908|
|[express](https://github.com/expressjs/express)|7016|7322|6447|7280|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78923|93681|74792|68296|
|[nhttp](https://github.com/nhttp/nhttp)|73666|96243|63427|61328|
|[hono](https://github.com/honojs/hono)|68090|76401|66037|61832|
|[baojs](https://github.com/mattreid1/baojs)|50389|56071|49866|45229|
  



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

