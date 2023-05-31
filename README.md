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
Created At : Wed May 31 2023, 12:45:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|52812|57169|52121|49145|
|[fast](https://github.com/danteissaias/fast)|52096|56772|48932|50585|
|[hono](https://github.com/honojs/hono)|50638|55207|52760|43948|
|[fastro](https://github.com/fastrodev/fastro)|42625|52416|44318|31142|
|[oak](https://github.com/oakserver/oak)|16993|18822|15675|16482|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38404|41927|37812|35474|
|[fastify](https://github.com/fastify/fastify)|27390|30453|23808|27909|
|[koa](https://github.com/koajs/koa)|18693|19762|17494|18822|
|[express](https://github.com/expressjs/express)|6575|6712|6431|6582|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|62133|60829|63092|62477|
|[elysia](https://github.com/elysiajs/elysia)|60474|59547|60486|61388|
|[nhttp](https://github.com/nhttp/nhttp)|58140|60978|63587|49854|
|[baojs](https://github.com/mattreid1/baojs)|55118|58872|54085|52398|
  



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

