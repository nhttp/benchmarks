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
Created At : Sun Sep 08 2024, 12:51:16 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47949|51864|46864|45119|
|[hono](https://github.com/honojs/hono)|47644|50429|48857|43646|
|[fast](https://github.com/danteissaias/fast)|47486|51443|43983|47033|
|[oak](https://github.com/oakserver/oak)|26383|27236|25901|26013|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24752|30775|22531|20950|
|[fastify](https://github.com/fastify/fastify)|16592|17050|16548|16177|
|[koa](https://github.com/koajs/koa)|14115|14994|13016|14336|
|[express](https://github.com/expressjs/express)|6380|6513|6113|6513|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71821|79790|78252|57422|
|[hono](https://github.com/honojs/hono)|65558|78326|63178|55170|
|[nhttp](https://github.com/nhttp/nhttp)|62288|80123|52606|54134|
|[baojs](https://github.com/mattreid1/baojs)|37425|45934|34815|31527|
  



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

