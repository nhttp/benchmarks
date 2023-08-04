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
Created At : Fri Aug 04 2023, 12:42:38 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62028|67810|61086|57187|
|[hono](https://github.com/honojs/hono)|61551|66930|62189|55535|
|[fastro](https://github.com/fastrodev/fastro)|23449|59953|4777|5617|
|[oak](https://github.com/oakserver/oak)|18230|19209|18162|17318|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43013|46099|42314|40625|
|[fastify](https://github.com/fastify/fastify)|33468|34984|32839|32582|
|[koa](https://github.com/koajs/koa)|21654|22728|20387|21848|
|[express](https://github.com/expressjs/express)|7728|7876|7388|7921|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|67698|66338|66977|69780|
|[elysia](https://github.com/elysiajs/elysia)|66889|66205|66496|67966|
|[nhttp](https://github.com/nhttp/nhttp)|66854|68827|66946|64789|
|[baojs](https://github.com/mattreid1/baojs)|55099|60523|58118|46655|
  



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

