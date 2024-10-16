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
Created At : Wed Oct 16 2024, 12:50:36 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48660|52693|48417|44871|
|[nhttp](https://github.com/nhttp/nhttp)|48390|52030|48365|44776|
|[fast](https://github.com/danteissaias/fast)|47906|52769|45068|45882|
|[oak](https://github.com/oakserver/oak)|26013|27015|25554|25470|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25311|31669|22982|21281|
|[fastify](https://github.com/fastify/fastify)|16996|17276|16925|16787|
|[koa](https://github.com/koajs/koa)|13965|14717|13221|13956|
|[express](https://github.com/expressjs/express)|6269|6493|5884|6430|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74906|80352|78644|65722|
|[hono](https://github.com/honojs/hono)|60201|70754|59740|50109|
|[nhttp](https://github.com/nhttp/nhttp)|58640|82350|44134|49435|
|[baojs](https://github.com/mattreid1/baojs)|34902|41694|33387|29624|
  



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

