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
Created At : Thu May 30 2024, 12:42:28 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49133|52415|47640|47344|
|[hono](https://github.com/honojs/hono)|48681|52407|48369|45268|
|[fast](https://github.com/danteissaias/fast)|48109|52160|45754|46414|
|[oak](https://github.com/oakserver/oak)|27954|29497|28028|26338|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24903|30889|22803|21016|
|[fastify](https://github.com/fastify/fastify)|16859|17371|16857|16349|
|[koa](https://github.com/koajs/koa)|14294|15067|13627|14187|
|[express](https://github.com/expressjs/express)|6376|6489|6122|6518|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72548|87278|85480|44886|
|[nhttp](https://github.com/nhttp/nhttp)|62906|88661|53581|46475|
|[hono](https://github.com/honojs/hono)|62397|78180|55753|53258|
|[baojs](https://github.com/mattreid1/baojs)|38164|46457|32303|35732|
  



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

