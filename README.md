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
Created At : Fri Sep 22 2023, 12:36:01 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49282|53285|48683|45878|
|[hono](https://github.com/honojs/hono)|45879|48740|47334|41562|
|[fast](https://github.com/danteissaias/fast)|44175|54016|33113|45396|
|[fastro](https://github.com/fastrodev/fastro)|19969|49815|5214|4877|
|[oak](https://github.com/oakserver/oak)|15636|16900|14918|15091|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|33262|36271|33499|30016|
|[fastify](https://github.com/fastify/fastify)|24926|25116|25363|24298|
|[koa](https://github.com/koajs/koa)|15753|16603|14565|16092|
|[express](https://github.com/expressjs/express)|5129|5357|4675|5354|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|52496|53258|54157|50073|
|[nhttp](https://github.com/nhttp/nhttp)|50035|48852|51138|50116|
|[elysia](https://github.com/elysiajs/elysia)|49449|48079|47830|52439|
|[baojs](https://github.com/mattreid1/baojs)|36960|43752|28305|38824|
  



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

