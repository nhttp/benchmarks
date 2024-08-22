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
Created At : Thu Aug 22 2024, 12:44:28 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46787|51021|45647|43692|
|[fast](https://github.com/danteissaias/fast)|46244|50662|43542|44529|
|[hono](https://github.com/honojs/hono)|45882|48583|46791|42273|
|[oak](https://github.com/oakserver/oak)|25840|26933|25035|25552|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24260|29944|22632|20203|
|[fastify](https://github.com/fastify/fastify)|16448|16888|16247|16208|
|[koa](https://github.com/koajs/koa)|13710|14507|12820|13804|
|[express](https://github.com/expressjs/express)|6288|6507|5900|6456|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|63343|70915|65875|53239|
|[hono](https://github.com/honojs/hono)|58762|68920|56624|50742|
|[nhttp](https://github.com/nhttp/nhttp)|57526|77198|49207|46174|
|[baojs](https://github.com/mattreid1/baojs)|33815|38427|30922|32096|
  



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

