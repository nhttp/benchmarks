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
Created At : Sat Oct 19 2024, 12:49:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48828|52566|48081|45836|
|[fast](https://github.com/danteissaias/fast)|48584|52564|44780|48408|
|[hono](https://github.com/honojs/hono)|47518|51057|47903|43595|
|[oak](https://github.com/oakserver/oak)|26137|27223|25516|25673|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24268|30552|21988|20263|
|[fastify](https://github.com/fastify/fastify)|16709|17300|16468|16359|
|[koa](https://github.com/koajs/koa)|13773|14435|12958|13925|
|[express](https://github.com/expressjs/express)|6297|6498|5891|6503|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75366|79965|79050|67083|
|[nhttp](https://github.com/nhttp/nhttp)|63134|79086|54965|55352|
|[hono](https://github.com/honojs/hono)|59806|71865|51531|56023|
|[baojs](https://github.com/mattreid1/baojs)|35205|39922|33375|32317|
  



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

