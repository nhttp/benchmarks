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
Created At : Mon Apr 24 2023, 12:40:47 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26994|28383|26619|25981|
|[hono](https://github.com/honojs/hono)|25562|26958|26007|23720|
|[fast](https://github.com/danteissaias/fast)|22813|26430|20114|21895|
|[fastro](https://github.com/fastrodev/fastro)|21174|25418|21056|17047|
|[oak](https://github.com/oakserver/oak)|9911|10450|9838|9444|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18367|20973|17737|16390|
|[fastify](https://github.com/fastify/fastify)|13448|14015|13325|13004|
|[koa](https://github.com/koajs/koa)|9000|9074|8560|9367|
|[express](https://github.com/expressjs/express)|3636|3710|3412|3785|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41336|41077|41621|41311|
|[hono](https://github.com/honojs/hono)|38804|40474|39026|36913|
|[elysia](https://github.com/elysiajs/elysia)|38314|40238|38810|35893|
|[baojs](https://github.com/mattreid1/baojs)|33507|38634|26252|35635|
  



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

