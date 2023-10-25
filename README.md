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
Created At : Wed Oct 25 2023, 12:35:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60008|62474|60355|57194|
|[hono](https://github.com/honojs/hono)|58735|63384|60802|52018|
|[fast](https://github.com/danteissaias/fast)|51577|60820|38482|55429|
|[fastro](https://github.com/fastrodev/fastro)|24992|61824|6711|6440|
|[oak](https://github.com/oakserver/oak)|17648|18394|17745|16805|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39817|43192|39245|37013|
|[fastify](https://github.com/fastify/fastify)|29093|29970|29105|28205|
|[koa](https://github.com/koajs/koa)|19411|20474|18152|19607|
|[express](https://github.com/expressjs/express)|6127|6324|5597|6459|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60617|58507|62045|61298|
|[elysia](https://github.com/elysiajs/elysia)|58393|58072|56480|60626|
|[hono](https://github.com/honojs/hono)|57504|55944|55107|61460|
|[baojs](https://github.com/mattreid1/baojs)|46041|55689|51252|31183|
  



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

