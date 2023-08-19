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
Created At : Sat Aug 19 2023, 12:32:37 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58739|64237|57045|54936|
|[hono](https://github.com/honojs/hono)|58345|62740|58163|54133|
|[fastro](https://github.com/fastrodev/fastro)|23278|58209|5380|6246|
|[oak](https://github.com/oakserver/oak)|18170|19175|18153|17181|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42693|45742|42247|40090|
|[fastify](https://github.com/fastify/fastify)|33399|34271|33358|32568|
|[koa](https://github.com/koajs/koa)|20923|22248|19677|20843|
|[express](https://github.com/expressjs/express)|7296|7528|6598|7761|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|66183|66546|66191|65812|
|[hono](https://github.com/honojs/hono)|65633|64175|66906|65818|
|[elysia](https://github.com/elysiajs/elysia)|62836|64288|58235|65986|
|[baojs](https://github.com/mattreid1/baojs)|49197|50956|53874|42760|
  



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

