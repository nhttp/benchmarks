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
Created At : Thu Jun 12 2025, 1:02:11 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59267|65168|57135|55497|
|[hono](https://github.com/honojs/hono)|58919|63432|60385|52939|
|[fast](https://github.com/danteissaias/fast)|55283|64994|45953|54902|
|[oak](https://github.com/oakserver/oak)|27649|28484|26889|27573|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39650|47737|37949|33264|
|[fastify](https://github.com/fastify/fastify)|25096|25371|26499|23419|
|[koa](https://github.com/koajs/koa)|17138|17653|17225|16537|
|[express](https://github.com/expressjs/express)|6437|6535|6128|6647|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|87126|96671|86373|78335|
|[nhttp](https://github.com/nhttp/nhttp)|67196|86455|58596|56536|
|[hono](https://github.com/honojs/hono)|59697|66967|57252|54871|
|[baojs](https://github.com/mattreid1/baojs)|47164|51801|42561|47130|
  



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

