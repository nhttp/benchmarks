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
Created At : Fri May 16 2025, 1:01:15 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|60137|63113|64502|52795|
|[nhttp](https://github.com/nhttp/nhttp)|59210|62964|60717|53950|
|[fast](https://github.com/danteissaias/fast)|56433|68528|45213|55558|
|[oak](https://github.com/oakserver/oak)|28089|29757|27596|26913|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38989|48319|36411|32236|
|[fastify](https://github.com/fastify/fastify)|24542|23824|26154|23647|
|[koa](https://github.com/koajs/koa)|16926|17174|16844|16761|
|[express](https://github.com/expressjs/express)|6508|6544|6286|6695|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|90314|102640|80960|87342|
|[nhttp](https://github.com/nhttp/nhttp)|71759|92002|60801|62474|
|[hono](https://github.com/honojs/hono)|66011|75445|60291|62296|
|[baojs](https://github.com/mattreid1/baojs)|49325|52576|47809|47590|
  



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

