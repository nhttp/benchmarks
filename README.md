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
Created At : Tue Oct 01 2024, 12:55:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46804|50804|46619|42989|
|[fast](https://github.com/danteissaias/fast)|46524|51440|44392|43739|
|[hono](https://github.com/honojs/hono)|46403|49697|47044|42467|
|[oak](https://github.com/oakserver/oak)|25439|26282|24819|25217|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24048|30061|22186|19897|
|[fastify](https://github.com/fastify/fastify)|16558|16907|16423|16345|
|[koa](https://github.com/koajs/koa)|13314|14169|12463|13311|
|[express](https://github.com/expressjs/express)|5992|6183|5684|6108|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|66505|81850|69034|48632|
|[nhttp](https://github.com/nhttp/nhttp)|52053|77614|39018|39526|
|[hono](https://github.com/honojs/hono)|50961|61031|50283|41570|
|[baojs](https://github.com/mattreid1/baojs)|33460|37338|34734|28309|
  



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

