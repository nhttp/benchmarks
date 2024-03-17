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
Created At : Sun Mar 17 2024, 12:39:23 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|49587|54047|45862|48851|
|[nhttp](https://github.com/nhttp/nhttp)|48733|52029|47544|46625|
|[hono](https://github.com/honojs/hono)|47684|50211|48030|44812|
|[oak](https://github.com/oakserver/oak)|27467|28959|27559|25884|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24998|31160|23151|20683|
|[fastify](https://github.com/fastify/fastify)|16761|17262|16596|16424|
|[koa](https://github.com/koajs/koa)|13608|14198|13105|13520|
|[express](https://github.com/expressjs/express)|6466|6609|6173|6615|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|81055|82174|82707|78283|
|[nhttp](https://github.com/nhttp/nhttp)|65351|88335|57737|49980|
|[hono](https://github.com/honojs/hono)|57383|63539|59347|49264|
|[baojs](https://github.com/mattreid1/baojs)|37484|43478|36090|32883|
  



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

