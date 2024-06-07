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
Created At : Fri Jun 07 2024, 12:41:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48957|51917|48804|46151|
|[hono](https://github.com/honojs/hono)|48860|51318|49822|45441|
|[fast](https://github.com/danteissaias/fast)|48100|51545|45174|47582|
|[oak](https://github.com/oakserver/oak)|27493|28613|26979|26886|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24662|30454|22743|20788|
|[fastify](https://github.com/fastify/fastify)|17457|18028|17291|17051|
|[koa](https://github.com/koajs/koa)|14806|15987|13709|14721|
|[express](https://github.com/expressjs/express)|6523|6679|6245|6644|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71266|83533|83779|46487|
|[nhttp](https://github.com/nhttp/nhttp)|59998|88661|50454|40880|
|[hono](https://github.com/honojs/hono)|52789|59475|53302|45589|
|[baojs](https://github.com/mattreid1/baojs)|35233|39085|34388|32225|
  



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

