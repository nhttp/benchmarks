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
Created At : Thu Apr 20 2023, 12:38:22 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38042|40903|36915|36308|
|[fast](https://github.com/danteissaias/fast)|34414|40083|28418|34741|
|[hono](https://github.com/honojs/hono)|34107|39012|29119|34191|
|[fastro](https://github.com/fastrodev/fastro)|31495|37241|32255|24989|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40271|42897|39909|38006|
|[fastify](https://github.com/fastify/fastify)|32115|33370|32090|30885|
|[koa](https://github.com/koajs/koa)|19713|20627|18388|20124|
|[express](https://github.com/expressjs/express)|7220|7320|6947|7392|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|65982|65558|66758|65629|
|[hono](https://github.com/honojs/hono)|64215|64943|63443|64260|
|[elysia](https://github.com/elysiajs/elysia)|62956|63079|62634|63154|
|[baojs](https://github.com/mattreid1/baojs)|53244|59997|44867|54867|
  



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

