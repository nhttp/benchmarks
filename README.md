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
Created At : Sun Nov 26 2023, 12:40:44 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45878|49082|44666|43887|
|[fast](https://github.com/danteissaias/fast)|45807|49547|44323|43552|
|[hono](https://github.com/honojs/hono)|45279|47732|46224|41881|
|[fastro](https://github.com/fastrodev/fastro)|23555|48384|11465|10815|
|[oak](https://github.com/oakserver/oak)|20869|22020|20900|19688|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26622|31751|24814|23300|
|[fastify](https://github.com/fastify/fastify)|15730|16518|15550|15122|
|[koa](https://github.com/koajs/koa)|14053|14637|13355|14168|
|[express](https://github.com/expressjs/express)|6371|6471|6119|6523|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71604|80655|69771|64387|
|[hono](https://github.com/honojs/hono)|69220|77837|69775|60047|
|[nhttp](https://github.com/nhttp/nhttp)|66581|81055|60667|58020|
|[baojs](https://github.com/mattreid1/baojs)|36064|41059|31838|35295|
  



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

