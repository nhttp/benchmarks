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
Created At : Thu Nov 28 2024, 12:53:55 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49049|52239|48519|46389|
|[hono](https://github.com/honojs/hono)|48828|52244|49160|45079|
|[fast](https://github.com/danteissaias/fast)|48172|52730|44762|47024|
|[oak](https://github.com/oakserver/oak)|26642|27815|26191|25920|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24794|30717|22802|20863|
|[fastify](https://github.com/fastify/fastify)|17468|17840|17356|17207|
|[koa](https://github.com/koajs/koa)|14319|15173|13478|14305|
|[express](https://github.com/expressjs/express)|6444|6620|6051|6661|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72709|81076|71728|65324|
|[nhttp](https://github.com/nhttp/nhttp)|61155|81421|53048|48996|
|[hono](https://github.com/honojs/hono)|57891|67691|52856|53125|
|[baojs](https://github.com/mattreid1/baojs)|34130|39858|33119|29414|
  



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

