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
Created At : Fri Oct 13 2023, 12:37:08 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49929|53553|49921|46313|
|[fast](https://github.com/danteissaias/fast)|44564|51516|40011|42166|
|[hono](https://github.com/honojs/hono)|43097|47054|44073|38163|
|[fastro](https://github.com/fastrodev/fastro)|19975|49836|5050|5040|
|[oak](https://github.com/oakserver/oak)|13028|13986|12466|12631|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24521|26651|23732|23181|
|[fastify](https://github.com/fastify/fastify)|17647|18082|17602|17256|
|[koa](https://github.com/koajs/koa)|11745|12829|11336|11070|
|[express](https://github.com/expressjs/express)|4290|4465|4020|4386|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|49823|51098|51033|47338|
|[nhttp](https://github.com/nhttp/nhttp)|48131|50749|46977|46666|
|[elysia](https://github.com/elysiajs/elysia)|46490|50092|46988|42391|
|[baojs](https://github.com/mattreid1/baojs)|31228|34024|26514|33145|
  



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

