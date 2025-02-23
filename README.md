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
Created At : Sun Feb 23 2025, 12:54:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58609|63452|60109|52266|
|[hono](https://github.com/honojs/hono)|56778|59792|57313|53229|
|[fast](https://github.com/danteissaias/fast)|55082|62232|49456|53557|
|[oak](https://github.com/oakserver/oak)|28845|30027|28763|27744|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40464|47347|38631|35415|
|[fastify](https://github.com/fastify/fastify)|25118|25577|24911|24866|
|[koa](https://github.com/koajs/koa)|16797|17914|15728|16748|
|[express](https://github.com/expressjs/express)|7117|7286|6629|7437|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76075|87322|78272|62631|
|[nhttp](https://github.com/nhttp/nhttp)|69596|94784|57061|56944|
|[hono](https://github.com/honojs/hono)|62676|67838|59342|60849|
|[baojs](https://github.com/mattreid1/baojs)|48550|51917|45871|47861|
  



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

