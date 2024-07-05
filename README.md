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
Created At : Fri Jul 05 2024, 12:41:11 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48322|51513|48692|44760|
|[fast](https://github.com/danteissaias/fast)|48282|53469|45139|46238|
|[nhttp](https://github.com/nhttp/nhttp)|47794|51735|47199|44447|
|[oak](https://github.com/oakserver/oak)|26856|27728|26177|26663|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23834|29085|22289|20127|
|[fastify](https://github.com/fastify/fastify)|17070|17426|17023|16761|
|[koa](https://github.com/koajs/koa)|14178|14812|13549|14172|
|[express](https://github.com/expressjs/express)|6337|6389|6082|6539|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72048|85371|77802|52972|
|[hono](https://github.com/honojs/hono)|59099|70556|51349|55393|
|[nhttp](https://github.com/nhttp/nhttp)|58134|88243|40869|45291|
|[baojs](https://github.com/mattreid1/baojs)|31810|36841|30924|27664|
  



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

