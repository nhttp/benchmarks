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
Created At : Fri Dec 27 2024, 12:50:27 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47389|51589|46968|43609|
|[fast](https://github.com/danteissaias/fast)|47043|50839|43527|46762|
|[hono](https://github.com/honojs/hono)|46457|49535|47098|42738|
|[oak](https://github.com/oakserver/oak)|26114|27002|25582|25759|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24235|29943|22772|19991|
|[fastify](https://github.com/fastify/fastify)|16656|16985|16576|16408|
|[koa](https://github.com/koajs/koa)|14038|14955|13097|14061|
|[express](https://github.com/expressjs/express)|6280|6489|5851|6500|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69859|81311|73390|54877|
|[nhttp](https://github.com/nhttp/nhttp)|52839|72812|37189|48516|
|[hono](https://github.com/honojs/hono)|51062|68319|41720|43146|
|[baojs](https://github.com/mattreid1/baojs)|32975|35707|33530|29689|
  



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

