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
Created At : Tue Jul 02 2024, 12:41:25 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48983|53173|47806|45971|
|[fast](https://github.com/danteissaias/fast)|48483|52376|44484|48590|
|[hono](https://github.com/honojs/hono)|48219|51284|49296|44078|
|[oak](https://github.com/oakserver/oak)|27040|28039|26490|26592|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24188|29622|22429|20512|
|[fastify](https://github.com/fastify/fastify)|17066|17582|16875|16741|
|[koa](https://github.com/koajs/koa)|14644|15474|13692|14766|
|[express](https://github.com/expressjs/express)|6348|6499|6043|6503|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71997|84188|78013|53790|
|[hono](https://github.com/honojs/hono)|58068|69913|56203|48088|
|[nhttp](https://github.com/nhttp/nhttp)|57364|81869|48086|42137|
|[baojs](https://github.com/mattreid1/baojs)|35979|41045|32642|34249|
  



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

