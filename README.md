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
Created At : Sat Apr 13 2024, 12:31:40 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48361|51615|44627|48840|
|[nhttp](https://github.com/nhttp/nhttp)|47962|51485|46470|45932|
|[hono](https://github.com/honojs/hono)|47198|49596|47425|44574|
|[oak](https://github.com/oakserver/oak)|27461|29105|27443|25835|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24691|31673|22566|19833|
|[fastify](https://github.com/fastify/fastify)|16165|16725|16036|15733|
|[koa](https://github.com/koajs/koa)|14334|15041|13537|14423|
|[express](https://github.com/expressjs/express)|6453|6489|6228|6641|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75511|81972|79653|64909|
|[hono](https://github.com/honojs/hono)|65240|69020|66756|59944|
|[nhttp](https://github.com/nhttp/nhttp)|63819|85511|56928|49019|
|[baojs](https://github.com/mattreid1/baojs)|35559|40879|33462|32336|
  



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

