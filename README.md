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
Created At : Thu Mar 27 2025, 12:54:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60898|68602|59460|54633|
|[hono](https://github.com/honojs/hono)|59562|61158|62351|55177|
|[fast](https://github.com/danteissaias/fast)|55664|65076|47341|54575|
|[oak](https://github.com/oakserver/oak)|28518|29487|27115|28953|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38738|44984|39335|31894|
|[fastify](https://github.com/fastify/fastify)|23676|24038|23916|23073|
|[koa](https://github.com/koajs/koa)|17070|18092|15954|17163|
|[express](https://github.com/expressjs/express)|7015|7295|6539|7212|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77640|89214|76859|66846|
|[nhttp](https://github.com/nhttp/nhttp)|71170|89809|57268|66433|
|[hono](https://github.com/honojs/hono)|62469|69499|58446|59461|
|[baojs](https://github.com/mattreid1/baojs)|48094|52285|46105|45893|
  



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

