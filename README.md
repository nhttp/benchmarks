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
Created At : Tue Sep 19 2023, 12:36:03 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|66205|69451|66202|62961|
|[hono](https://github.com/honojs/hono)|62890|69555|64267|54847|
|[fast](https://github.com/danteissaias/fast)|59492|71889|51649|54937|
|[fastro](https://github.com/fastrodev/fastro)|27225|70309|5395|5972|
|[oak](https://github.com/oakserver/oak)|18905|19696|18964|18056|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44477|47997|43420|42013|
|[fastify](https://github.com/fastify/fastify)|34295|35305|34269|33312|
|[koa](https://github.com/koajs/koa)|21749|22664|20669|21915|
|[express](https://github.com/expressjs/express)|7590|7690|7292|7787|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|65293|61059|68518|66302|
|[elysia](https://github.com/elysiajs/elysia)|64198|63520|63303|65770|
|[hono](https://github.com/honojs/hono)|63255|63130|59510|67124|
|[baojs](https://github.com/mattreid1/baojs)|50967|59191|41537|52173|
  



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

