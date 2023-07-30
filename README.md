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
Created At : Sun Jul 30 2023, 12:44:35 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|53715|56579|54384|50182|
|[hono](https://github.com/honojs/hono)|50226|53147|50038|47492|
|[fastro](https://github.com/fastrodev/fastro)|19383|49675|3817|4657|
|[oak](https://github.com/oakserver/oak)|16082|17252|15886|15107|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|33538|38262|32305|30048|
|[fastify](https://github.com/fastify/fastify)|27299|28116|28173|25609|
|[koa](https://github.com/koajs/koa)|17182|18697|15757|17093|
|[express](https://github.com/expressjs/express)|5459|5801|4901|5676|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62262|62386|62523|61877|
|[hono](https://github.com/honojs/hono)|60832|57183|60955|64359|
|[elysia](https://github.com/elysiajs/elysia)|57606|58819|56831|57169|
|[baojs](https://github.com/mattreid1/baojs)|42712|51511|45756|30870|
  



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

