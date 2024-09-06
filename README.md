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
Created At : Fri Sep 06 2024, 12:45:47 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48518|52121|49104|44330|
|[nhttp](https://github.com/nhttp/nhttp)|47979|51856|47129|44951|
|[fast](https://github.com/danteissaias/fast)|47188|50920|45937|44707|
|[oak](https://github.com/oakserver/oak)|25940|26827|25426|25568|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25056|31352|22675|21142|
|[fastify](https://github.com/fastify/fastify)|16600|16867|16527|16407|
|[koa](https://github.com/koajs/koa)|13960|14735|13128|14018|
|[express](https://github.com/expressjs/express)|6319|6450|6001|6506|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71092|80302|76845|56129|
|[nhttp](https://github.com/nhttp/nhttp)|65333|79789|57064|59145|
|[hono](https://github.com/honojs/hono)|62890|74106|62298|52266|
|[baojs](https://github.com/mattreid1/baojs)|37123|42513|37200|31655|
  



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

