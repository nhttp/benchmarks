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
Created At : Sun Jul 02 2023, 12:54:38 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|32068|34343|31376|30484|
|[hono](https://github.com/honojs/hono)|30931|32160|31935|28697|
|[fastro](https://github.com/fastrodev/fastro)|25241|32869|25025|17830|
|[oak](https://github.com/oakserver/oak)|8948|9943|8567|8333|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|11747|12244|11432|11565|
|[nhttp](https://github.com/nhttp/nhttp)|9348|9557|9101|9385|
|[koa](https://github.com/koajs/koa)|7674|7775|7222|8026|
|[express](https://github.com/expressjs/express)|3066|3242|2687|3270|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36909|39518|34917|36291|
|[elysia](https://github.com/elysiajs/elysia)|34659|35465|34221|34291|
|[hono](https://github.com/honojs/hono)|33245|35339|33488|30907|
|[baojs](https://github.com/mattreid1/baojs)|29360|33416|26786|27879|
  



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

