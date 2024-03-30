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
Created At : Sat Mar 30 2024, 12:35:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47987|50852|43565|49543|
|[nhttp](https://github.com/nhttp/nhttp)|47980|50965|46830|46145|
|[hono](https://github.com/honojs/hono)|47656|50603|48287|44079|
|[oak](https://github.com/oakserver/oak)|28038|29729|27904|26481|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25501|32218|23156|21128|
|[fastify](https://github.com/fastify/fastify)|16916|17266|16701|16780|
|[koa](https://github.com/koajs/koa)|14456|15077|13757|14535|
|[express](https://github.com/expressjs/express)|6450|6527|6194|6628|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76398|84522|75579|69093|
|[nhttp](https://github.com/nhttp/nhttp)|59958|85594|49793|44486|
|[hono](https://github.com/honojs/hono)|58742|62699|56845|56683|
|[baojs](https://github.com/mattreid1/baojs)|38932|47074|34968|34755|
  



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

