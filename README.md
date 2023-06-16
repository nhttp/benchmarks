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
Created At : Fri Jun 16 2023, 12:46:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastro](https://github.com/fastrodev/fastro)|46803|60780|40769|38861|
|[oak](https://github.com/oakserver/oak)|18234|19137|18567|16998|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42651|46005|42794|39155|
|[fastify](https://github.com/fastify/fastify)|33646|34508|33313|33118|
|[koa](https://github.com/koajs/koa)|20466|22272|18131|20996|
|[express](https://github.com/expressjs/express)|7361|7399|6827|7856|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|65240|65447|65285|64988|
|[hono](https://github.com/honojs/hono)|63397|65672|62242|62276|
|[elysia](https://github.com/elysiajs/elysia)|62892|61105|63808|63764|
|[baojs](https://github.com/mattreid1/baojs)|50568|58043|42997|50665|
  



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

