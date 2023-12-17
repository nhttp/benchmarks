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
Created At : Sun Dec 17 2023, 12:41:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|46851|49997|42305|48250|
|[nhttp](https://github.com/nhttp/nhttp)|46274|50009|44651|44162|
|[hono](https://github.com/honojs/hono)|44777|46668|45975|41688|
|[fastro](https://github.com/fastrodev/fastro)|23887|48788|11564|11308|
|[oak](https://github.com/oakserver/oak)|20518|21849|20436|19269|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26226|33073|23893|21712|
|[fastify](https://github.com/fastify/fastify)|15732|16324|15670|15202|
|[koa](https://github.com/koajs/koa)|14647|14720|14091|15129|
|[express](https://github.com/expressjs/express)|6469|6612|6209|6585|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|66221|79681|59308|59675|
|[nhttp](https://github.com/nhttp/nhttp)|65503|81837|58862|55810|
|[hono](https://github.com/honojs/hono)|60470|76579|56934|47897|
|[baojs](https://github.com/mattreid1/baojs)|38039|46111|33119|34886|
  



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

