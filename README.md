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
Created At : Fri Oct 18 2024, 12:49:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|47415|51533|47508|43203|
|[nhttp](https://github.com/nhttp/nhttp)|47386|51294|47155|43709|
|[fast](https://github.com/danteissaias/fast)|47187|52476|44767|44318|
|[oak](https://github.com/oakserver/oak)|25466|26293|25154|24952|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25017|31522|22543|20985|
|[fastify](https://github.com/fastify/fastify)|16331|16656|16136|16201|
|[koa](https://github.com/koajs/koa)|13946|14444|13057|14338|
|[express](https://github.com/expressjs/express)|6203|6391|5823|6394|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72680|80117|78432|59491|
|[hono](https://github.com/honojs/hono)|57510|73661|48206|50662|
|[nhttp](https://github.com/nhttp/nhttp)|54345|77240|41727|44068|
|[baojs](https://github.com/mattreid1/baojs)|33368|37670|31742|30691|
  



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

