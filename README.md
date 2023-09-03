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
Created At : Sun Sep 03 2023, 12:37:13 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63963|70234|62418|59236|
|[hono](https://github.com/honojs/hono)|60514|65266|60955|55321|
|[fast](https://github.com/danteissaias/fast)|57376|69458|56261|46410|
|[fastro](https://github.com/fastrodev/fastro)|25961|65038|6505|6339|
|[oak](https://github.com/oakserver/oak)|19186|20289|19125|18144|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45241|48392|45201|42130|
|[fastify](https://github.com/fastify/fastify)|34514|35899|34196|33447|
|[koa](https://github.com/koajs/koa)|21649|22944|20553|21449|
|[express](https://github.com/expressjs/express)|7515|7941|7398|7206|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|68071|66312|68206|69696|
|[nhttp](https://github.com/nhttp/nhttp)|68033|68209|69229|66662|
|[elysia](https://github.com/elysiajs/elysia)|66348|65098|64896|69050|
|[baojs](https://github.com/mattreid1/baojs)|49774|56459|52949|39913|
  



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

