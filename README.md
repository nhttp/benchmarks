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
Created At : Mon Nov 13 2023, 12:38:06 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|51214|55132|52398|46111|
|[nhttp](https://github.com/nhttp/nhttp)|50319|53279|49597|48082|
|[fast](https://github.com/danteissaias/fast)|45463|56132|37751|42505|
|[fastro](https://github.com/fastrodev/fastro)|21919|53249|6252|6256|
|[oak](https://github.com/oakserver/oak)|16124|16853|16038|15482|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|34528|38052|35065|30466|
|[fastify](https://github.com/fastify/fastify)|25548|26973|25341|24331|
|[koa](https://github.com/koajs/koa)|18011|18934|16667|18432|
|[express](https://github.com/expressjs/express)|5405|5634|4903|5679|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|53782|50954|54433|55959|
|[hono](https://github.com/honojs/hono)|53671|51111|53433|56469|
|[elysia](https://github.com/elysiajs/elysia)|53296|53314|50340|56234|
|[baojs](https://github.com/mattreid1/baojs)|44457|50307|37461|45604|
  



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

