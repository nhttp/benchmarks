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
Created At : Fri Jan 03 2025, 12:50:39 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|47690|51511|47955|43603|
|[nhttp](https://github.com/nhttp/nhttp)|47185|50525|46775|44256|
|[fast](https://github.com/danteissaias/fast)|46768|51091|44613|44601|
|[oak](https://github.com/oakserver/oak)|26005|27039|25682|25293|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24522|31281|22244|20042|
|[fastify](https://github.com/fastify/fastify)|16299|16707|16175|16014|
|[koa](https://github.com/koajs/koa)|14188|15147|13121|14297|
|[express](https://github.com/expressjs/express)|6244|6444|5967|6321|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74673|81402|80270|62347|
|[nhttp](https://github.com/nhttp/nhttp)|60836|83876|47938|50693|
|[hono](https://github.com/honojs/hono)|57566|77848|52650|42200|
|[baojs](https://github.com/mattreid1/baojs)|35587|40139|35685|30937|
  



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

