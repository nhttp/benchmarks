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
Created At : Fri Mar 08 2024, 12:36:28 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48385|53030|44914|47212|
|[nhttp](https://github.com/nhttp/nhttp)|48312|53094|46635|45207|
|[hono](https://github.com/honojs/hono)|46620|49382|47407|43070|
|[oak](https://github.com/oakserver/oak)|26898|28452|26905|25337|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24389|30875|22569|19724|
|[fastify](https://github.com/fastify/fastify)|16139|16199|16148|16071|
|[koa](https://github.com/koajs/koa)|14240|14890|13651|14178|
|[express](https://github.com/expressjs/express)|6310|6428|6005|6497|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72058|88159|71662|56354|
|[hono](https://github.com/honojs/hono)|60753|75362|56693|50203|
|[nhttp](https://github.com/nhttp/nhttp)|56550|86009|38381|45261|
|[baojs](https://github.com/mattreid1/baojs)|33531|38477|33094|29021|
  



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

