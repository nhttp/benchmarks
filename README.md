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
Created At : Mon Dec 30 2024, 12:52:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48675|53419|47742|44863|
|[fast](https://github.com/danteissaias/fast)|48359|52820|44753|47504|
|[hono](https://github.com/honojs/hono)|48334|51613|48561|44829|
|[oak](https://github.com/oakserver/oak)|26330|27300|25825|25865|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24935|30886|23009|20911|
|[fastify](https://github.com/fastify/fastify)|17220|17572|17179|16910|
|[koa](https://github.com/koajs/koa)|14125|15163|13131|14081|
|[express](https://github.com/expressjs/express)|6402|6604|5985|6618|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76093|82031|75551|70697|
|[nhttp](https://github.com/nhttp/nhttp)|62054|83480|50630|52053|
|[hono](https://github.com/honojs/hono)|61123|75658|52516|55196|
|[baojs](https://github.com/mattreid1/baojs)|37666|47665|33467|31867|
  



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

