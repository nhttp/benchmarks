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
Created At : Wed Jan 22 2025, 12:50:38 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58111|63467|59443|51424|
|[nhttp](https://github.com/nhttp/nhttp)|56602|62257|55002|52548|
|[fast](https://github.com/danteissaias/fast)|52471|63649|48378|45385|
|[oak](https://github.com/oakserver/oak)|28811|29358|28243|28833|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40826|47386|38807|36285|
|[fastify](https://github.com/fastify/fastify)|24789|25477|24616|24275|
|[koa](https://github.com/koajs/koa)|16934|17990|15746|17066|
|[express](https://github.com/expressjs/express)|7024|7205|6589|7279|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76616|88699|75422|65728|
|[nhttp](https://github.com/nhttp/nhttp)|69103|91575|58783|56952|
|[hono](https://github.com/honojs/hono)|67927|79851|60248|63681|
|[baojs](https://github.com/mattreid1/baojs)|50030|54921|49304|45864|
  



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

