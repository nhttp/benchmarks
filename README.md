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
Created At : Mon Aug 28 2023, 12:35:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|55714|59467|54748|52927|
|[hono](https://github.com/honojs/hono)|48275|55792|40047|48987|
|[fastro](https://github.com/fastrodev/fastro)|22656|56821|5795|5352|
|[oak](https://github.com/oakserver/oak)|16868|17780|16645|16178|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|35512|39797|33316|33422|
|[fastify](https://github.com/fastify/fastify)|28452|29403|28855|27098|
|[koa](https://github.com/koajs/koa)|18329|19240|17307|18440|
|[express](https://github.com/expressjs/express)|6245|6444|5746|6546|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|61161|61457|60884|61141|
|[hono](https://github.com/honojs/hono)|60540|61576|61241|58804|
|[nhttp](https://github.com/nhttp/nhttp)|58741|61757|58712|55753|
|[baojs](https://github.com/mattreid1/baojs)|42103|47161|35276|43871|
  



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

