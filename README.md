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
Created At : Fri Apr 07 2023, 7:00:20 PM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45280|49304|45932|40604|
|[hono](https://github.com/honojs/hono)|44125|48587|44602|39186|
|[fast](https://github.com/danteissaias/fast)|41541|47414|37848|39362|
|[fastro](https://github.com/fastrodev/fastro)|36682|45798|33639|30609|
|[oak](https://github.com/oakserver/oak)|15404|14718|18215|13278|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38796|41457|38402|36528|
|[fastify](https://github.com/fastify/fastify)|29894|30718|30001|28962|
|[koa](https://github.com/koajs/koa)|18479|19829|17126|18481|
|[express](https://github.com/expressjs/express)|6598|6773|6200|6822|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62204|60819|62655|63139|
|[hono](https://github.com/honojs/hono)|60942|59473|60098|63255|
|[elysia](https://github.com/elysiajs/elysia)|59227|58699|60333|58649|
|[baojs](https://github.com/mattreid1/baojs)|52770|60734|42178|55399|
  



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

