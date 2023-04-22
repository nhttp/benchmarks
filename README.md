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
Created At : Sat Apr 22 2023, 12:39:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38727|41299|37979|36903|
|[hono](https://github.com/honojs/hono)|35948|38765|35224|33855|
|[fast](https://github.com/danteissaias/fast)|35005|39733|30128|35155|
|[fastro](https://github.com/fastrodev/fastro)|31934|37293|32394|26115|
|[oak](https://github.com/oakserver/oak)|16719|18776|17570|13811|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|28325|38513|35136|11327|
|[fastify](https://github.com/fastify/fastify)|28271|29500|27996|27316|
|[koa](https://github.com/koajs/koa)|15987|18936|16777|12249|
|[express](https://github.com/expressjs/express)|5745|6247|5636|5353|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63888|63451|65745|62467|
|[hono](https://github.com/honojs/hono)|60301|59020|60225|61658|
|[elysia](https://github.com/elysiajs/elysia)|28194|32171|27890|24521|
|[baojs](https://github.com/mattreid1/baojs)|21371|23600|21675|18839|
  



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

