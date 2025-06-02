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
Created At : Mon Jun 02 2025, 1:06:56 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57398|61948|57032|53213|
|[hono](https://github.com/honojs/hono)|57259|62251|58467|51058|
|[fast](https://github.com/danteissaias/fast)|54593|61574|47790|54414|
|[oak](https://github.com/oakserver/oak)|28113|29554|28740|26044|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40257|45277|37828|37667|
|[fastify](https://github.com/fastify/fastify)|24513|24841|25205|23493|
|[koa](https://github.com/koajs/koa)|17494|18189|17031|17261|
|[express](https://github.com/expressjs/express)|6599|6690|6290|6817|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|81246|95658|71936|76143|
|[nhttp](https://github.com/nhttp/nhttp)|65522|83241|57202|56123|
|[hono](https://github.com/honojs/hono)|63785|76988|57996|56372|
|[baojs](https://github.com/mattreid1/baojs)|45601|50971|42970|42863|
  



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

