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
Created At : Wed May 24 2023, 11:32:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60503|64874|60748|55887|
|[hono](https://github.com/honojs/hono)|59770|63271|61590|54450|
|[fast](https://github.com/danteissaias/fast)|53793|63938|42569|54872|
|[fastro](https://github.com/fastrodev/fastro)|51392|61690|55539|36946|
|[oak](https://github.com/oakserver/oak)|19973|21312|19778|18829|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46475|50238|46257|42931|
|[fastify](https://github.com/fastify/fastify)|35348|37269|34955|33819|
|[koa](https://github.com/koajs/koa)|21958|23113|20607|22154|
|[express](https://github.com/expressjs/express)|7782|8046|7279|8021|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|67517|66106|69118|67326|
|[elysia](https://github.com/elysiajs/elysia)|67510|67642|67718|67171|
|[hono](https://github.com/honojs/hono)|67447|67886|67602|66852|
|[baojs](https://github.com/mattreid1/baojs)|57902|65074|60656|47977|
  



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

