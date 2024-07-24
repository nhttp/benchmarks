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
Created At : Wed Jul 24 2024, 12:43:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|45624|48718|46504|41650|
|[nhttp](https://github.com/nhttp/nhttp)|45544|48270|45603|42760|
|[fast](https://github.com/danteissaias/fast)|45411|49373|43028|43833|
|[oak](https://github.com/oakserver/oak)|26140|27229|25472|25718|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24456|30839|22417|20113|
|[fastify](https://github.com/fastify/fastify)|17059|17447|17081|16648|
|[koa](https://github.com/koajs/koa)|14590|15439|13788|14544|
|[express](https://github.com/expressjs/express)|6388|6535|6082|6548|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72632|88019|79450|50426|
|[nhttp](https://github.com/nhttp/nhttp)|60656|83842|53997|44130|
|[hono](https://github.com/honojs/hono)|58972|64076|52327|60514|
|[baojs](https://github.com/mattreid1/baojs)|37806|45368|34319|33731|
  



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

