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
Created At : Sun Sep 17 2023, 12:37:54 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57490|62519|57091|52859|
|[hono](https://github.com/honojs/hono)|53804|58258|54802|48351|
|[fast](https://github.com/danteissaias/fast)|51893|61190|51579|42910|
|[fastro](https://github.com/fastrodev/fastro)|23418|58101|6339|5815|
|[oak](https://github.com/oakserver/oak)|17094|17984|17103|16196|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38715|41357|38596|36193|
|[fastify](https://github.com/fastify/fastify)|29632|30988|29951|27957|
|[koa](https://github.com/koajs/koa)|18699|19724|17551|18823|
|[express](https://github.com/expressjs/express)|6317|6423|5981|6547|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60913|59653|62169|60918|
|[hono](https://github.com/honojs/hono)|59630|57495|62570|58824|
|[elysia](https://github.com/elysiajs/elysia)|59139|57780|58312|61325|
|[baojs](https://github.com/mattreid1/baojs)|46985|53504|47921|39529|
  



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

