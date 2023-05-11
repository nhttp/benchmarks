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
Created At : Thu May 11 2023, 12:39:42 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61815|67753|61036|56657|
|[hono](https://github.com/honojs/hono)|59746|65600|61286|52353|
|[fast](https://github.com/danteissaias/fast)|55126|64714|55907|44757|
|[fastro](https://github.com/fastrodev/fastro)|52566|64597|55311|37790|
|[oak](https://github.com/oakserver/oak)|19326|20483|19520|17974|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42945|46041|41961|40834|
|[fastify](https://github.com/fastify/fastify)|35257|36569|34682|34520|
|[koa](https://github.com/koajs/koa)|21665|22760|20533|21703|
|[express](https://github.com/expressjs/express)|7742|7917|7628|7681|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|69822|68018|71732|69717|
|[hono](https://github.com/honojs/hono)|66046|66867|65480|65791|
|[elysia](https://github.com/elysiajs/elysia)|64366|62805|65084|65209|
|[baojs](https://github.com/mattreid1/baojs)|55803|62088|56143|49179|
  



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

