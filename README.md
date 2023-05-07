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
Created At : Sun May 07 2023, 12:48:45 PM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62846|68655|62089|57795|
|[hono](https://github.com/honojs/hono)|56259|60139|58327|50310|
|[fast](https://github.com/danteissaias/fast)|54227|64860|48701|49121|
|[fastro](https://github.com/fastrodev/fastro)|52283|66135|51819|38896|
|[oak](https://github.com/oakserver/oak)|19644|21063|19547|18322|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45142|48041|44933|42453|
|[fastify](https://github.com/fastify/fastify)|35258|37220|34482|34072|
|[koa](https://github.com/koajs/koa)|22148|23457|20601|22386|
|[express](https://github.com/expressjs/express)|7756|8014|7203|8051|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|70702|69079|72064|70963|
|[hono](https://github.com/honojs/hono)|68040|67412|68086|68621|
|[elysia](https://github.com/elysiajs/elysia)|67275|67864|67124|66836|
|[baojs](https://github.com/mattreid1/baojs)|59372|66641|50141|61334|
  



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

