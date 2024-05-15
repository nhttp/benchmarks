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
Created At : Wed May 15 2024, 12:39:11 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48796|53397|47414|45577|
|[fast](https://github.com/danteissaias/fast)|48250|52090|46220|46439|
|[hono](https://github.com/honojs/hono)|48007|51083|48307|44631|
|[oak](https://github.com/oakserver/oak)|27992|29554|27917|26506|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24583|31843|22214|19693|
|[fastify](https://github.com/fastify/fastify)|16500|16981|16414|16104|
|[koa](https://github.com/koajs/koa)|14522|15678|13391|14498|
|[express](https://github.com/expressjs/express)|6319|6466|6004|6486|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74701|81138|74613|68351|
|[nhttp](https://github.com/nhttp/nhttp)|65933|84989|57016|55794|
|[hono](https://github.com/honojs/hono)|57703|66660|57430|49019|
|[baojs](https://github.com/mattreid1/baojs)|37204|42740|35444|33429|
  



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

