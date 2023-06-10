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
Created At : Sat Jun 10 2023, 12:43:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|50334|55346|48334|47321|
|[hono](https://github.com/honojs/hono)|48947|52648|49640|44553|
|[fast](https://github.com/danteissaias/fast)|42558|53144|45150|29380|
|[fastro](https://github.com/fastrodev/fastro)|41207|50458|42684|30478|
|[oak](https://github.com/oakserver/oak)|14720|15463|14640|14058|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|32584|35237|31898|30618|
|[fastify](https://github.com/fastify/fastify)|24307|25162|24132|23626|
|[koa](https://github.com/koajs/koa)|15680|16596|14343|16101|
|[express](https://github.com/expressjs/express)|5420|5432|5069|5760|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|54534|53583|55653|54367|
|[hono](https://github.com/honojs/hono)|54294|54138|52948|55795|
|[elysia](https://github.com/elysiajs/elysia)|52672|52629|53738|51650|
|[baojs](https://github.com/mattreid1/baojs)|44315|50252|45971|36721|
  



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

