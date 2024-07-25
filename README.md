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
Created At : Thu Jul 25 2024, 12:42:38 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46718|50750|45852|43552|
|[hono](https://github.com/honojs/hono)|46472|49017|47471|42927|
|[fast](https://github.com/danteissaias/fast)|45877|50011|42862|44759|
|[oak](https://github.com/oakserver/oak)|25396|26115|24513|25561|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24402|30681|22274|20251|
|[fastify](https://github.com/fastify/fastify)|16950|17439|16700|16711|
|[koa](https://github.com/koajs/koa)|14312|14941|13531|14464|
|[express](https://github.com/expressjs/express)|6381|6489|6081|6574|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|65976|82631|70227|45070|
|[nhttp](https://github.com/nhttp/nhttp)|60359|81545|52231|47302|
|[hono](https://github.com/honojs/hono)|56604|67090|54563|48158|
|[baojs](https://github.com/mattreid1/baojs)|35381|39657|34860|31626|
  



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

