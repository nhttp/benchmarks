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
Created At : Sat Dec 02 2023, 12:37:19 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45985|49174|44942|43839|
|[fast](https://github.com/danteissaias/fast)|45277|48127|41203|46500|
|[hono](https://github.com/honojs/hono)|44160|47214|44429|40836|
|[fastro](https://github.com/fastrodev/fastro)|23153|47439|11057|10962|
|[oak](https://github.com/oakserver/oak)|20289|21494|20334|19039|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25854|29591|24730|23242|
|[fastify](https://github.com/fastify/fastify)|15444|15484|15471|15376|
|[koa](https://github.com/koajs/koa)|13785|14493|13095|13766|
|[express](https://github.com/expressjs/express)|6256|6412|6049|6306|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68969|81601|66214|59093|
|[hono](https://github.com/honojs/hono)|64702|72302|65567|56237|
|[nhttp](https://github.com/nhttp/nhttp)|63107|78672|56190|54458|
|[baojs](https://github.com/mattreid1/baojs)|32764|37668|31509|29116|
  



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

