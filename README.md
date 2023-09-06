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
Created At : Wed Sep 06 2023, 12:38:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57899|62676|57093|53928|
|[hono](https://github.com/honojs/hono)|53064|55662|54395|49136|
|[fast](https://github.com/danteissaias/fast)|50330|59718|39834|51438|
|[fastro](https://github.com/fastrodev/fastro)|22858|56626|6277|5672|
|[oak](https://github.com/oakserver/oak)|16921|17828|16999|15937|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37964|40495|37974|35422|
|[fastify](https://github.com/fastify/fastify)|26969|28105|26301|26501|
|[koa](https://github.com/koajs/koa)|18101|19017|16864|18423|
|[express](https://github.com/expressjs/express)|5970|6240|5410|6261|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|61858|62466|63882|59225|
|[nhttp](https://github.com/nhttp/nhttp)|59531|61544|60797|56252|
|[elysia](https://github.com/elysiajs/elysia)|58098|59472|53980|60843|
|[baojs](https://github.com/mattreid1/baojs)|40999|48483|30925|43590|
  



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

