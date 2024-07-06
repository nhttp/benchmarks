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
Created At : Sat Jul 06 2024, 12:40:08 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48548|52659|44939|48046|
|[hono](https://github.com/honojs/hono)|48233|51181|48588|44931|
|[nhttp](https://github.com/nhttp/nhttp)|48197|52395|47197|44998|
|[oak](https://github.com/oakserver/oak)|27698|28539|27250|27304|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24429|30402|22855|20031|
|[fastify](https://github.com/fastify/fastify)|16907|17283|16687|16751|
|[koa](https://github.com/koajs/koa)|14532|15761|13786|14048|
|[express](https://github.com/expressjs/express)|6431|6560|6141|6591|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68669|84934|72976|48096|
|[nhttp](https://github.com/nhttp/nhttp)|64151|85991|60311|46150|
|[hono](https://github.com/honojs/hono)|63148|77019|58726|53699|
|[baojs](https://github.com/mattreid1/baojs)|37766|46271|36858|30168|
  



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

