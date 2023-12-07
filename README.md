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
Created At : Thu Dec 07 2023, 12:38:14 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|45112|48747|43281|43308|
|[hono](https://github.com/honojs/hono)|43922|46958|44227|40581|
|[oak](https://github.com/oakserver/oak)|20442|21016|20698|19611|
|[fastro](https://github.com/fastrodev/fastro)|0|0|0|0|
|[nhttp](https://github.com/nhttp/nhttp)|0|0|0|0|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26201|30221|25030|23353|
|[fastify](https://github.com/fastify/fastify)|15666|15885|15693|15420|
|[koa](https://github.com/koajs/koa)|14120|14619|13151|14591|
|[express](https://github.com/expressjs/express)|6329|6567|5959|6460|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72579|79006|74270|64460|
|[nhttp](https://github.com/nhttp/nhttp)|64256|79853|58104|54811|
|[hono](https://github.com/honojs/hono)|59774|69425|60417|49481|
|[baojs](https://github.com/mattreid1/baojs)|33459|37421|32264|30691|
  



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

