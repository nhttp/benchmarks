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
Created At : Sat Jan 11 2025, 12:51:08 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|46785|49913|47356|43085|
|[nhttp](https://github.com/nhttp/nhttp)|46696|50720|46507|42860|
|[fast](https://github.com/danteissaias/fast)|46066|50818|42622|44758|
|[oak](https://github.com/oakserver/oak)|25693|26708|25111|25260|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26429|33186|24258|21842|
|[fastify](https://github.com/fastify/fastify)|17240|17824|17211|16684|
|[koa](https://github.com/koajs/koa)|14347|15263|13315|14464|
|[express](https://github.com/expressjs/express)|6436|6607|6042|6659|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|64432|78312|63450|51533|
|[nhttp](https://github.com/nhttp/nhttp)|55754|80790|42534|43938|
|[hono](https://github.com/honojs/hono)|50926|61144|46986|44649|
|[baojs](https://github.com/mattreid1/baojs)|33690|37724|33782|29565|
  



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

