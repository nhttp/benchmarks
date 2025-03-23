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
Created At : Sun Mar 23 2025, 12:57:51 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61197|70031|55913|57646|
|[hono](https://github.com/honojs/hono)|58327|65234|56678|53069|
|[fast](https://github.com/danteissaias/fast)|53901|63650|43960|54093|
|[oak](https://github.com/oakserver/oak)|28663|29161|27739|29090|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39248|46370|39616|31759|
|[fastify](https://github.com/fastify/fastify)|26277|26473|27245|25114|
|[koa](https://github.com/koajs/koa)|16975|18006|15632|17288|
|[express](https://github.com/expressjs/express)|7013|7208|6473|7358|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|81508|95761|81417|67345|
|[nhttp](https://github.com/nhttp/nhttp)|71975|94874|60864|60187|
|[hono](https://github.com/honojs/hono)|66650|76560|62693|60696|
|[baojs](https://github.com/mattreid1/baojs)|49040|55718|45829|45573|
  



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

