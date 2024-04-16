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
Created At : Tue Apr 16 2024, 12:37:13 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47885|51094|45318|47244|
|[nhttp](https://github.com/nhttp/nhttp)|47838|51108|46749|45656|
|[hono](https://github.com/honojs/hono)|47148|50012|47373|44059|
|[oak](https://github.com/oakserver/oak)|27838|29252|28024|26237|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25183|31302|23093|21153|
|[fastify](https://github.com/fastify/fastify)|16652|17216|16458|16281|
|[koa](https://github.com/koajs/koa)|14529|15273|13790|14524|
|[express](https://github.com/expressjs/express)|6367|6513|6093|6494|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74148|84303|76081|62060|
|[hono](https://github.com/honojs/hono)|62353|80043|59387|47630|
|[nhttp](https://github.com/nhttp/nhttp)|58873|81907|49471|45240|
|[baojs](https://github.com/mattreid1/baojs)|37550|44559|30748|37343|
  



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

