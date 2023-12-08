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
Created At : Fri Dec 08 2023, 12:38:46 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|45875|49747|43853|44026|
|[nhttp](https://github.com/nhttp/nhttp)|45387|48092|44109|43959|
|[hono](https://github.com/honojs/hono)|44729|47524|45250|41414|
|[fastro](https://github.com/fastrodev/fastro)|23761|47797|12074|11413|
|[oak](https://github.com/oakserver/oak)|20603|21971|20478|19359|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26928|32906|24845|23032|
|[fastify](https://github.com/fastify/fastify)|15501|15680|15045|15778|
|[koa](https://github.com/koajs/koa)|14060|14413|13330|14436|
|[express](https://github.com/expressjs/express)|6310|6402|6004|6525|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70021|82735|70484|56844|
|[nhttp](https://github.com/nhttp/nhttp)|67459|81600|65583|55195|
|[hono](https://github.com/honojs/hono)|61349|71180|58708|54159|
|[baojs](https://github.com/mattreid1/baojs)|34354|38517|33036|31508|
  



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

