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
Created At : Tue May 23 2023, 12:41:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|33745|37517|33413|30305|
|[hono](https://github.com/honojs/hono)|32619|35591|34251|28014|
|[fast](https://github.com/danteissaias/fast)|30176|37027|29552|23950|
|[fastro](https://github.com/fastrodev/fastro)|28693|36879|28952|20249|
|[oak](https://github.com/oakserver/oak)|9815|10566|9838|9040|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18069|19578|18594|16034|
|[fastify](https://github.com/fastify/fastify)|13212|13668|13248|12719|
|[koa](https://github.com/koajs/koa)|9002|9486|8483|9036|
|[express](https://github.com/expressjs/express)|3674|3785|3440|3797|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40859|43762|39024|39790|
|[elysia](https://github.com/elysiajs/elysia)|40119|42845|41462|36049|
|[hono](https://github.com/honojs/hono)|39045|42966|39022|35147|
|[baojs](https://github.com/mattreid1/baojs)|34526|39226|30788|33565|
  



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

