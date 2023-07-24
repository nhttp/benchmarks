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
Created At : Mon Jul 24 2023, 12:44:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|35154|37475|34494|33494|
|[hono](https://github.com/honojs/hono)|34657|37326|34505|32141|
|[fastro](https://github.com/fastrodev/fastro)|13779|34374|3315|3648|
|[oak](https://github.com/oakserver/oak)|9543|10095|9468|9066|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|20162|21999|19752|18735|
|[fastify](https://github.com/fastify/fastify)|14094|14831|13930|13520|
|[koa](https://github.com/koajs/koa)|9251|9399|8926|9429|
|[express](https://github.com/expressjs/express)|3813|3934|3435|4071|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41692|43001|41003|41071|
|[hono](https://github.com/honojs/hono)|38541|40382|38547|36694|
|[elysia](https://github.com/elysiajs/elysia)|38533|38214|39497|37887|
|[baojs](https://github.com/mattreid1/baojs)|31588|35488|25979|33297|
  



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

