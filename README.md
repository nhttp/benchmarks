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
Created At : Tue Sep 24 2024, 12:49:44 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47232|50875|47309|43512|
|[hono](https://github.com/honojs/hono)|46908|49968|48203|42552|
|[fast](https://github.com/danteissaias/fast)|46496|50504|43192|45791|
|[oak](https://github.com/oakserver/oak)|25928|26886|25327|25572|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24056|30400|21636|20131|
|[fastify](https://github.com/fastify/fastify)|16663|17126|16547|16315|
|[koa](https://github.com/koajs/koa)|13391|14135|12515|13523|
|[express](https://github.com/expressjs/express)|6119|6240|5782|6336|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|64821|80388|68964|45111|
|[nhttp](https://github.com/nhttp/nhttp)|54090|81093|38001|43175|
|[hono](https://github.com/honojs/hono)|48665|58560|49346|38088|
|[baojs](https://github.com/mattreid1/baojs)|34190|39256|34168|29146|
  



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

