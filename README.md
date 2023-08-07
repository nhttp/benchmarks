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
Created At : Mon Aug 07 2023, 12:42:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|34125|36890|32942|32544|
|[hono](https://github.com/honojs/hono)|33660|36164|33335|31482|
|[fastro](https://github.com/fastrodev/fastro)|12866|32045|3386|3168|
|[oak](https://github.com/oakserver/oak)|9539|10197|9554|8866|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|17297|19585|16700|15606|
|[fastify](https://github.com/fastify/fastify)|12872|13374|12640|12603|
|[koa](https://github.com/koajs/koa)|8768|9164|8274|8867|
|[express](https://github.com/expressjs/express)|3514|3618|3180|3744|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|41021|41499|42873|38690|
|[nhttp](https://github.com/nhttp/nhttp)|40455|39385|40858|41122|
|[hono](https://github.com/honojs/hono)|38012|38641|38805|36591|
|[baojs](https://github.com/mattreid1/baojs)|32246|36146|30477|30116|
  



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

