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
Created At : Mon Jun 16 2025, 1:05:00 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60251|66068|61869|52815|
|[fast](https://github.com/danteissaias/fast)|55883|67939|45563|54147|
|[hono](https://github.com/honojs/hono)|55827|62275|55914|49293|
|[oak](https://github.com/oakserver/oak)|28397|29402|28231|27558|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40058|46555|36983|36636|
|[fastify](https://github.com/fastify/fastify)|24492|24834|25023|23618|
|[koa](https://github.com/koajs/koa)|16950|17664|16644|16542|
|[express](https://github.com/expressjs/express)|6595|6738|6313|6733|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|83334|90780|74878|84343|
|[nhttp](https://github.com/nhttp/nhttp)|69881|92700|57688|59254|
|[hono](https://github.com/honojs/hono)|66396|74254|63714|61221|
|[baojs](https://github.com/mattreid1/baojs)|48345|51493|44101|49441|
  



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

