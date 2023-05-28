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
Created At : Sun May 28 2023, 12:37:34 PM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57792|61950|57774|53651|
|[hono](https://github.com/honojs/hono)|56973|61608|58608|50704|
|[fast](https://github.com/danteissaias/fast)|55721|60441|52123|54598|
|[fastro](https://github.com/fastrodev/fastro)|47748|59159|49263|34821|
|[oak](https://github.com/oakserver/oak)|18380|20499|17164|17476|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43857|47131|43313|41126|
|[fastify](https://github.com/fastify/fastify)|32546|35953|30819|30867|
|[koa](https://github.com/koajs/koa)|21306|22694|19694|21531|
|[express](https://github.com/expressjs/express)|7939|7977|7732|8109|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|66770|68284|66425|65602|
|[elysia](https://github.com/elysiajs/elysia)|66233|65238|67696|65766|
|[nhttp](https://github.com/nhttp/nhttp)|63794|65866|63480|62035|
|[baojs](https://github.com/mattreid1/baojs)|59968|63749|57531|58623|
  



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

