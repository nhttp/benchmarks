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
Created At : Sat Nov 25 2023, 12:36:26 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46541|50469|45739|43414|
|[fast](https://github.com/danteissaias/fast)|45794|49136|41928|46317|
|[hono](https://github.com/honojs/hono)|44745|47549|45404|41282|
|[fastro](https://github.com/fastrodev/fastro)|23709|48033|11584|11509|
|[oak](https://github.com/oakserver/oak)|19807|21011|19735|18675|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24792|28653|23652|22071|
|[fastify](https://github.com/fastify/fastify)|15577|16169|15181|15381|
|[koa](https://github.com/koajs/koa)|13948|14597|13407|13841|
|[express](https://github.com/expressjs/express)|6332|6494|6016|6485|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69476|78588|71344|58497|
|[hono](https://github.com/honojs/hono)|67048|76534|65313|59298|
|[nhttp](https://github.com/nhttp/nhttp)|61424|81293|53436|49543|
|[baojs](https://github.com/mattreid1/baojs)|34909|39571|33398|31757|
  



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

