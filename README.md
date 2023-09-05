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
Created At : Tue Sep 05 2023, 12:35:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57652|62702|56487|53767|
|[hono](https://github.com/honojs/hono)|47736|54917|39030|49261|
|[fastro](https://github.com/fastrodev/fastro)|22422|57142|5546|4579|
|[oak](https://github.com/oakserver/oak)|17003|17914|17018|16078|
|[fast](https://github.com/danteissaias/fast)|16979|0|0|50936|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39119|42194|38948|36216|
|[fastify](https://github.com/fastify/fastify)|28150|29037|28649|26763|
|[koa](https://github.com/koajs/koa)|18244|19117|17017|18597|
|[express](https://github.com/expressjs/express)|6101|6354|5589|6361|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|60580|58940|60412|62388|
|[hono](https://github.com/honojs/hono)|60015|61013|61054|57977|
|[nhttp](https://github.com/nhttp/nhttp)|58931|60111|60178|56503|
|[baojs](https://github.com/mattreid1/baojs)|41828|48901|42034|34548|
  



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

