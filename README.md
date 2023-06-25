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
Created At : Sun Jun 25 2023, 12:59:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58417|64765|55014|55472|
|[hono](https://github.com/honojs/hono)|55851|59618|57389|50547|
|[fastro](https://github.com/fastrodev/fastro)|43528|52754|40437|37394|
|[oak](https://github.com/oakserver/oak)|17585|18738|17619|16397|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|28095|29300|28099|26886|
|[nhttp](https://github.com/nhttp/nhttp)|19871|19499|20133|19982|
|[koa](https://github.com/koajs/koa)|16411|17461|15259|16512|
|[express](https://github.com/expressjs/express)|5957|6290|5519|6062|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63900|64216|63134|64350|
|[hono](https://github.com/honojs/hono)|61233|58715|61825|63159|
|[elysia](https://github.com/elysiajs/elysia)|61021|61072|61491|60500|
|[baojs](https://github.com/mattreid1/baojs)|51890|57743|46569|51358|
  



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

