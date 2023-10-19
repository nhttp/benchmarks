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
Created At : Thu Oct 19 2023, 12:36:05 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60078|65074|58441|56720|
|[hono](https://github.com/honojs/hono)|56569|60812|57801|51094|
|[fast](https://github.com/danteissaias/fast)|51666|60524|46767|47707|
|[fastro](https://github.com/fastrodev/fastro)|24572|61551|6159|6007|
|[oak](https://github.com/oakserver/oak)|18023|18569|18243|17256|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38849|41801|38659|36088|
|[fastify](https://github.com/fastify/fastify)|28566|30215|27884|27600|
|[koa](https://github.com/koajs/koa)|19221|20119|17991|19553|
|[express](https://github.com/expressjs/express)|6206|6422|5931|6266|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56901|56261|56398|58044|
|[hono](https://github.com/honojs/hono)|56592|51581|60169|58026|
|[elysia](https://github.com/elysiajs/elysia)|54297|51868|50917|60107|
|[baojs](https://github.com/mattreid1/baojs)|44994|49650|39060|46272|
  



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

