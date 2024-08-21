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
Created At : Wed Aug 21 2024, 12:43:10 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46434|49909|45947|43446|
|[hono](https://github.com/honojs/hono)|45407|47853|46208|42161|
|[fast](https://github.com/danteissaias/fast)|45338|48811|42291|44912|
|[oak](https://github.com/oakserver/oak)|25997|26790|25435|25765|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25433|32270|23082|20947|
|[fastify](https://github.com/fastify/fastify)|16789|17180|16456|16732|
|[koa](https://github.com/koajs/koa)|13933|14815|13057|13927|
|[express](https://github.com/expressjs/express)|6350|6456|6048|6547|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71318|81521|79828|52604|
|[nhttp](https://github.com/nhttp/nhttp)|64385|80253|60299|52603|
|[hono](https://github.com/honojs/hono)|62395|76888|58421|51875|
|[baojs](https://github.com/mattreid1/baojs)|36066|40716|36797|30684|
  



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

