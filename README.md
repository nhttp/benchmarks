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
Created At : Tue Apr 30 2024, 12:37:22 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48787|52656|47271|46435|
|[hono](https://github.com/honojs/hono)|48267|51118|49105|44578|
|[fast](https://github.com/danteissaias/fast)|47245|50670|44830|46236|
|[oak](https://github.com/oakserver/oak)|27384|29129|27420|25604|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24518|30821|22675|20057|
|[fastify](https://github.com/fastify/fastify)|16272|16612|16400|15804|
|[koa](https://github.com/koajs/koa)|14225|15216|13436|14024|
|[express](https://github.com/expressjs/express)|6424|6569|6123|6580|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76458|86413|80006|62954|
|[nhttp](https://github.com/nhttp/nhttp)|64266|84736|53969|54092|
|[hono](https://github.com/honojs/hono)|63704|79875|58112|53126|
|[baojs](https://github.com/mattreid1/baojs)|39670|44167|36695|38148|
  



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

