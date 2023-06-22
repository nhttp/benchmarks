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
Created At : Thu Jun 22 2023, 12:45:29 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57393|62854|55264|54062|
|[hono](https://github.com/honojs/hono)|56265|60822|57840|50132|
|[fastro](https://github.com/fastrodev/fastro)|45882|60751|39401|37495|
|[oak](https://github.com/oakserver/oak)|17463|18740|17307|16343|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37775|40492|37596|35238|
|[fastify](https://github.com/fastify/fastify)|27914|29355|26907|27481|
|[koa](https://github.com/koajs/koa)|18083|18984|16926|18339|
|[express](https://github.com/expressjs/express)|6503|6671|6231|6607|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61469|60596|63508|60302|
|[hono](https://github.com/honojs/hono)|59545|59178|60148|59308|
|[elysia](https://github.com/elysiajs/elysia)|58007|58334|57583|58105|
|[baojs](https://github.com/mattreid1/baojs)|51741|57590|44400|53232|
  



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

