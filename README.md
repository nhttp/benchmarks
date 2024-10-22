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
Created At : Tue Oct 22 2024, 12:50:50 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|47612|51227|48459|43149|
|[nhttp](https://github.com/nhttp/nhttp)|47215|51508|46275|43863|
|[fast](https://github.com/danteissaias/fast)|46762|50440|45768|44077|
|[oak](https://github.com/oakserver/oak)|26251|27267|25670|25817|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24659|30126|22853|20998|
|[fastify](https://github.com/fastify/fastify)|16583|16871|16564|16315|
|[koa](https://github.com/koajs/koa)|14184|15243|13105|14204|
|[express](https://github.com/expressjs/express)|6314|6550|5939|6453|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72027|75596|77483|63001|
|[nhttp](https://github.com/nhttp/nhttp)|59040|78429|47461|51230|
|[hono](https://github.com/honojs/hono)|55149|72356|42247|50845|
|[baojs](https://github.com/mattreid1/baojs)|36262|42008|35488|31289|
  



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

