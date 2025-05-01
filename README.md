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
Created At : Thu May 01 2025, 1:05:03 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56948|64304|55706|50833|
|[hono](https://github.com/honojs/hono)|56652|61745|59648|48563|
|[fast](https://github.com/danteissaias/fast)|53936|60684|48936|52188|
|[oak](https://github.com/oakserver/oak)|29296|30094|28548|29246|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39986|46663|36695|36601|
|[fastify](https://github.com/fastify/fastify)|25588|24604|27134|25025|
|[koa](https://github.com/koajs/koa)|17242|17645|17168|16912|
|[express](https://github.com/expressjs/express)|6512|6599|6283|6654|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79784|93821|74991|70540|
|[nhttp](https://github.com/nhttp/nhttp)|68816|86837|59765|59846|
|[hono](https://github.com/honojs/hono)|68461|75502|62630|67251|
|[baojs](https://github.com/mattreid1/baojs)|48749|51419|45673|49155|
  



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

