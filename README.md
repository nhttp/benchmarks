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
Created At : Mon Jan 13 2025, 12:54:01 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58310|64930|61338|48662|
|[hono](https://github.com/honojs/hono)|57141|62622|56514|52288|
|[fast](https://github.com/danteissaias/fast)|54555|62527|48924|52214|
|[oak](https://github.com/oakserver/oak)|27680|27913|28158|26968|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41542|45881|39952|38794|
|[fastify](https://github.com/fastify/fastify)|24792|25829|25602|22946|
|[koa](https://github.com/koajs/koa)|17205|18353|16186|17075|
|[express](https://github.com/expressjs/express)|7057|7304|6478|7389|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|82875|96855|81458|70311|
|[nhttp](https://github.com/nhttp/nhttp)|71856|91754|60144|63670|
|[hono](https://github.com/honojs/hono)|65597|73018|63793|59981|
|[baojs](https://github.com/mattreid1/baojs)|49142|52595|45013|49817|
  



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

