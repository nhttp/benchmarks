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
Created At : Wed Feb 14 2024, 12:36:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48105|51075|46657|46584|
|[fast](https://github.com/danteissaias/fast)|47130|50082|43437|47870|
|[hono](https://github.com/honojs/hono)|46340|48931|46931|43159|
|[oak](https://github.com/oakserver/oak)|12333|12568|12393|12039|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25278|32285|23244|20304|
|[fastify](https://github.com/fastify/fastify)|16227|16560|16325|15796|
|[koa](https://github.com/koajs/koa)|14507|15358|13814|14348|
|[express](https://github.com/expressjs/express)|6436|6472|6191|6646|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73859|80928|78685|61963|
|[nhttp](https://github.com/nhttp/nhttp)|59004|83039|54069|39903|
|[hono](https://github.com/honojs/hono)|57306|72243|52634|47042|
|[baojs](https://github.com/mattreid1/baojs)|34342|38508|33741|30777|
  



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

