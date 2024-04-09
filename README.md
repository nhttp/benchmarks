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
Created At : Tue Apr 09 2024, 12:37:25 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47863|51057|44629|47902|
|[nhttp](https://github.com/nhttp/nhttp)|47818|51084|46798|45572|
|[hono](https://github.com/honojs/hono)|47725|49980|48145|45050|
|[oak](https://github.com/oakserver/oak)|27244|29089|27224|25419|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25074|31496|22871|20854|
|[fastify](https://github.com/fastify/fastify)|16696|17204|16597|16287|
|[koa](https://github.com/koajs/koa)|14434|15109|13454|14740|
|[express](https://github.com/expressjs/express)|6395|6431|6185|6570|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75494|81482|76755|68244|
|[nhttp](https://github.com/nhttp/nhttp)|65587|86287|58534|51940|
|[hono](https://github.com/honojs/hono)|63709|74056|65721|51350|
|[baojs](https://github.com/mattreid1/baojs)|38264|44000|35236|35556|
  



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

