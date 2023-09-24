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
Created At : Sun Sep 24 2023, 12:37:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60103|61996|61026|57287|
|[hono](https://github.com/honojs/hono)|57785|63238|58705|51413|
|[fast](https://github.com/danteissaias/fast)|55831|65518|42925|59051|
|[fastro](https://github.com/fastrodev/fastro)|24909|62954|6066|5707|
|[oak](https://github.com/oakserver/oak)|18091|19106|17943|17225|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39276|41721|39298|36808|
|[fastify](https://github.com/fastify/fastify)|29706|31020|29660|28439|
|[koa](https://github.com/koajs/koa)|18814|19585|17749|19107|
|[express](https://github.com/expressjs/express)|6219|6478|5597|6582|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|59627|55429|61979|61474|
|[nhttp](https://github.com/nhttp/nhttp)|58641|55096|60526|60300|
|[elysia](https://github.com/elysiajs/elysia)|58220|58550|54213|61896|
|[baojs](https://github.com/mattreid1/baojs)|44621|50350|37864|45649|
  



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

