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
Created At : Fri Sep 13 2024, 12:46:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48690|52701|48617|44753|
|[fast](https://github.com/danteissaias/fast)|47769|50631|46151|46524|
|[hono](https://github.com/honojs/hono)|47657|50788|48542|43640|
|[oak](https://github.com/oakserver/oak)|25707|26949|24976|25196|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24890|31481|22715|20474|
|[fastify](https://github.com/fastify/fastify)|16378|16650|16319|16165|
|[koa](https://github.com/koajs/koa)|14240|14882|13311|14527|
|[express](https://github.com/expressjs/express)|6250|6447|5935|6367|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68983|80471|75324|51154|
|[nhttp](https://github.com/nhttp/nhttp)|57452|78572|48025|45760|
|[hono](https://github.com/honojs/hono)|56565|74749|51111|43834|
|[baojs](https://github.com/mattreid1/baojs)|33472|37453|34343|28619|
  



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

