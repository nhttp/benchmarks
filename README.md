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
Created At : Fri Sep 08 2023, 12:35:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57041|59523|57001|54598|
|[hono](https://github.com/honojs/hono)|54071|57516|54669|50028|
|[fast](https://github.com/danteissaias/fast)|51912|61853|39890|53994|
|[fastro](https://github.com/fastrodev/fastro)|22351|55258|5817|5979|
|[oak](https://github.com/oakserver/oak)|17531|18592|17437|16563|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39844|42465|39849|37217|
|[fastify](https://github.com/fastify/fastify)|28568|29653|28660|27391|
|[koa](https://github.com/koajs/koa)|17941|19045|16684|18094|
|[express](https://github.com/expressjs/express)|6461|6523|6117|6744|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|63711|63414|63373|64346|
|[hono](https://github.com/honojs/hono)|62439|64877|61757|60683|
|[nhttp](https://github.com/nhttp/nhttp)|60317|63726|59180|58045|
|[baojs](https://github.com/mattreid1/baojs)|44510|49807|38853|44871|
  



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

