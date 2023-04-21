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
Created At : Fri Apr 21 2023, 12:39:07 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39336|41002|39629|37376|
|[hono](https://github.com/honojs/hono)|37101|39433|37637|34232|
|[fast](https://github.com/danteissaias/fast)|35280|38641|33254|33946|
|[fastro](https://github.com/fastrodev/fastro)|31260|37010|32737|24034|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37795|40855|37341|35188|
|[fastify](https://github.com/fastify/fastify)|29895|31641|29613|28432|
|[koa](https://github.com/koajs/koa)|18771|19934|17329|19051|
|[express](https://github.com/expressjs/express)|6317|6617|5887|6447|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63527|61996|66294|62290|
|[elysia](https://github.com/elysiajs/elysia)|59125|58475|59293|59606|
|[hono](https://github.com/honojs/hono)|58596|56789|57713|61287|
|[baojs](https://github.com/mattreid1/baojs)|52492|59670|43052|54754|
  



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

