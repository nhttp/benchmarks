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
Created At : Thu Jul 06 2023, 12:54:31 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|30821|31449|30928|30086|
|[hono](https://github.com/honojs/hono)|29837|30919|31005|27587|
|[fastro](https://github.com/fastrodev/fastro)|24106|31150|20428|20741|
|[oak](https://github.com/oakserver/oak)|9666|10273|9979|8745|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|12192|12464|12286|11825|
|[nhttp](https://github.com/nhttp/nhttp)|9723|9572|9692|9905|
|[koa](https://github.com/koajs/koa)|7863|7545|7611|8434|
|[express](https://github.com/expressjs/express)|3273|3391|2981|3446|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36568|38186|35700|35817|
|[elysia](https://github.com/elysiajs/elysia)|34718|35487|36116|32550|
|[hono](https://github.com/honojs/hono)|33256|34976|35069|29724|
|[baojs](https://github.com/mattreid1/baojs)|27746|31358|22701|29180|
  



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

