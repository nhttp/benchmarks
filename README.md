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
Created At : Fri May 26 2023, 12:40:37 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|54245|58587|53277|50872|
|[hono](https://github.com/honojs/hono)|51850|56726|50453|48371|
|[fast](https://github.com/danteissaias/fast)|46645|58589|45476|35869|
|[fastro](https://github.com/fastrodev/fastro)|43467|52963|45405|32033|
|[oak](https://github.com/oakserver/oak)|18000|18851|18222|16928|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40574|44197|40289|37236|
|[fastify](https://github.com/fastify/fastify)|31059|32749|30858|29570|
|[koa](https://github.com/koajs/koa)|19148|20295|17657|19493|
|[express](https://github.com/expressjs/express)|6489|6648|6234|6584|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|62762|62726|63610|61949|
|[nhttp](https://github.com/nhttp/nhttp)|62484|61888|64055|61509|
|[elysia](https://github.com/elysiajs/elysia)|60220|61273|60396|58992|
|[baojs](https://github.com/mattreid1/baojs)|54484|60033|52366|51053|
  



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

