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
Created At : Fri Mar 22 2024, 12:36:21 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48564|51537|47616|46540|
|[fast](https://github.com/danteissaias/fast)|47953|50728|46417|46715|
|[hono](https://github.com/honojs/hono)|47722|50887|47585|44693|
|[oak](https://github.com/oakserver/oak)|27497|29368|27620|25504|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25436|32772|22707|20828|
|[fastify](https://github.com/fastify/fastify)|16528|16838|16295|16452|
|[koa](https://github.com/koajs/koa)|14483|15455|13612|14381|
|[express](https://github.com/expressjs/express)|6353|6506|6067|6486|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77448|84002|80715|67627|
|[nhttp](https://github.com/nhttp/nhttp)|60670|86461|51856|43694|
|[hono](https://github.com/honojs/hono)|54966|64914|53894|46090|
|[baojs](https://github.com/mattreid1/baojs)|35902|39395|33346|34965|
  



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

