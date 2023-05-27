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
Created At : Sat May 27 2023, 12:42:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|52515|57061|53637|46848|
|[nhttp](https://github.com/nhttp/nhttp)|52513|57155|50814|49571|
|[fast](https://github.com/danteissaias/fast)|49615|58289|40205|50350|
|[fastro](https://github.com/fastrodev/fastro)|44068|54461|45598|32145|
|[oak](https://github.com/oakserver/oak)|17930|18869|18092|16830|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36056|38951|35464|33754|
|[fastify](https://github.com/fastify/fastify)|28790|31441|26707|28221|
|[koa](https://github.com/koajs/koa)|18955|19912|17629|19325|
|[express](https://github.com/expressjs/express)|6381|6478|5930|6735|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64000|63778|65216|63005|
|[hono](https://github.com/honojs/hono)|61269|60192|60913|62702|
|[elysia](https://github.com/elysiajs/elysia)|59381|56999|59512|61632|
|[baojs](https://github.com/mattreid1/baojs)|53827|58724|46851|55906|
  



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

