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
Created At : Tue May 30 2023, 12:31:06 PM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44859|48754|44085|41737|
|[hono](https://github.com/honojs/hono)|44153|46615|46548|39295|
|[fast](https://github.com/danteissaias/fast)|42383|47846|38424|40878|
|[fastro](https://github.com/fastrodev/fastro)|35935|44294|38145|25367|
|[oak](https://github.com/oakserver/oak)|14361|15974|12943|14166|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|31439|34389|30191|29738|
|[fastify](https://github.com/fastify/fastify)|22041|24895|21601|19627|
|[koa](https://github.com/koajs/koa)|15891|16590|15085|15998|
|[express](https://github.com/expressjs/express)|5527|5611|5304|5665|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|53491|53061|53722|53689|
|[elysia](https://github.com/elysiajs/elysia)|51664|51230|52000|51762|
|[nhttp](https://github.com/nhttp/nhttp)|49281|53709|53709|40426|
|[baojs](https://github.com/mattreid1/baojs)|47751|50721|45339|47193|
  



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

