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
Created At : Sat Dec 28 2024, 12:48:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47757|52304|46938|44029|
|[fast](https://github.com/danteissaias/fast)|47030|50986|44665|45439|
|[hono](https://github.com/honojs/hono)|47010|50377|47573|43080|
|[oak](https://github.com/oakserver/oak)|26107|27116|25675|25529|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24974|31577|22911|20435|
|[fastify](https://github.com/fastify/fastify)|17006|17324|17046|16648|
|[koa](https://github.com/koajs/koa)|14410|15307|13630|14292|
|[express](https://github.com/expressjs/express)|6363|6580|5964|6545|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76709|84388|78821|66919|
|[nhttp](https://github.com/nhttp/nhttp)|60155|81900|47111|51453|
|[hono](https://github.com/honojs/hono)|58730|72705|49569|53917|
|[baojs](https://github.com/mattreid1/baojs)|35516|41526|34855|30167|
  



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

