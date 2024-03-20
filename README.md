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
Created At : Wed Mar 20 2024, 12:36:21 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48113|52012|43557|48769|
|[nhttp](https://github.com/nhttp/nhttp)|48008|51802|47065|45157|
|[hono](https://github.com/honojs/hono)|47891|49913|48904|44855|
|[oak](https://github.com/oakserver/oak)|26473|28264|26471|24683|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24092|29964|22135|20176|
|[fastify](https://github.com/fastify/fastify)|15635|16441|15115|15349|
|[koa](https://github.com/koajs/koa)|13917|14777|13091|13883|
|[express](https://github.com/expressjs/express)|6260|6439|5955|6386|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|63965|80801|58371|52723|
|[nhttp](https://github.com/nhttp/nhttp)|54347|79363|43508|40169|
|[hono](https://github.com/honojs/hono)|50791|66909|44803|40662|
|[baojs](https://github.com/mattreid1/baojs)|31665|36432|29907|28655|
  



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

