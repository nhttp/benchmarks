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
Created At : Wed Dec 27 2023, 12:36:50 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|45455|49071|43759|43535|
|[nhttp](https://github.com/nhttp/nhttp)|45363|47956|44400|43733|
|[hono](https://github.com/honojs/hono)|43945|46845|44507|40483|
|[fastro](https://github.com/fastrodev/fastro)|22862|47227|11247|10113|
|[oak](https://github.com/oakserver/oak)|19877|21026|19850|18754|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23482|29575|21663|19207|
|[fastify](https://github.com/fastify/fastify)|15099|15073|15245|14980|
|[koa](https://github.com/koajs/koa)|13731|14318|12892|13983|
|[express](https://github.com/expressjs/express)|6273|6459|5924|6435|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71377|80741|74121|59269|
|[nhttp](https://github.com/nhttp/nhttp)|63458|82165|59368|48840|
|[hono](https://github.com/honojs/hono)|60037|72119|54670|53322|
|[baojs](https://github.com/mattreid1/baojs)|31954|37058|31336|27467|
  



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

