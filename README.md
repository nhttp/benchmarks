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
Created At : Wed Apr 24 2024, 12:37:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48240|51891|47576|45252|
|[hono](https://github.com/honojs/hono)|47884|50133|49541|43979|
|[fast](https://github.com/danteissaias/fast)|47056|50287|45473|45408|
|[oak](https://github.com/oakserver/oak)|27896|29352|28214|26122|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24742|31772|22534|19920|
|[fastify](https://github.com/fastify/fastify)|16648|17018|16537|16389|
|[koa](https://github.com/koajs/koa)|14352|15213|13411|14432|
|[express](https://github.com/expressjs/express)|6306|6436|6066|6416|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72503|84473|77472|55564|
|[hono](https://github.com/honojs/hono)|61216|69156|58080|56411|
|[nhttp](https://github.com/nhttp/nhttp)|59801|84805|51711|42886|
|[baojs](https://github.com/mattreid1/baojs)|37904|43678|36219|33815|
  



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

