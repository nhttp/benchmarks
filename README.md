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
Created At : Sat Apr 29 2023, 6:58:39 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48612|52570|48919|44346|
|[hono](https://github.com/honojs/hono)|43733|47401|44689|39109|
|[fast](https://github.com/danteissaias/fast)|40672|51641|43875|26501|
|[fastro](https://github.com/fastrodev/fastro)|39995|50477|40812|28696|
|[oak](https://github.com/oakserver/oak)|15044|16046|14993|14092|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|33887|36622|33973|31065|
|[fastify](https://github.com/fastify/fastify)|27672|28449|27865|26701|
|[koa](https://github.com/koajs/koa)|16517|17100|15390|17060|
|[express](https://github.com/expressjs/express)|5565|5788|4872|6034|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58371|60225|57208|57679|
|[hono](https://github.com/honojs/hono)|55210|54672|55676|55282|
|[elysia](https://github.com/elysiajs/elysia)|54841|57098|55467|51959|
|[baojs](https://github.com/mattreid1/baojs)|49925|55613|48920|45243|
  



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

