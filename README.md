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
Created At : Sun Jun 02 2024, 12:43:10 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49098|53331|48141|45821|
|[hono](https://github.com/honojs/hono)|48837|51840|50003|44668|
|[fast](https://github.com/danteissaias/fast)|47909|52685|44341|46701|
|[oak](https://github.com/oakserver/oak)|27272|28404|26700|26713|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24594|30305|22850|20627|
|[fastify](https://github.com/fastify/fastify)|16710|17049|16545|16537|
|[koa](https://github.com/koajs/koa)|14545|15442|13655|14539|
|[express](https://github.com/expressjs/express)|6327|6497|6016|6469|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|61531|73437|67530|43626|
|[nhttp](https://github.com/nhttp/nhttp)|52209|76867|41114|38647|
|[hono](https://github.com/honojs/hono)|49061|62424|46786|37972|
|[baojs](https://github.com/mattreid1/baojs)|32696|35383|31929|30777|
  



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

