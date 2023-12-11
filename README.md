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
Created At : Mon Dec 11 2023, 12:39:29 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45149|48053|44265|43130|
|[fast](https://github.com/danteissaias/fast)|44882|48142|42699|43806|
|[hono](https://github.com/honojs/hono)|44040|46892|44473|40755|
|[fastro](https://github.com/fastrodev/fastro)|23560|47640|11999|11041|
|[oak](https://github.com/oakserver/oak)|20425|21737|19966|19571|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26816|32983|24599|22866|
|[fastify](https://github.com/fastify/fastify)|15089|15276|14883|15108|
|[koa](https://github.com/koajs/koa)|13915|14404|13149|14193|
|[express](https://github.com/expressjs/express)|6245|6364|6004|6366|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70248|79276|71217|60251|
|[nhttp](https://github.com/nhttp/nhttp)|66579|81426|62510|55802|
|[hono](https://github.com/honojs/hono)|58584|72285|53168|50299|
|[baojs](https://github.com/mattreid1/baojs)|33720|39358|32133|29669|
  



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

