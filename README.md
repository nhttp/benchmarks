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
Created At : Sat Apr 05 2025, 12:53:29 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|56495|65422|53243|50820|
|[nhttp](https://github.com/nhttp/nhttp)|56126|62611|54763|51005|
|[fast](https://github.com/danteissaias/fast)|54544|63554|49668|50409|
|[oak](https://github.com/oakserver/oak)|27628|28082|27279|27523|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39714|46460|37312|35371|
|[fastify](https://github.com/fastify/fastify)|26062|26676|26796|24713|
|[koa](https://github.com/koajs/koa)|17316|18215|16411|17323|
|[express](https://github.com/expressjs/express)|6670|6840|6450|6720|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74680|84652|78728|60661|
|[nhttp](https://github.com/nhttp/nhttp)|66310|82618|55928|60384|
|[hono](https://github.com/honojs/hono)|61865|71217|57695|56682|
|[baojs](https://github.com/mattreid1/baojs)|45949|53545|40818|43483|
  



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

