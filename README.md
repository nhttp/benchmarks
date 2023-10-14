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
Created At : Sat Oct 14 2023, 12:34:54 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61929|64020|64041|57725|
|[hono](https://github.com/honojs/hono)|58581|63809|60009|51924|
|[fast](https://github.com/danteissaias/fast)|53564|60847|55077|44768|
|[fastro](https://github.com/fastrodev/fastro)|25153|62200|6514|6745|
|[oak](https://github.com/oakserver/oak)|17719|19240|17797|16120|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39174|42145|38780|36597|
|[fastify](https://github.com/fastify/fastify)|29086|29664|29487|28108|
|[koa](https://github.com/koajs/koa)|19369|19963|18281|19864|
|[express](https://github.com/expressjs/express)|6126|6226|5823|6328|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58824|52276|62097|62100|
|[nhttp](https://github.com/nhttp/nhttp)|58208|55519|59361|59743|
|[elysia](https://github.com/elysiajs/elysia)|55266|53440|51820|60537|
|[baojs](https://github.com/mattreid1/baojs)|49007|56388|50379|40255|
  



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

