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
Created At : Wed Sep 25 2024, 12:50:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|45896|49585|46509|41595|
|[fast](https://github.com/danteissaias/fast)|45400|49830|42181|44189|
|[nhttp](https://github.com/nhttp/nhttp)|44798|47688|45599|41106|
|[oak](https://github.com/oakserver/oak)|24955|25873|24655|24338|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24252|29355|22776|20626|
|[fastify](https://github.com/fastify/fastify)|16639|16989|16564|16363|
|[koa](https://github.com/koajs/koa)|13032|13729|12230|13138|
|[express](https://github.com/expressjs/express)|5934|6102|5567|6134|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|61470|76055|64727|43629|
|[nhttp](https://github.com/nhttp/nhttp)|49560|77936|35140|35604|
|[hono](https://github.com/honojs/hono)|49485|60867|45711|41878|
|[baojs](https://github.com/mattreid1/baojs)|31432|32439|31899|29958|
  



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

