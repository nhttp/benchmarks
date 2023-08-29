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
Created At : Tue Aug 29 2023, 12:35:17 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|54539|57709|53536|52372|
|[hono](https://github.com/honojs/hono)|51650|53650|53592|47708|
|[fastro](https://github.com/fastrodev/fastro)|22301|55822|5677|5404|
|[oak](https://github.com/oakserver/oak)|16304|16758|16415|15739|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|35081|38999|33200|33043|
|[fastify](https://github.com/fastify/fastify)|27716|28856|27741|26551|
|[koa](https://github.com/koajs/koa)|17182|18130|16101|17314|
|[express](https://github.com/expressjs/express)|5755|6080|5225|5960|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|60618|61431|60912|59512|
|[hono](https://github.com/honojs/hono)|58117|61491|59148|53713|
|[nhttp](https://github.com/nhttp/nhttp)|54097|61042|52411|48838|
|[baojs](https://github.com/mattreid1/baojs)|38098|40821|32177|41297|
  



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

