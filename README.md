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
Created At : Tue May 06 2025, 1:00:11 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60980|67271|59805|55865|
|[hono](https://github.com/honojs/hono)|59809|66393|59544|53490|
|[fast](https://github.com/danteissaias/fast)|53073|63088|44592|51539|
|[oak](https://github.com/oakserver/oak)|28552|30276|27819|27560|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41456|50321|38456|35591|
|[fastify](https://github.com/fastify/fastify)|24644|25045|25541|23346|
|[koa](https://github.com/koajs/koa)|17298|17843|17148|16904|
|[express](https://github.com/expressjs/express)|6516|6672|6269|6608|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|81305|80766|79227|83921|
|[nhttp](https://github.com/nhttp/nhttp)|70836|97671|59512|55326|
|[hono](https://github.com/honojs/hono)|66725|76935|63350|59890|
|[baojs](https://github.com/mattreid1/baojs)|49627|57821|46395|44666|
  



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

