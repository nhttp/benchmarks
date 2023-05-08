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
Created At : Mon May 08 2023, 12:38:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56793|63228|55045|52106|
|[hono](https://github.com/honojs/hono)|50720|55060|53337|43763|
|[fast](https://github.com/danteissaias/fast)|50413|60477|41367|49396|
|[fastro](https://github.com/fastrodev/fastro)|47405|60674|47065|34475|
|[oak](https://github.com/oakserver/oak)|17706|18817|17674|16628|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38061|40487|37588|36107|
|[fastify](https://github.com/fastify/fastify)|29291|30193|29600|28079|
|[koa](https://github.com/koajs/koa)|18558|19699|17135|18839|
|[express](https://github.com/expressjs/express)|6608|6781|6327|6717|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63728|62576|64880|63729|
|[hono](https://github.com/honojs/hono)|60875|61210|60860|60554|
|[elysia](https://github.com/elysiajs/elysia)|58594|59174|59445|57163|
|[baojs](https://github.com/mattreid1/baojs)|52341|59150|43328|54545|
  



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

