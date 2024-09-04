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
Created At : Wed Sep 04 2024, 12:45:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48056|52677|46138|45353|
|[nhttp](https://github.com/nhttp/nhttp)|47986|51210|48003|44745|
|[hono](https://github.com/honojs/hono)|47332|49907|48543|43545|
|[oak](https://github.com/oakserver/oak)|26100|26979|25595|25727|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25549|33141|22551|20954|
|[fastify](https://github.com/fastify/fastify)|16510|16938|16264|16327|
|[koa](https://github.com/koajs/koa)|13836|14609|12958|13940|
|[express](https://github.com/expressjs/express)|6349|6525|5995|6527|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71300|81294|77018|55589|
|[hono](https://github.com/honojs/hono)|65393|76109|61666|58403|
|[nhttp](https://github.com/nhttp/nhttp)|64986|82425|57407|55125|
|[baojs](https://github.com/mattreid1/baojs)|35291|39367|33028|33479|
  



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

