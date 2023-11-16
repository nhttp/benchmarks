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
Created At : Thu Nov 16 2023, 12:38:19 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|45855|49505|41699|46361|
|[nhttp](https://github.com/nhttp/nhttp)|45372|49131|44238|42748|
|[hono](https://github.com/honojs/hono)|44013|47053|44668|40318|
|[fastro](https://github.com/fastrodev/fastro)|24055|48247|12006|11913|
|[oak](https://github.com/oakserver/oak)|20732|21922|20502|19773|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|28128|34020|26616|23747|
|[fastify](https://github.com/fastify/fastify)|15324|15699|15258|15014|
|[koa](https://github.com/koajs/koa)|14014|14686|13215|14141|
|[express](https://github.com/expressjs/express)|6421|6514|6269|6480|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|69700|79419|72387|57295|
|[elysia](https://github.com/elysiajs/elysia)|66895|77131|60420|63133|
|[nhttp](https://github.com/nhttp/nhttp)|64023|77885|53445|60738|
|[baojs](https://github.com/mattreid1/baojs)|36319|42294|32679|33985|
  



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

