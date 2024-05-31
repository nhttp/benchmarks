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
Created At : Fri May 31 2024, 12:40:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48805|52985|47584|45847|
|[hono](https://github.com/honojs/hono)|48741|52151|49573|44499|
|[fast](https://github.com/danteissaias/fast)|47661|51778|44707|46498|
|[oak](https://github.com/oakserver/oak)|27189|28262|26572|26733|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24883|30882|22668|21098|
|[fastify](https://github.com/fastify/fastify)|17074|17484|16924|16813|
|[koa](https://github.com/koajs/koa)|14626|15451|13674|14753|
|[express](https://github.com/expressjs/express)|6432|6516|6220|6559|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70031|84214|72103|53777|
|[hono](https://github.com/honojs/hono)|63019|72169|59961|56926|
|[nhttp](https://github.com/nhttp/nhttp)|61781|84586|52901|47857|
|[baojs](https://github.com/mattreid1/baojs)|37246|45395|35223|31121|
  



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

