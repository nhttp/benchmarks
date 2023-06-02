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
Created At : Fri Jun 02 2023, 1:49:15 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|53575|57800|52756|50168|
|[hono](https://github.com/honojs/hono)|50854|55350|51923|45289|
|[fast](https://github.com/danteissaias/fast)|46466|57131|47767|34500|
|[fastro](https://github.com/fastrodev/fastro)|42709|52496|44474|31158|
|[oak](https://github.com/oakserver/oak)|17599|18806|17662|16328|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37626|40472|37212|35195|
|[fastify](https://github.com/fastify/fastify)|29549|31557|29428|27663|
|[koa](https://github.com/koajs/koa)|18338|19388|17157|18470|
|[express](https://github.com/expressjs/express)|6311|6503|6131|6298|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61616|61745|59256|63847|
|[hono](https://github.com/honojs/hono)|61354|59393|61834|62834|
|[elysia](https://github.com/elysiajs/elysia)|59829|58721|61724|59043|
|[baojs](https://github.com/mattreid1/baojs)|53493|60693|55395|44392|
  



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

