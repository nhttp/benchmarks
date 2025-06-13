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
Created At : Fri Jun 13 2025, 1:03:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|57486|58464|60352|53642|
|[nhttp](https://github.com/nhttp/nhttp)|56831|64977|56562|48953|
|[fast](https://github.com/danteissaias/fast)|54192|62975|45638|53962|
|[oak](https://github.com/oakserver/oak)|28918|29739|28315|28699|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38269|47223|35009|32576|
|[fastify](https://github.com/fastify/fastify)|26142|26651|27440|24336|
|[koa](https://github.com/koajs/koa)|17220|17900|17190|16571|
|[express](https://github.com/expressjs/express)|6518|6603|6337|6613|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80377|88489|74568|78075|
|[nhttp](https://github.com/nhttp/nhttp)|69426|89749|59497|59033|
|[hono](https://github.com/honojs/hono)|61941|72196|58090|55536|
|[baojs](https://github.com/mattreid1/baojs)|46820|53356|43547|43558|
  



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

