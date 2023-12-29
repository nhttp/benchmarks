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
Created At : Fri Dec 29 2023, 12:31:00 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46328|50425|44581|43979|
|[fast](https://github.com/danteissaias/fast)|45332|48904|43676|43415|
|[hono](https://github.com/honojs/hono)|44662|47060|45473|41453|
|[fastro](https://github.com/fastrodev/fastro)|23542|48165|11203|11258|
|[oak](https://github.com/oakserver/oak)|20429|21568|20367|19353|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25658|32514|23240|21219|
|[fastify](https://github.com/fastify/fastify)|15749|16155|15621|15471|
|[koa](https://github.com/koajs/koa)|14013|14131|13427|14480|
|[express](https://github.com/expressjs/express)|6295|6386|6067|6431|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71471|79785|72916|61713|
|[nhttp](https://github.com/nhttp/nhttp)|60690|82240|51048|48782|
|[hono](https://github.com/honojs/hono)|55181|65438|53952|46154|
|[baojs](https://github.com/mattreid1/baojs)|34190|38099|31007|33463|
  



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

