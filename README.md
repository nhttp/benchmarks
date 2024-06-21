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
Created At : Fri Jun 21 2024, 12:40:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48620|52475|47543|45842|
|[hono](https://github.com/honojs/hono)|48477|52072|48979|44380|
|[fast](https://github.com/danteissaias/fast)|48046|52108|44863|47167|
|[oak](https://github.com/oakserver/oak)|27144|28168|26483|26781|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24953|31329|22885|20646|
|[fastify](https://github.com/fastify/fastify)|17009|17338|16992|16696|
|[koa](https://github.com/koajs/koa)|14781|15535|13952|14856|
|[express](https://github.com/expressjs/express)|6405|6469|6169|6576|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70616|88661|71734|51454|
|[nhttp](https://github.com/nhttp/nhttp)|64684|88536|58126|47391|
|[hono](https://github.com/honojs/hono)|54058|70113|46300|45761|
|[baojs](https://github.com/mattreid1/baojs)|36266|42564|35066|31167|
  



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

