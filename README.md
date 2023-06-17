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
Created At : Sat Jun 17 2023, 12:42:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56891|61312|56102|53258|
|[hono](https://github.com/honojs/hono)|55586|59848|56493|50416|
|[fastro](https://github.com/fastrodev/fastro)|44245|55960|42307|34468|
|[oak](https://github.com/oakserver/oak)|17539|18593|17685|16339|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36582|39897|36152|33696|
|[fastify](https://github.com/fastify/fastify)|29115|30273|29188|27885|
|[koa](https://github.com/koajs/koa)|18603|19247|17398|19164|
|[express](https://github.com/expressjs/express)|6445|6569|6254|6513|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59464|58286|60445|59660|
|[hono](https://github.com/honojs/hono)|57900|58069|57283|58348|
|[elysia](https://github.com/elysiajs/elysia)|57735|58115|59058|56031|
|[baojs](https://github.com/mattreid1/baojs)|50619|57174|51445|43239|
  



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

