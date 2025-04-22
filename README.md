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
Created At : Tue Apr 22 2025, 12:58:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|57326|64278|56791|50909|
|[nhttp](https://github.com/nhttp/nhttp)|55108|60544|55875|48904|
|[fast](https://github.com/danteissaias/fast)|54356|63732|43956|55380|
|[oak](https://github.com/oakserver/oak)|27719|28635|27120|27401|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38646|46224|37643|32072|
|[fastify](https://github.com/fastify/fastify)|24344|24279|26546|22208|
|[koa](https://github.com/koajs/koa)|16844|18430|15439|16664|
|[express](https://github.com/expressjs/express)|6364|6493|6103|6496|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77883|90509|76855|66285|
|[nhttp](https://github.com/nhttp/nhttp)|70760|96204|56449|59626|
|[hono](https://github.com/honojs/hono)|64426|72816|60225|60236|
|[baojs](https://github.com/mattreid1/baojs)|46517|50601|45166|43783|
  



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

