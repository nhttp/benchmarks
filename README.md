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
Created At : Mon Oct 09 2023, 12:36:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60144|63187|61515|55729|
|[hono](https://github.com/honojs/hono)|56523|61255|58006|50309|
|[fast](https://github.com/danteissaias/fast)|52833|61542|52909|44048|
|[fastro](https://github.com/fastrodev/fastro)|25548|62456|7245|6942|
|[oak](https://github.com/oakserver/oak)|18158|19119|18033|17321|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38781|41889|38481|35974|
|[fastify](https://github.com/fastify/fastify)|28426|30037|28141|27099|
|[koa](https://github.com/koajs/koa)|18415|19468|16975|18803|
|[express](https://github.com/expressjs/express)|6125|6397|5917|6061|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57514|53522|59431|59589|
|[hono](https://github.com/honojs/hono)|55985|50748|57481|59726|
|[elysia](https://github.com/elysiajs/elysia)|53438|52880|50212|57221|
|[baojs](https://github.com/mattreid1/baojs)|48720|54936|50247|40976|
  



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

