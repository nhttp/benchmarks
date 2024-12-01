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
Created At : Sun Dec 01 2024, 1:03:10 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48323|52458|47286|45225|
|[hono](https://github.com/honojs/hono)|47997|50959|49318|43713|
|[fast](https://github.com/danteissaias/fast)|47471|52548|44299|45567|
|[oak](https://github.com/oakserver/oak)|26130|27198|25484|25709|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24203|29767|22617|20225|
|[fastify](https://github.com/fastify/fastify)|17119|17537|16858|16963|
|[koa](https://github.com/koajs/koa)|14121|15416|13069|13877|
|[express](https://github.com/expressjs/express)|6362|6601|5973|6512|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75122|84938|76582|63847|
|[nhttp](https://github.com/nhttp/nhttp)|60866|84829|43788|53980|
|[hono](https://github.com/honojs/hono)|51718|58254|50781|46120|
|[baojs](https://github.com/mattreid1/baojs)|34623|42244|30162|31463|
  



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

