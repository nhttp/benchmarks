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
Created At : Sat Sep 30 2023, 11:26:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|54262|56677|53561|52549|
|[fast](https://github.com/danteissaias/fast)|49314|59420|49439|39083|
|[hono](https://github.com/honojs/hono)|49067|50659|51652|44890|
|[fastro](https://github.com/fastrodev/fastro)|22223|55239|5800|5629|
|[oak](https://github.com/oakserver/oak)|16334|17040|16288|15674|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|35246|37785|35067|32887|
|[fastify](https://github.com/fastify/fastify)|25832|26688|25879|24930|
|[koa](https://github.com/koajs/koa)|16546|17409|15457|16771|
|[express](https://github.com/expressjs/express)|5383|5533|5062|5553|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|52396|47856|56282|53051|
|[nhttp](https://github.com/nhttp/nhttp)|51840|50324|54585|50611|
|[elysia](https://github.com/elysiajs/elysia)|50293|49467|45324|56087|
|[baojs](https://github.com/mattreid1/baojs)|40389|48011|40777|32378|
  



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

