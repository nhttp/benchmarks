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
Created At : Fri Apr 19 2024, 12:37:39 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47575|51032|43176|48518|
|[nhttp](https://github.com/nhttp/nhttp)|47316|50140|46712|45096|
|[hono](https://github.com/honojs/hono)|47163|50287|47696|43506|
|[oak](https://github.com/oakserver/oak)|27270|28893|27194|25724|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23776|30628|21862|18837|
|[fastify](https://github.com/fastify/fastify)|15669|16368|15457|15181|
|[koa](https://github.com/koajs/koa)|14312|15194|13464|14277|
|[express](https://github.com/expressjs/express)|6241|6383|5902|6438|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67038|83761|63900|53452|
|[nhttp](https://github.com/nhttp/nhttp)|58658|84075|45360|46540|
|[hono](https://github.com/honojs/hono)|56551|67382|57280|44990|
|[baojs](https://github.com/mattreid1/baojs)|33731|38077|31056|32061|
  



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

