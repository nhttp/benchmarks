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
Created At : Sat Aug 03 2024, 12:42:17 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|46075|49619|43574|45031|
|[hono](https://github.com/honojs/hono)|45891|49025|46764|41884|
|[nhttp](https://github.com/nhttp/nhttp)|45787|49132|45287|42941|
|[oak](https://github.com/oakserver/oak)|25839|26873|25151|25492|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24087|29736|22579|19947|
|[fastify](https://github.com/fastify/fastify)|16566|17119|15993|16585|
|[koa](https://github.com/koajs/koa)|14302|15016|13499|14392|
|[express](https://github.com/expressjs/express)|6326|6464|5984|6531|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67703|75187|79134|48789|
|[nhttp](https://github.com/nhttp/nhttp)|59473|83010|50971|44437|
|[hono](https://github.com/honojs/hono)|57109|66415|52595|52317|
|[baojs](https://github.com/mattreid1/baojs)|34061|36220|34761|31201|
  



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

