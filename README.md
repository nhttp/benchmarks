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
Created At : Fri Nov 24 2023, 12:37:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45728|48605|44816|43762|
|[fast](https://github.com/danteissaias/fast)|45434|49040|41853|45410|
|[hono](https://github.com/honojs/hono)|44062|47014|44403|40770|
|[oak](https://github.com/oakserver/oak)|21055|22297|20864|20004|
|[fastro](https://github.com/fastrodev/fastro)|0|0|0|0|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26677|32413|24375|23242|
|[fastify](https://github.com/fastify/fastify)|15732|16047|15565|15583|
|[koa](https://github.com/koajs/koa)|14397|14715|13779|14698|
|[express](https://github.com/expressjs/express)|6365|6527|6065|6502|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71774|80281|70612|64430|
|[nhttp](https://github.com/nhttp/nhttp)|67542|78867|63447|60312|
|[hono](https://github.com/honojs/hono)|65711|73362|64961|58809|
|[baojs](https://github.com/mattreid1/baojs)|35972|40273|34562|33082|
  



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

