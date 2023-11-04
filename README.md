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
Created At : Sat Nov 04 2023, 12:35:56 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62836|64828|64150|59531|
|[hono](https://github.com/honojs/hono)|61085|64306|63208|55741|
|[fast](https://github.com/danteissaias/fast)|56600|67120|58415|44265|
|[fastro](https://github.com/fastrodev/fastro)|26387|65050|6852|7258|
|[oak](https://github.com/oakserver/oak)|18660|19884|18902|17195|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44103|46227|43931|42150|
|[fastify](https://github.com/fastify/fastify)|32281|33291|32293|31259|
|[koa](https://github.com/koajs/koa)|22049|23390|20468|22290|
|[express](https://github.com/expressjs/express)|7132|7347|6758|7291|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|66365|66372|64859|67863|
|[hono](https://github.com/honojs/hono)|64464|65410|62378|65603|
|[elysia](https://github.com/elysiajs/elysia)|61763|60643|62312|62335|
|[baojs](https://github.com/mattreid1/baojs)|53271|60163|54925|44726|
  



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

