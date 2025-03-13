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
Created At : Thu Mar 13 2025, 12:53:27 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58345|61511|61451|52074|
|[nhttp](https://github.com/nhttp/nhttp)|56883|59562|58400|52688|
|[fast](https://github.com/danteissaias/fast)|53460|62842|47757|49782|
|[oak](https://github.com/oakserver/oak)|27281|27489|26610|27745|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39255|45893|37139|34732|
|[fastify](https://github.com/fastify/fastify)|25111|27331|24726|23276|
|[koa](https://github.com/koajs/koa)|17307|18764|16252|16904|
|[express](https://github.com/expressjs/express)|6928|7030|6552|7203|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70948|79887|70358|62598|
|[hono](https://github.com/honojs/hono)|62295|71622|61432|53830|
|[nhttp](https://github.com/nhttp/nhttp)|61576|83487|53627|47614|
|[baojs](https://github.com/mattreid1/baojs)|43980|48052|40270|43617|
  



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

