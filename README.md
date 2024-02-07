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
Created At : Wed Feb 07 2024, 12:35:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48272|53015|44424|47376|
|[nhttp](https://github.com/nhttp/nhttp)|47767|50586|46795|45919|
|[hono](https://github.com/honojs/hono)|46868|49420|47604|43581|
|[oak](https://github.com/oakserver/oak)|26535|28781|25456|25369|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23714|28665|22663|19815|
|[fastify](https://github.com/fastify/fastify)|16470|17103|16192|16116|
|[koa](https://github.com/koajs/koa)|14372|15153|13406|14558|
|[express](https://github.com/expressjs/express)|6341|6387|6088|6547|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70607|83721|75528|52571|
|[nhttp](https://github.com/nhttp/nhttp)|61798|82361|51973|51061|
|[hono](https://github.com/honojs/hono)|61640|76513|55032|53375|
|[baojs](https://github.com/mattreid1/baojs)|32757|36003|32355|29913|
  



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

