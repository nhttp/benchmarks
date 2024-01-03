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
Created At : Wed Jan 03 2024, 12:38:08 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46318|50113|44756|44086|
|[fast](https://github.com/danteissaias/fast)|45551|48886|43906|43860|
|[hono](https://github.com/honojs/hono)|44626|47267|45085|41526|
|[fastro](https://github.com/fastrodev/fastro)|23628|48433|11523|10927|
|[oak](https://github.com/oakserver/oak)|21093|22272|20975|20033|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24803|30838|22869|20703|
|[fastify](https://github.com/fastify/fastify)|15855|16018|15493|16055|
|[koa](https://github.com/koajs/koa)|14240|14694|13289|14737|
|[express](https://github.com/expressjs/express)|6334|6494|6007|6502|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71168|79379|69820|64304|
|[nhttp](https://github.com/nhttp/nhttp)|62647|79255|53592|55095|
|[hono](https://github.com/honojs/hono)|61607|71933|59590|53299|
|[baojs](https://github.com/mattreid1/baojs)|38038|45604|37413|31098|
  



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

