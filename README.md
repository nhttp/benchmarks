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
Created At : Tue May 30 2023, 9:22:59 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|55398|59482|54676|52036|
|[hono](https://github.com/honojs/hono)|54586|60160|54726|48871|
|[fast](https://github.com/danteissaias/fast)|50953|59141|50080|43639|
|[fastro](https://github.com/fastrodev/fastro)|45068|54516|47899|32788|
|[oak](https://github.com/oakserver/oak)|17847|19822|16139|17580|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42099|45221|42257|38818|
|[fastify](https://github.com/fastify/fastify)|32056|35619|27945|32603|
|[koa](https://github.com/koajs/koa)|20871|21733|19861|21020|
|[express](https://github.com/expressjs/express)|7528|7694|7235|7656|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|65290|64011|66518|65340|
|[elysia](https://github.com/elysiajs/elysia)|64348|64098|65698|63248|
|[nhttp](https://github.com/nhttp/nhttp)|59982|62255|65997|51695|
|[baojs](https://github.com/mattreid1/baojs)|56931|60474|55599|54721|
  



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

