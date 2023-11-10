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
Created At : Fri Nov 10 2023, 12:36:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43604|47480|44011|39322|
|[hono](https://github.com/honojs/hono)|37649|39138|38028|35782|
|[fast](https://github.com/danteissaias/fast)|33772|39737|36113|25465|
|[fastro](https://github.com/fastrodev/fastro)|17396|42404|5227|4557|
|[oak](https://github.com/oakserver/oak)|12436|13071|12238|11999|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|22041|25847|21972|18305|
|[fastify](https://github.com/fastify/fastify)|13555|14238|13249|13179|
|[koa](https://github.com/koajs/koa)|10099|10538|9475|10285|
|[express](https://github.com/expressjs/express)|4035|4037|3901|4167|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|43616|51004|42780|37063|
|[elysia](https://github.com/elysiajs/elysia)|42974|46579|43583|38760|
|[nhttp](https://github.com/nhttp/nhttp)|37933|43079|35045|35676|
|[baojs](https://github.com/mattreid1/baojs)|29538|34066|27342|27205|
  



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

