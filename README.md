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
Created At : Tue May 07 2024, 12:38:27 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47978|51912|45467|46554|
|[nhttp](https://github.com/nhttp/nhttp)|47108|50259|45930|45136|
|[hono](https://github.com/honojs/hono)|46902|50298|46691|43716|
|[oak](https://github.com/oakserver/oak)|27126|28811|27199|25369|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24759|31597|22583|20096|
|[fastify](https://github.com/fastify/fastify)|16633|16902|16662|16334|
|[koa](https://github.com/koajs/koa)|14535|15493|13688|14424|
|[express](https://github.com/expressjs/express)|6305|6387|6185|6344|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74269|82442|76127|64239|
|[hono](https://github.com/honojs/hono)|62112|70583|59294|56458|
|[nhttp](https://github.com/nhttp/nhttp)|59736|79664|53760|45783|
|[baojs](https://github.com/mattreid1/baojs)|37020|44810|33890|32361|
  



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

