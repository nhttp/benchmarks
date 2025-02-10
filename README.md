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
Created At : Mon Feb 10 2025, 12:51:34 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59441|67456|58610|52256|
|[hono](https://github.com/honojs/hono)|54797|62123|54423|47845|
|[fast](https://github.com/danteissaias/fast)|52548|58138|48491|51014|
|[oak](https://github.com/oakserver/oak)|28288|28929|27990|27945|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41851|49060|40361|36133|
|[fastify](https://github.com/fastify/fastify)|26167|27976|26203|24321|
|[koa](https://github.com/koajs/koa)|17141|18059|16260|17105|
|[express](https://github.com/expressjs/express)|6965|7165|6549|7182|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75086|86183|74225|64850|
|[nhttp](https://github.com/nhttp/nhttp)|70198|93917|59044|57633|
|[hono](https://github.com/honojs/hono)|62632|72273|60507|55116|
|[baojs](https://github.com/mattreid1/baojs)|45109|49301|42426|43599|
  



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

