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
Created At : Thu Apr 11 2024, 12:37:38 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47789|50591|46467|46310|
|[hono](https://github.com/honojs/hono)|47049|50297|47315|43534|
|[fast](https://github.com/danteissaias/fast)|46897|50989|44760|44941|
|[oak](https://github.com/oakserver/oak)|27167|28583|27234|25684|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25121|31324|23311|20727|
|[fastify](https://github.com/fastify/fastify)|16456|17250|16285|15832|
|[koa](https://github.com/koajs/koa)|14414|15305|13512|14425|
|[express](https://github.com/expressjs/express)|6422|6495|6145|6626|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|65532|75689|70633|50275|
|[nhttp](https://github.com/nhttp/nhttp)|55815|85182|38924|43340|
|[hono](https://github.com/honojs/hono)|51370|63052|46316|44742|
|[baojs](https://github.com/mattreid1/baojs)|33837|43890|29369|28252|
  



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

