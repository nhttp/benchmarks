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
Created At : Sun Aug 20 2023, 12:36:06 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|34918|34015|35965|34774|
|[hono](https://github.com/honojs/hono)|33722|35534|34061|31571|
|[fastro](https://github.com/fastrodev/fastro)|13224|33038|3369|3266|
|[oak](https://github.com/oakserver/oak)|9855|10291|9862|9412|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18079|20813|17596|15827|
|[fastify](https://github.com/fastify/fastify)|13518|13943|13747|12864|
|[koa](https://github.com/koajs/koa)|9072|9314|8565|9338|
|[express](https://github.com/expressjs/express)|3752|3691|3623|3942|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41719|42539|41311|41307|
|[elysia](https://github.com/elysiajs/elysia)|40502|39808|43329|38370|
|[hono](https://github.com/honojs/hono)|38270|44290|35503|35016|
|[baojs](https://github.com/mattreid1/baojs)|30463|32815|28587|29986|
  



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

