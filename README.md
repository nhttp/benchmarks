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
Created At : Tue Feb 06 2024, 12:36:13 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48114|52789|46590|44962|
|[hono](https://github.com/honojs/hono)|46954|49313|48390|43159|
|[fast](https://github.com/danteissaias/fast)|46924|52241|43346|45186|
|[oak](https://github.com/oakserver/oak)|27155|28342|27329|25793|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25290|32722|23198|19949|
|[fastify](https://github.com/fastify/fastify)|16121|16394|16070|15898|
|[koa](https://github.com/koajs/koa)|14436|15265|13611|14433|
|[express](https://github.com/expressjs/express)|6413|6518|6168|6552|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72047|81734|75477|58931|
|[hono](https://github.com/honojs/hono)|58182|67619|58518|48409|
|[nhttp](https://github.com/nhttp/nhttp)|53654|72166|47525|41272|
|[baojs](https://github.com/mattreid1/baojs)|36950|42413|36695|31742|
  



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

