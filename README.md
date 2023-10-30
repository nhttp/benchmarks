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
Created At : Mon Oct 30 2023, 12:36:38 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61911|65306|62278|58150|
|[hono](https://github.com/honojs/hono)|57482|62749|59511|50186|
|[fast](https://github.com/danteissaias/fast)|52754|64793|37387|56083|
|[fastro](https://github.com/fastrodev/fastro)|25010|62528|6368|6134|
|[oak](https://github.com/oakserver/oak)|18357|19402|18170|17499|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39272|42564|39120|36132|
|[fastify](https://github.com/fastify/fastify)|29578|30885|29834|28014|
|[koa](https://github.com/koajs/koa)|19968|21094|18741|20068|
|[express](https://github.com/expressjs/express)|6140|6329|5582|6508|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58420|52705|61962|60592|
|[nhttp](https://github.com/nhttp/nhttp)|58059|54461|59693|60023|
|[elysia](https://github.com/elysiajs/elysia)|55685|54802|50891|61361|
|[baojs](https://github.com/mattreid1/baojs)|49596|59000|53162|36625|
  



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

