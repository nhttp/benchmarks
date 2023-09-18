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
Created At : Mon Sep 18 2023, 12:36:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|66124|69570|65715|63088|
|[hono](https://github.com/honojs/hono)|63146|68714|64161|56564|
|[fast](https://github.com/danteissaias/fast)|57756|67389|43910|61969|
|[fastro](https://github.com/fastrodev/fastro)|27824|70185|6497|6790|
|[oak](https://github.com/oakserver/oak)|18856|20301|18205|18061|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44248|47877|42746|42120|
|[fastify](https://github.com/fastify/fastify)|35105|36195|35019|34102|
|[koa](https://github.com/koajs/koa)|21776|22629|20730|21969|
|[express](https://github.com/expressjs/express)|7483|7756|6799|7895|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64758|61105|67701|65468|
|[elysia](https://github.com/elysiajs/elysia)|61272|60745|58134|64937|
|[hono](https://github.com/honojs/hono)|61079|59627|56800|66811|
|[baojs](https://github.com/mattreid1/baojs)|51995|60633|42068|53283|
  



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

