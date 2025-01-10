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
Created At : Fri Jan 10 2025, 12:52:08 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46231|50147|45160|43385|
|[hono](https://github.com/honojs/hono)|45993|48840|47041|42097|
|[fast](https://github.com/danteissaias/fast)|45028|49412|42007|43666|
|[oak](https://github.com/oakserver/oak)|25135|26043|24686|24676|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26618|35624|23421|20808|
|[fastify](https://github.com/fastify/fastify)|16735|17110|16665|16429|
|[koa](https://github.com/koajs/koa)|13956|14844|12839|14184|
|[express](https://github.com/expressjs/express)|6260|6389|5854|6537|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|62260|76786|60558|49435|
|[nhttp](https://github.com/nhttp/nhttp)|49198|76550|33687|37358|
|[hono](https://github.com/honojs/hono)|46592|60273|41357|38145|
|[baojs](https://github.com/mattreid1/baojs)|31156|34548|31804|27116|
  



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

