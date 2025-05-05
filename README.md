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
Created At : Mon May 05 2025, 1:02:42 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58109|61291|58345|54692|
|[fast](https://github.com/danteissaias/fast)|55056|64690|48774|51705|
|[hono](https://github.com/honojs/hono)|54419|59228|54435|49594|
|[oak](https://github.com/oakserver/oak)|27986|29763|26169|28026|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38847|44893|37376|34273|
|[fastify](https://github.com/fastify/fastify)|25028|25376|25699|24008|
|[koa](https://github.com/koajs/koa)|17008|17370|16805|16849|
|[express](https://github.com/expressjs/express)|6440|6584|6133|6603|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72750|88334|66007|63908|
|[nhttp](https://github.com/nhttp/nhttp)|66679|85290|58511|56235|
|[hono](https://github.com/honojs/hono)|62727|67943|59033|61204|
|[baojs](https://github.com/mattreid1/baojs)|45550|48718|42952|44979|
  



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

