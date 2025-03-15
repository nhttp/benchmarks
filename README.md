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
Created At : Sat Mar 15 2025, 12:52:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59497|70440|55948|52102|
|[hono](https://github.com/honojs/hono)|57697|59465|62637|50989|
|[fast](https://github.com/danteissaias/fast)|56897|69585|53103|48002|
|[oak](https://github.com/oakserver/oak)|28362|29754|28185|27146|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40397|47846|38983|34361|
|[fastify](https://github.com/fastify/fastify)|24510|24308|24493|24730|
|[koa](https://github.com/koajs/koa)|16925|18125|15616|17033|
|[express](https://github.com/expressjs/express)|7112|7342|6582|7412|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79563|91574|81194|65922|
|[hono](https://github.com/honojs/hono)|71420|81678|67516|65065|
|[nhttp](https://github.com/nhttp/nhttp)|70096|89317|59041|61931|
|[baojs](https://github.com/mattreid1/baojs)|49187|54370|44626|48564|
  



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

