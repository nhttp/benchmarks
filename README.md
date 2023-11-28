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
Created At : Tue Nov 28 2023, 12:38:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45453|49067|44274|43018|
|[fast](https://github.com/danteissaias/fast)|45235|49253|42443|44010|
|[hono](https://github.com/honojs/hono)|43847|46911|44046|40583|
|[fastro](https://github.com/fastrodev/fastro)|23302|47327|11407|11172|
|[oak](https://github.com/oakserver/oak)|20508|21514|20611|19400|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26190|31636|24196|22738|
|[fastify](https://github.com/fastify/fastify)|15671|16055|15596|15363|
|[koa](https://github.com/koajs/koa)|13984|14527|13247|14177|
|[express](https://github.com/expressjs/express)|6205|6311|5917|6386|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70442|80470|75872|54984|
|[nhttp](https://github.com/nhttp/nhttp)|64599|82403|55734|55659|
|[hono](https://github.com/honojs/hono)|61403|74899|55069|54241|
|[baojs](https://github.com/mattreid1/baojs)|33662|38352|32642|29992|
  



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

