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
Created At : Wed Jan 24 2024, 12:39:50 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47642|51139|44557|47231|
|[nhttp](https://github.com/nhttp/nhttp)|47575|50814|46876|45034|
|[hono](https://github.com/honojs/hono)|46710|49180|46986|43964|
|[fastro](https://github.com/fastrodev/fastro)|23930|49343|11355|11093|
|[oak](https://github.com/oakserver/oak)|22333|23665|22200|21133|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24542|31102|22694|19829|
|[fastify](https://github.com/fastify/fastify)|16663|16956|16769|16265|
|[koa](https://github.com/koajs/koa)|14340|15087|13517|14417|
|[express](https://github.com/expressjs/express)|6361|6462|6070|6552|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73794|81164|74944|65274|
|[nhttp](https://github.com/nhttp/nhttp)|62295|86734|49596|50556|
|[hono](https://github.com/honojs/hono)|56260|71719|53302|43760|
|[baojs](https://github.com/mattreid1/baojs)|32994|37793|32292|28897|
  



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

