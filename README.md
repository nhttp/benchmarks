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
Created At : Sun Jun 11 2023, 12:51:37 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62941|69053|61234|58535|
|[hono](https://github.com/honojs/hono)|62073|66598|62301|57321|
|[fast](https://github.com/danteissaias/fast)|55285|66416|38830|60609|
|[fastro](https://github.com/fastrodev/fastro)|52870|64284|54693|39633|
|[oak](https://github.com/oakserver/oak)|19043|20312|19175|17642|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43833|46731|43346|41423|
|[fastify](https://github.com/fastify/fastify)|33833|34995|33387|33118|
|[koa](https://github.com/koajs/koa)|21871|23076|20654|21882|
|[express](https://github.com/expressjs/express)|7692|7923|7164|7990|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|69191|67568|71061|68943|
|[hono](https://github.com/honojs/hono)|67800|67179|68156|68066|
|[elysia](https://github.com/elysiajs/elysia)|66045|66101|66734|65299|
|[baojs](https://github.com/mattreid1/baojs)|56754|63386|59382|47495|
  



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

