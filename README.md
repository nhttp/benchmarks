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
Created At : Sat Jul 20 2024, 12:41:29 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47122|50001|47000|44364|
|[hono](https://github.com/honojs/hono)|46733|49213|47770|43217|
|[fast](https://github.com/danteissaias/fast)|46326|50648|44238|44092|
|[oak](https://github.com/oakserver/oak)|26058|27145|25616|25412|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24655|30752|22533|20679|
|[fastify](https://github.com/fastify/fastify)|17297|17726|17283|16882|
|[koa](https://github.com/koajs/koa)|14611|15573|13727|14532|
|[express](https://github.com/expressjs/express)|6487|6593|6177|6692|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75147|85360|82817|57264|
|[nhttp](https://github.com/nhttp/nhttp)|64207|82431|53253|56938|
|[hono](https://github.com/honojs/hono)|62788|77797|57566|53002|
|[baojs](https://github.com/mattreid1/baojs)|36824|43524|31420|35527|
  



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

