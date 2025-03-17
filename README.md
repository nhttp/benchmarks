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
Created At : Mon Mar 17 2025, 12:55:11 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|60251|67238|59009|54506|
|[fast](https://github.com/danteissaias/fast)|58936|71296|48006|57507|
|[nhttp](https://github.com/nhttp/nhttp)|57311|67875|54176|49883|
|[oak](https://github.com/oakserver/oak)|28386|29022|27666|28470|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39871|49089|35508|35016|
|[fastify](https://github.com/fastify/fastify)|25105|25053|25239|25022|
|[koa](https://github.com/koajs/koa)|17404|18409|16166|17638|
|[express](https://github.com/expressjs/express)|7142|7339|6784|7304|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77384|87886|77182|67083|
|[nhttp](https://github.com/nhttp/nhttp)|72190|99017|59275|58279|
|[hono](https://github.com/honojs/hono)|68697|78765|65002|62325|
|[baojs](https://github.com/mattreid1/baojs)|50027|53383|48318|48381|
  



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

