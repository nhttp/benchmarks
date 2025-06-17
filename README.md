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
Created At : Tue Jun 17 2025, 1:02:51 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58964|63565|59403|53925|
|[nhttp](https://github.com/nhttp/nhttp)|58895|66696|56263|53726|
|[fast](https://github.com/danteissaias/fast)|53335|61302|45444|53260|
|[oak](https://github.com/oakserver/oak)|28430|29558|27086|28647|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40333|45326|39849|35825|
|[fastify](https://github.com/fastify/fastify)|24564|24874|26497|22320|
|[koa](https://github.com/koajs/koa)|16851|17083|16818|16652|
|[express](https://github.com/expressjs/express)|6543|6699|6220|6709|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|85702|101161|77976|77970|
|[nhttp](https://github.com/nhttp/nhttp)|71535|95800|57545|61259|
|[hono](https://github.com/honojs/hono)|63678|70431|63124|57478|
|[baojs](https://github.com/mattreid1/baojs)|47966|52287|46327|45283|
  



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

