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
Created At : Sun Mar 30 2025, 12:58:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60267|69072|58263|53467|
|[hono](https://github.com/honojs/hono)|60116|66827|61475|52047|
|[fast](https://github.com/danteissaias/fast)|55585|62331|48685|55739|
|[oak](https://github.com/oakserver/oak)|28221|28926|28655|27081|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38709|45349|37926|32852|
|[fastify](https://github.com/fastify/fastify)|26380|26652|27835|24654|
|[koa](https://github.com/koajs/koa)|17604|18762|16483|17566|
|[express](https://github.com/expressjs/express)|7084|7297|6663|7293|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78359|89251|81908|63917|
|[nhttp](https://github.com/nhttp/nhttp)|71206|96070|55666|61883|
|[hono](https://github.com/honojs/hono)|67639|77290|62536|63090|
|[baojs](https://github.com/mattreid1/baojs)|50019|54714|48876|46466|
  



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

