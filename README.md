## Runtime JS/TS benchmarks.
This benchmark uses [bombardier](https://github.com/codesenberg/bombardier).

> Focus on framework features.

Example code for benchmark.
```ts
// GET /
framework.get("/", (req, res) => {
  res.send("home");
});

// GET /blog/99?title=bench
framework.get("/blog/:id", (req, res) => {
  res.send(`${req.params.id} ${req.query.title}`);
});

// GET /api/user (set header & send json)
framework.get("/api/user", (req, res) => {
  res.setHeader("x-powered-by", "bench");
  res.json({ user: "john" });
});
```

## Output
Created At : Thu Mar 09 2023, 12:46:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42121|43993|41081|41289|
|[fast](https://github.com/danteissaias/fast)|39426|42426|35525|40328|
|[hono](https://github.com/honojs/hono)|36084|40206|38911|29134|
|[fastro](https://github.com/fastrodev/fastro)|31522|38049|28321|28197|
|[oak](https://github.com/oakserver/oak)|17792|17443|18390|17544|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|54001|64553|50063|47388|
|[hono](https://github.com/honojs/hono)|52305|61009|54321|41584|
|[nhttp](https://github.com/nhttp/nhttp)|49784|59603|45204|44545|
|[baojs](https://github.com/mattreid1/baojs)|45775|47176|45051|45098|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|28074|28424|31005|24794|
|[nhttp](https://github.com/nhttp/nhttp)|28032|28776|28054|27266|
|[koa](https://github.com/koajs/koa)|18486|18910|17356|19192|
|[express](https://github.com/expressjs/express)|6379|6500|6157|6480|
  


### Results
|Name|Lang/Runtime|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|Bun|54001|64553|50063|47388|
|[hono](https://github.com/honojs/hono)|Bun|52305|61009|54321|41584|
|[nhttp](https://github.com/nhttp/nhttp)|Bun|49784|59603|45204|44545|
|[baojs](https://github.com/mattreid1/baojs)|Bun|45775|47176|45051|45098|
|[nhttp](https://github.com/nhttp/nhttp)|Deno|42121|43993|41081|41289|
|[fast](https://github.com/danteissaias/fast)|Deno|39426|42426|35525|40328|
|[hono](https://github.com/honojs/hono)|Deno|36084|40206|38911|29134|
|[fastro](https://github.com/fastrodev/fastro)|Deno|31522|38049|28321|28197|
|[fastify](https://github.com/fastify/fastify)|Node|28074|28424|31005|24794|
|[nhttp](https://github.com/nhttp/nhttp)|Node|28032|28776|28054|27266|
|[koa](https://github.com/koajs/koa)|Node|18486|18910|17356|19192|
|[oak](https://github.com/oakserver/oak)|Deno|17792|17443|18390|17544|
|[express](https://github.com/expressjs/express)|Node|6379|6500|6157|6480|



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

