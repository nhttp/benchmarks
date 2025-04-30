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
Created At : Wed Apr 30 2025, 12:59:30 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57501|70722|53882|47899|
|[hono](https://github.com/honojs/hono)|55787|61584|56546|49230|
|[fast](https://github.com/danteissaias/fast)|54585|63521|48673|51562|
|[oak](https://github.com/oakserver/oak)|28354|28704|27683|28675|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38211|45095|37183|32356|
|[fastify](https://github.com/fastify/fastify)|25288|25222|26950|23693|
|[koa](https://github.com/koajs/koa)|16755|17248|16484|16534|
|[express](https://github.com/expressjs/express)|6577|6687|6437|6607|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79542|91797|76546|70283|
|[nhttp](https://github.com/nhttp/nhttp)|72206|97488|58000|61130|
|[hono](https://github.com/honojs/hono)|67798|75302|63394|64697|
|[baojs](https://github.com/mattreid1/baojs)|49344|55375|48893|43765|
  



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

