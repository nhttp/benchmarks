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
Created At : Sat Sep 02 2023, 12:33:44 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|35312|37351|35740|32846|
|[nhttp](https://github.com/nhttp/nhttp)|35175|38607|34237|32681|
|[fast](https://github.com/danteissaias/fast)|31085|38429|28403|26424|
|[fastro](https://github.com/fastrodev/fastro)|15273|38159|3853|3808|
|[oak](https://github.com/oakserver/oak)|10380|10762|10435|9943|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|19688|21278|19528|18259|
|[fastify](https://github.com/fastify/fastify)|14121|14293|14069|14002|
|[koa](https://github.com/koajs/koa)|9184|9594|8579|9380|
|[express](https://github.com/expressjs/express)|3767|3895|3438|3969|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|39769|41404|41207|36695|
|[hono](https://github.com/honojs/hono)|38042|42638|36628|34859|
|[nhttp](https://github.com/nhttp/nhttp)|37054|44101|35622|31439|
|[baojs](https://github.com/mattreid1/baojs)|22682|26557|18210|23278|
  



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

