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
Created At : Mon May 29 2023, 12:42:11 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|52949|57179|52672|48995|
|[hono](https://github.com/honojs/hono)|51004|56154|50659|46198|
|[fast](https://github.com/danteissaias/fast)|47593|57884|36541|48355|
|[fastro](https://github.com/fastrodev/fastro)|41507|53274|40167|31080|
|[oak](https://github.com/oakserver/oak)|17122|18754|16154|16459|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38066|41392|37741|35064|
|[fastify](https://github.com/fastify/fastify)|27988|31050|24498|28417|
|[koa](https://github.com/koajs/koa)|18822|19781|17517|19167|
|[express](https://github.com/expressjs/express)|6513|6637|6269|6633|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|61372|61631|60632|61854|
|[elysia](https://github.com/elysiajs/elysia)|60697|60745|59836|61509|
|[nhttp](https://github.com/nhttp/nhttp)|58887|62146|63899|50616|
|[baojs](https://github.com/mattreid1/baojs)|54530|58678|52298|52614|
  



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

