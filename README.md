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
Created At : Mon Jan 06 2025, 12:53:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46729|50695|45980|43513|
|[hono](https://github.com/honojs/hono)|46107|48509|47285|42528|
|[fast](https://github.com/danteissaias/fast)|45880|50645|42436|44558|
|[oak](https://github.com/oakserver/oak)|25443|26268|25011|25051|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26288|34273|23232|21360|
|[fastify](https://github.com/fastify/fastify)|17232|17805|17106|16785|
|[koa](https://github.com/koajs/koa)|14248|15335|13039|14369|
|[express](https://github.com/expressjs/express)|6362|6624|5969|6494|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68960|80481|66512|59886|
|[hono](https://github.com/honojs/hono)|54242|67050|48568|47109|
|[nhttp](https://github.com/nhttp/nhttp)|54104|82344|41898|38070|
|[baojs](https://github.com/mattreid1/baojs)|35396|41409|34633|30147|
  



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

