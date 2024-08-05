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
Created At : Mon Aug 05 2024, 12:44:39 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|46139|48851|47339|42226|
|[nhttp](https://github.com/nhttp/nhttp)|45369|49596|44403|42109|
|[fast](https://github.com/danteissaias/fast)|45061|49144|42205|43833|
|[oak](https://github.com/oakserver/oak)|25865|26756|25372|25466|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24428|30215|22768|20300|
|[fastify](https://github.com/fastify/fastify)|16607|17018|16589|16213|
|[koa](https://github.com/koajs/koa)|14158|15028|13398|14049|
|[express](https://github.com/expressjs/express)|6259|6412|5963|6402|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68896|81138|73704|51847|
|[hono](https://github.com/honojs/hono)|61344|75625|55757|52650|
|[nhttp](https://github.com/nhttp/nhttp)|60528|83424|49410|48750|
|[baojs](https://github.com/mattreid1/baojs)|38009|43944|36090|33993|
  



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

