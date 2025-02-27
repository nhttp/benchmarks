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
Created At : Thu Feb 27 2025, 12:51:54 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58140|61795|57484|55142|
|[hono](https://github.com/honojs/hono)|55161|56220|57781|51483|
|[fast](https://github.com/danteissaias/fast)|53464|60749|50269|49375|
|[oak](https://github.com/oakserver/oak)|28829|29570|27458|29459|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40709|48487|38355|35284|
|[fastify](https://github.com/fastify/fastify)|26372|27344|26831|24941|
|[koa](https://github.com/koajs/koa)|17168|18907|15648|16949|
|[express](https://github.com/expressjs/express)|6994|7168|6426|7389|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|81311|96473|78552|68907|
|[nhttp](https://github.com/nhttp/nhttp)|70829|98008|56819|57659|
|[hono](https://github.com/honojs/hono)|68731|76434|65995|63765|
|[baojs](https://github.com/mattreid1/baojs)|50756|56209|47740|48318|
  



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

