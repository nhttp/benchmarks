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
Created At : Sat Sep 07 2024, 12:44:51 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48866|53317|48122|45160|
|[hono](https://github.com/honojs/hono)|47801|51333|48536|43535|
|[fast](https://github.com/danteissaias/fast)|47427|51006|45210|46066|
|[oak](https://github.com/oakserver/oak)|25560|26487|25090|25102|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25253|31936|22873|20950|
|[fastify](https://github.com/fastify/fastify)|16565|17052|16434|16209|
|[koa](https://github.com/koajs/koa)|13909|14721|13049|13958|
|[express](https://github.com/expressjs/express)|6302|6464|5979|6464|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73924|80794|77521|63457|
|[nhttp](https://github.com/nhttp/nhttp)|63356|78598|53915|57556|
|[hono](https://github.com/honojs/hono)|62220|75198|63596|47867|
|[baojs](https://github.com/mattreid1/baojs)|38205|43847|37592|33177|
  



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

