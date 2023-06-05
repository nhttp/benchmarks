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
Created At : Mon Jun 05 2023, 12:46:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|53520|58260|52045|50255|
|[hono](https://github.com/honojs/hono)|50340|56080|52933|42006|
|[fast](https://github.com/danteissaias/fast)|48735|56735|49136|40334|
|[fastro](https://github.com/fastrodev/fastro)|43053|53214|45026|30920|
|[oak](https://github.com/oakserver/oak)|17987|19116|17855|16990|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39033|42283|38765|36052|
|[fastify](https://github.com/fastify/fastify)|30109|30946|29988|29392|
|[koa](https://github.com/koajs/koa)|18850|19870|17563|19118|
|[express](https://github.com/expressjs/express)|6578|6728|6249|6757|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63281|63547|63499|62797|
|[hono](https://github.com/honojs/hono)|62103|60212|62403|63695|
|[elysia](https://github.com/elysiajs/elysia)|61006|60004|60933|62080|
|[baojs](https://github.com/mattreid1/baojs)|54366|59865|56502|46731|
  



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

