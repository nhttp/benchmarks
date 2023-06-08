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
Created At : Thu Jun 08 2023, 12:46:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|53490|58005|52928|49537|
|[hono](https://github.com/honojs/hono)|51010|55237|52525|45267|
|[fast](https://github.com/danteissaias/fast)|47771|55591|38081|49641|
|[fastro](https://github.com/fastrodev/fastro)|41857|51367|43844|30360|
|[oak](https://github.com/oakserver/oak)|17419|18484|17338|16435|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37738|40508|37338|35367|
|[fastify](https://github.com/fastify/fastify)|29301|30695|29206|28001|
|[koa](https://github.com/koajs/koa)|18093|19023|16882|18375|
|[express](https://github.com/expressjs/express)|6395|6528|6075|6582|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61537|60127|63784|60701|
|[hono](https://github.com/honojs/hono)|60367|60863|60856|59383|
|[elysia](https://github.com/elysiajs/elysia)|59712|59034|59321|60782|
|[baojs](https://github.com/mattreid1/baojs)|51039|57511|43959|51646|
  



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

