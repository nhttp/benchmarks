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
Created At : Tue Jun 27 2023, 12:52:13 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56961|62020|55323|53541|
|[hono](https://github.com/honojs/hono)|54915|58401|55833|50511|
|[fastro](https://github.com/fastrodev/fastro)|44036|56449|39634|36025|
|[oak](https://github.com/oakserver/oak)|17750|18766|17631|16852|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|27698|28967|28394|25734|
|[nhttp](https://github.com/nhttp/nhttp)|19617|19492|19463|19897|
|[koa](https://github.com/koajs/koa)|16319|17374|15126|16458|
|[express](https://github.com/expressjs/express)|6101|6326|5776|6202|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64346|62991|67119|62929|
|[hono](https://github.com/honojs/hono)|62163|60860|63317|62312|
|[elysia](https://github.com/elysiajs/elysia)|60283|59226|60865|60757|
|[baojs](https://github.com/mattreid1/baojs)|51568|57778|42079|54848|
  



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

