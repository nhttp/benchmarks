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
Created At : Fri Oct 25 2024, 12:50:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47873|52226|47324|44068|
|[fast](https://github.com/danteissaias/fast)|47816|52159|43983|47306|
|[hono](https://github.com/honojs/hono)|47261|50706|48101|42977|
|[oak](https://github.com/oakserver/oak)|25547|26230|25058|25352|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25126|31687|22798|20892|
|[fastify](https://github.com/fastify/fastify)|16310|16387|16319|16224|
|[koa](https://github.com/koajs/koa)|13768|14432|12853|14020|
|[express](https://github.com/expressjs/express)|6236|6444|5792|6471|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68113|77929|70702|55708|
|[nhttp](https://github.com/nhttp/nhttp)|56136|80053|41509|46846|
|[hono](https://github.com/honojs/hono)|53288|70890|47760|41214|
|[baojs](https://github.com/mattreid1/baojs)|32405|37530|32390|27295|
  



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

