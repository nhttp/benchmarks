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
Created At : Tue Oct 10 2023, 12:39:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|52778|55361|52395|50578|
|[hono](https://github.com/honojs/hono)|49192|54010|51147|42419|
|[fast](https://github.com/danteissaias/fast)|42723|55305|44562|28302|
|[fastro](https://github.com/fastrodev/fastro)|21349|52321|5664|6063|
|[oak](https://github.com/oakserver/oak)|15227|16125|15438|14119|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|33837|36673|33049|31790|
|[fastify](https://github.com/fastify/fastify)|24129|24963|24263|23161|
|[koa](https://github.com/koajs/koa)|15649|16317|14630|16000|
|[express](https://github.com/expressjs/express)|5082|5308|5072|4867|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|52638|50961|53646|53307|
|[nhttp](https://github.com/nhttp/nhttp)|49688|47159|50464|51440|
|[elysia](https://github.com/elysiajs/elysia)|47810|47697|45536|50197|
|[baojs](https://github.com/mattreid1/baojs)|38690|42792|35910|37367|
  



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

