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
Created At : Sat Dec 16 2023, 12:37:54 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|45893|48980|43516|45184|
|[nhttp](https://github.com/nhttp/nhttp)|45614|48708|44314|43821|
|[hono](https://github.com/honojs/hono)|44475|47417|44818|41190|
|[fastro](https://github.com/fastrodev/fastro)|23469|49170|11164|10072|
|[oak](https://github.com/oakserver/oak)|20836|21977|20630|19902|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26093|33987|23064|21227|
|[fastify](https://github.com/fastify/fastify)|15469|16081|15466|14861|
|[koa](https://github.com/koajs/koa)|13999|14604|13216|14178|
|[express](https://github.com/expressjs/express)|6388|6478|6104|6581|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71420|79897|73900|60463|
|[hono](https://github.com/honojs/hono)|59594|71213|57474|50094|
|[nhttp](https://github.com/nhttp/nhttp)|59359|82194|46984|48898|
|[baojs](https://github.com/mattreid1/baojs)|34736|40321|34748|29140|
  



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

