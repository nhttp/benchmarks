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
Created At : Sun Jan 28 2024, 12:39:13 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48093|51323|47269|45687|
|[fast](https://github.com/danteissaias/fast)|46851|50154|44405|45994|
|[hono](https://github.com/honojs/hono)|46320|48697|46868|43395|
|[oak](https://github.com/oakserver/oak)|27472|29070|27570|25777|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24920|31547|23135|20079|
|[fastify](https://github.com/fastify/fastify)|16820|16991|16772|16698|
|[koa](https://github.com/koajs/koa)|14735|15691|13844|14671|
|[express](https://github.com/expressjs/express)|6458|6644|6280|6449|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73211|84377|75424|59831|
|[hono](https://github.com/honojs/hono)|57726|71015|49794|52370|
|[nhttp](https://github.com/nhttp/nhttp)|57209|84705|46610|40311|
|[baojs](https://github.com/mattreid1/baojs)|35020|41714|33003|30342|
  



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

