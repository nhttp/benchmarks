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
Created At : Fri Feb 21 2025, 12:51:18 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57691|60898|58337|53839|
|[hono](https://github.com/honojs/hono)|55790|58717|56285|52368|
|[fast](https://github.com/danteissaias/fast)|55640|64257|50170|52494|
|[oak](https://github.com/oakserver/oak)|28775|29993|28532|27799|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40517|48789|37486|35277|
|[fastify](https://github.com/fastify/fastify)|24848|24996|24969|24579|
|[koa](https://github.com/koajs/koa)|17015|18243|15788|17013|
|[express](https://github.com/expressjs/express)|7113|7096|6795|7449|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78514|89265|76715|69561|
|[nhttp](https://github.com/nhttp/nhttp)|67049|91819|54647|54682|
|[hono](https://github.com/honojs/hono)|62820|71304|59380|57776|
|[baojs](https://github.com/mattreid1/baojs)|49251|55009|44654|48090|
  



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

