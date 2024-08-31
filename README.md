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
Created At : Sat Aug 31 2024, 12:45:21 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48029|51448|47805|44834|
|[fast](https://github.com/danteissaias/fast)|47976|52530|46419|44980|
|[hono](https://github.com/honojs/hono)|47693|51020|48144|43915|
|[oak](https://github.com/oakserver/oak)|26492|27545|25925|26006|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25188|31340|23030|21194|
|[fastify](https://github.com/fastify/fastify)|16972|17273|16987|16655|
|[koa](https://github.com/koajs/koa)|14089|15006|13171|14091|
|[express](https://github.com/expressjs/express)|6346|6494|6093|6450|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73522|79414|80088|61064|
|[nhttp](https://github.com/nhttp/nhttp)|63689|84030|50071|56965|
|[hono](https://github.com/honojs/hono)|60489|69120|53529|58817|
|[baojs](https://github.com/mattreid1/baojs)|35308|40461|31231|34232|
  



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

