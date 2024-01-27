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
Created At : Sat Jan 27 2024, 12:36:36 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48216|52054|46663|45932|
|[fast](https://github.com/danteissaias/fast)|47827|51322|46068|46092|
|[hono](https://github.com/honojs/hono)|47030|50210|46901|43978|
|[oak](https://github.com/oakserver/oak)|27677|29056|27772|26202|
|[fastro](https://github.com/fastrodev/fastro)|24100|50823|11001|10476|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24148|30902|22035|19506|
|[fastify](https://github.com/fastify/fastify)|16959|17330|16750|16796|
|[koa](https://github.com/koajs/koa)|14560|15366|13881|14432|
|[express](https://github.com/expressjs/express)|6388|6498|6120|6546|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77964|85640|80503|67748|
|[nhttp](https://github.com/nhttp/nhttp)|65333|85575|57580|52844|
|[hono](https://github.com/honojs/hono)|59915|68970|50494|60282|
|[baojs](https://github.com/mattreid1/baojs)|35767|40934|35922|30446|
  



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

