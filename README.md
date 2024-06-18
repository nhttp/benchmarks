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
Created At : Tue Jun 18 2024, 12:41:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48981|52454|48613|45877|
|[fast](https://github.com/danteissaias/fast)|48225|52249|44944|47481|
|[hono](https://github.com/honojs/hono)|48143|50666|49380|44383|
|[oak](https://github.com/oakserver/oak)|27152|28290|26488|26678|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23885|29460|22210|19986|
|[fastify](https://github.com/fastify/fastify)|16923|17323|16767|16678|
|[koa](https://github.com/koajs/koa)|14323|14931|13573|14464|
|[express](https://github.com/expressjs/express)|6422|6469|6179|6619|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74849|86697|81018|56832|
|[nhttp](https://github.com/nhttp/nhttp)|61911|88258|54010|43465|
|[hono](https://github.com/honojs/hono)|58381|72086|58403|44654|
|[baojs](https://github.com/mattreid1/baojs)|36100|42386|33674|32240|
  



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

