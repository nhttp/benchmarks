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
Created At : Sat Jun 21 2025, 1:01:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60036|65587|61800|52722|
|[hono](https://github.com/honojs/hono)|57398|62375|59424|50394|
|[fast](https://github.com/danteissaias/fast)|52433|58307|46750|52241|
|[oak](https://github.com/oakserver/oak)|27971|29133|27094|27685|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39430|45418|37917|34955|
|[fastify](https://github.com/fastify/fastify)|24707|24610|25791|23719|
|[koa](https://github.com/koajs/koa)|16930|17029|17091|16670|
|[express](https://github.com/expressjs/express)|6461|6653|6195|6536|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|85136|96264|79968|79175|
|[nhttp](https://github.com/nhttp/nhttp)|69419|88421|60377|59459|
|[hono](https://github.com/honojs/hono)|63992|74838|60682|56457|
|[baojs](https://github.com/mattreid1/baojs)|50536|53293|48689|49625|
  



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

