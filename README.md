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
Created At : Fri May 03 2024, 12:40:21 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48511|51976|47566|45990|
|[fast](https://github.com/danteissaias/fast)|48231|51753|45456|47485|
|[hono](https://github.com/honojs/hono)|47899|50627|48984|44087|
|[oak](https://github.com/oakserver/oak)|28115|29798|28052|26495|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23011|30035|20449|18549|
|[fastify](https://github.com/fastify/fastify)|16808|16999|16868|16558|
|[koa](https://github.com/koajs/koa)|14731|15921|13759|14514|
|[express](https://github.com/expressjs/express)|6329|6560|6103|6325|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73236|86187|72622|60900|
|[nhttp](https://github.com/nhttp/nhttp)|68120|86638|61955|55766|
|[hono](https://github.com/honojs/hono)|63035|71354|59328|58423|
|[baojs](https://github.com/mattreid1/baojs)|39511|49768|36523|32243|
  



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

