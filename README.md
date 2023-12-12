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
Created At : Tue Dec 12 2023, 12:39:05 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45903|49514|44656|43540|
|[fast](https://github.com/danteissaias/fast)|45397|48783|43723|43686|
|[hono](https://github.com/honojs/hono)|43808|46023|44528|40872|
|[fastro](https://github.com/fastrodev/fastro)|23142|47211|11322|10893|
|[oak](https://github.com/oakserver/oak)|20563|21769|20544|19376|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26464|31673|24662|23057|
|[fastify](https://github.com/fastify/fastify)|15390|15619|15588|14964|
|[koa](https://github.com/koajs/koa)|14026|14182|13363|14534|
|[express](https://github.com/expressjs/express)|6300|6422|6051|6427|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72221|79761|78709|58193|
|[nhttp](https://github.com/nhttp/nhttp)|64380|80180|62676|50283|
|[hono](https://github.com/honojs/hono)|56261|69239|53186|46359|
|[baojs](https://github.com/mattreid1/baojs)|32249|36656|28441|31651|
  



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

