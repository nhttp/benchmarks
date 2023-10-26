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
Created At : Thu Oct 26 2023, 12:35:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41117|43838|41271|38243|
|[hono](https://github.com/honojs/hono)|37258|39260|38125|34388|
|[fast](https://github.com/danteissaias/fast)|32144|37692|33285|25456|
|[fastro](https://github.com/fastrodev/fastro)|16336|39843|4522|4644|
|[oak](https://github.com/oakserver/oak)|10965|11204|11045|10645|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|21792|24264|21982|19130|
|[fastify](https://github.com/fastify/fastify)|14067|14766|13800|13634|
|[koa](https://github.com/koajs/koa)|9900|10299|9469|9933|
|[express](https://github.com/expressjs/express)|3876|4018|3815|3795|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|39522|42956|38926|36683|
|[elysia](https://github.com/elysiajs/elysia)|38849|39838|37822|38888|
|[nhttp](https://github.com/nhttp/nhttp)|35502|40581|32639|33287|
|[baojs](https://github.com/mattreid1/baojs)|23954|27886|22885|21092|
  



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

