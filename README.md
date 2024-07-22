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
Created At : Mon Jul 22 2024, 12:44:16 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|46167|48832|46921|42749|
|[nhttp](https://github.com/nhttp/nhttp)|46012|48421|45729|43885|
|[fast](https://github.com/danteissaias/fast)|45013|48402|43196|43440|
|[oak](https://github.com/oakserver/oak)|25825|26829|25257|25388|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24175|30157|22325|20043|
|[fastify](https://github.com/fastify/fastify)|16946|17346|16731|16762|
|[koa](https://github.com/koajs/koa)|14436|15295|13573|14439|
|[express](https://github.com/expressjs/express)|6309|6452|6067|6409|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69204|85801|78358|43452|
|[nhttp](https://github.com/nhttp/nhttp)|56527|83816|41048|44717|
|[hono](https://github.com/honojs/hono)|52306|60736|49404|46777|
|[baojs](https://github.com/mattreid1/baojs)|33739|36850|34087|30281|
  



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

