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
Created At : Sat Apr 20 2024, 12:37:40 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47840|51051|46226|46243|
|[fast](https://github.com/danteissaias/fast)|47310|50484|44856|46591|
|[hono](https://github.com/honojs/hono)|46684|49264|47231|43558|
|[oak](https://github.com/oakserver/oak)|27506|29491|27616|25410|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24697|30719|22853|20518|
|[fastify](https://github.com/fastify/fastify)|16516|16847|16377|16324|
|[koa](https://github.com/koajs/koa)|14501|15423|13500|14580|
|[express](https://github.com/expressjs/express)|6304|6419|6191|6302|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77327|85601|83128|63251|
|[nhttp](https://github.com/nhttp/nhttp)|65300|86924|58131|50845|
|[hono](https://github.com/honojs/hono)|59723|66681|58890|53599|
|[baojs](https://github.com/mattreid1/baojs)|39436|44406|38798|35104|
  



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

