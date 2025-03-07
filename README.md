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
Created At : Fri Mar 07 2025, 12:53:16 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60555|65317|61067|55280|
|[hono](https://github.com/honojs/hono)|57362|61970|56124|53991|
|[fast](https://github.com/danteissaias/fast)|54717|68248|44164|51738|
|[oak](https://github.com/oakserver/oak)|28135|29173|27310|27922|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40027|47399|38506|34176|
|[fastify](https://github.com/fastify/fastify)|26355|29132|26623|23311|
|[koa](https://github.com/koajs/koa)|16406|17251|15462|16506|
|[express](https://github.com/expressjs/express)|6998|7289|6425|7280|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77339|88163|76579|67274|
|[nhttp](https://github.com/nhttp/nhttp)|71684|92984|63222|58845|
|[hono](https://github.com/honojs/hono)|63737|70177|61770|59264|
|[baojs](https://github.com/mattreid1/baojs)|48577|53103|49588|43041|
  



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

