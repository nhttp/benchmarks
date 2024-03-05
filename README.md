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
Created At : Tue Mar 05 2024, 12:36:07 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47941|52113|46677|45034|
|[fast](https://github.com/danteissaias/fast)|47853|52008|45164|46386|
|[hono](https://github.com/honojs/hono)|46231|48514|47004|43176|
|[oak](https://github.com/oakserver/oak)|27421|28991|27608|25663|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24850|31290|22703|20557|
|[fastify](https://github.com/fastify/fastify)|17078|17595|16988|16651|
|[koa](https://github.com/koajs/koa)|14083|14622|13433|14195|
|[express](https://github.com/expressjs/express)|6311|6372|6082|6480|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76328|85021|76659|67305|
|[nhttp](https://github.com/nhttp/nhttp)|65049|88233|51389|55524|
|[hono](https://github.com/honojs/hono)|60618|75987|55637|50231|
|[baojs](https://github.com/mattreid1/baojs)|33695|37456|34564|29065|
  



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

