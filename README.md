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
Created At : Wed Jun 21 2023, 12:45:34 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49748|53852|48090|47303|
|[hono](https://github.com/honojs/hono)|45165|50705|40202|44587|
|[fastro](https://github.com/fastrodev/fastro)|38809|50276|35861|30289|
|[oak](https://github.com/oakserver/oak)|15127|16265|14841|14274|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|33180|35607|32568|31365|
|[fastify](https://github.com/fastify/fastify)|24999|26098|25250|23649|
|[koa](https://github.com/koajs/koa)|15465|16163|14489|15744|
|[express](https://github.com/expressjs/express)|5349|5610|4755|5681|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|53428|53354|54505|52426|
|[nhttp](https://github.com/nhttp/nhttp)|51777|51930|51092|52310|
|[elysia](https://github.com/elysiajs/elysia)|50624|51007|51088|49777|
|[baojs](https://github.com/mattreid1/baojs)|43394|50284|40985|38912|
  



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

