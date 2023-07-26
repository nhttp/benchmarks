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
Created At : Wed Jul 26 2023, 12:43:36 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|50418|54046|49568|47640|
|[hono](https://github.com/honojs/hono)|47535|50088|49148|43369|
|[fastro](https://github.com/fastrodev/fastro)|18420|46888|3828|4543|
|[oak](https://github.com/oakserver/oak)|15030|15768|15093|14228|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|32063|34586|32066|29536|
|[fastify](https://github.com/fastify/fastify)|24784|25542|24746|24063|
|[koa](https://github.com/koajs/koa)|15802|16505|14863|16038|
|[express](https://github.com/expressjs/express)|5413|5597|4950|5693|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57651|58574|57303|57075|
|[hono](https://github.com/honojs/hono)|56399|53710|58099|57388|
|[elysia](https://github.com/elysiajs/elysia)|53672|54327|53961|52728|
|[baojs](https://github.com/mattreid1/baojs)|43766|48867|37041|45389|
  



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

