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
Created At : Tue Nov 14 2023, 12:36:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44896|48645|44094|41949|
|[fast](https://github.com/danteissaias/fast)|43976|47347|42605|41975|
|[hono](https://github.com/honojs/hono)|42642|45186|43445|39296|
|[fastro](https://github.com/fastrodev/fastro)|21894|46400|9668|9614|
|[oak](https://github.com/oakserver/oak)|19462|20489|19234|18662|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|27125|32189|26077|23108|
|[fastify](https://github.com/fastify/fastify)|14804|15405|14613|14393|
|[koa](https://github.com/koajs/koa)|13620|13827|13308|13724|
|[express](https://github.com/expressjs/express)|6230|6372|5858|6459|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|65520|77590|67077|51893|
|[nhttp](https://github.com/nhttp/nhttp)|59603|77808|50570|50432|
|[hono](https://github.com/honojs/hono)|59342|70360|59890|47775|
|[baojs](https://github.com/mattreid1/baojs)|31169|35644|27804|30060|
  



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

