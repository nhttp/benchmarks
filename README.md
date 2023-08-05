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
Created At : Sat Aug 05 2023, 12:41:05 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|55217|58206|54954|52491|
|[hono](https://github.com/honojs/hono)|54540|58946|55336|49337|
|[fastro](https://github.com/fastrodev/fastro)|20390|51369|5201|4601|
|[oak](https://github.com/oakserver/oak)|16598|17462|16688|15643|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36754|39439|36386|34437|
|[fastify](https://github.com/fastify/fastify)|28471|29549|28386|27478|
|[koa](https://github.com/koajs/koa)|18455|19589|17240|18535|
|[express](https://github.com/expressjs/express)|6219|6401|5814|6442|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|61784|58796|63371|63186|
|[elysia](https://github.com/elysiajs/elysia)|59919|57845|59370|62542|
|[nhttp](https://github.com/nhttp/nhttp)|59778|64551|53511|61273|
|[baojs](https://github.com/mattreid1/baojs)|48425|54878|49665|40733|
  



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

