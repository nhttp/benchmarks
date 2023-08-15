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
Created At : Tue Aug 15 2023, 12:34:17 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48859|50947|48733|46898|
|[hono](https://github.com/honojs/hono)|46653|49271|48366|42321|
|[fastro](https://github.com/fastrodev/fastro)|18390|45804|4633|4734|
|[oak](https://github.com/oakserver/oak)|14853|15544|14911|14105|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|32298|35169|31936|29788|
|[fastify](https://github.com/fastify/fastify)|24572|25308|24580|23829|
|[koa](https://github.com/koajs/koa)|15854|16741|14828|15992|
|[express](https://github.com/expressjs/express)|5487|5591|5199|5671|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56426|58928|55337|55014|
|[hono](https://github.com/honojs/hono)|55788|55183|55624|56558|
|[elysia](https://github.com/elysiajs/elysia)|53912|53322|53325|55089|
|[baojs](https://github.com/mattreid1/baojs)|41627|48576|42865|33440|
  



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

