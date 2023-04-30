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
Created At : Sun Apr 30 2023, 12:43:13 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|34250|37751|33874|31126|
|[fast](https://github.com/danteissaias/fast)|31273|37097|32360|24362|
|[hono](https://github.com/honojs/hono)|29052|32136|29546|25475|
|[fastro](https://github.com/fastrodev/fastro)|27801|34190|28737|20477|
|[oak](https://github.com/oakserver/oak)|9648|10295|9537|9113|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|17747|20594|16978|15669|
|[fastify](https://github.com/fastify/fastify)|12290|12540|12261|12068|
|[koa](https://github.com/koajs/koa)|8826|9242|8442|8795|
|[express](https://github.com/expressjs/express)|3632|3832|3402|3662|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46079|45459|48066|44711|
|[elysia](https://github.com/elysiajs/elysia)|42139|41820|44242|40355|
|[hono](https://github.com/honojs/hono)|40449|43333|40367|37646|
|[baojs](https://github.com/mattreid1/baojs)|35759|39938|35315|32024|
  



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

