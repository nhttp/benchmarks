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
Created At : Sat Oct 28 2023, 12:34:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61780|63990|63592|57759|
|[hono](https://github.com/honojs/hono)|59333|64534|61270|52196|
|[fast](https://github.com/danteissaias/fast)|53896|63036|39956|58697|
|[fastro](https://github.com/fastrodev/fastro)|25898|63946|6715|7034|
|[oak](https://github.com/oakserver/oak)|18249|19062|18216|17468|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39249|42647|38833|36266|
|[fastify](https://github.com/fastify/fastify)|28519|30134|28390|27032|
|[koa](https://github.com/koajs/koa)|19303|20388|18075|19446|
|[express](https://github.com/expressjs/express)|6233|6374|5723|6602|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58971|54501|61254|61159|
|[hono](https://github.com/honojs/hono)|56149|51637|54227|62584|
|[elysia](https://github.com/elysiajs/elysia)|53928|53229|52861|55694|
|[baojs](https://github.com/mattreid1/baojs)|49111|55577|50470|41286|
  



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

