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
Created At : Sat Aug 26 2023, 12:33:26 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61090|67670|56261|59340|
|[hono](https://github.com/honojs/hono)|60082|64670|60485|55091|
|[fastro](https://github.com/fastrodev/fastro)|25816|65472|6302|5673|
|[oak](https://github.com/oakserver/oak)|18907|20147|18858|17717|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42491|45782|41954|39738|
|[fastify](https://github.com/fastify/fastify)|33808|34255|34048|33121|
|[koa](https://github.com/koajs/koa)|21750|22871|20429|21950|
|[express](https://github.com/expressjs/express)|7524|7655|7118|7799|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|67942|68872|67598|67356|
|[elysia](https://github.com/elysiajs/elysia)|67812|67048|67716|68672|
|[nhttp](https://github.com/nhttp/nhttp)|66448|66743|66911|65690|
|[baojs](https://github.com/mattreid1/baojs)|48844|57373|49654|39506|
  



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

