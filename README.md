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
Created At : Tue Aug 13 2024, 12:44:26 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|45682|48748|46259|42040|
|[fast](https://github.com/danteissaias/fast)|45511|48791|42695|45047|
|[nhttp](https://github.com/nhttp/nhttp)|45439|48208|45572|42536|
|[oak](https://github.com/oakserver/oak)|25527|26375|24945|25262|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24043|29509|22196|20423|
|[fastify](https://github.com/fastify/fastify)|16861|17220|16797|16566|
|[koa](https://github.com/koajs/koa)|14252|14989|13457|14311|
|[express](https://github.com/expressjs/express)|6346|6518|6058|6461|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72197|81753|78225|56614|
|[hono](https://github.com/honojs/hono)|56610|71736|52886|45209|
|[nhttp](https://github.com/nhttp/nhttp)|56088|83483|41208|43572|
|[baojs](https://github.com/mattreid1/baojs)|33435|38452|32420|29433|
  



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

