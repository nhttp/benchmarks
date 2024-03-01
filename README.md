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
Created At : Fri Mar 01 2024, 12:40:46 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48757|51851|47662|46757|
|[fast](https://github.com/danteissaias/fast)|47738|51062|44330|47822|
|[hono](https://github.com/honojs/hono)|46654|49330|47065|43567|
|[oak](https://github.com/oakserver/oak)|27269|28709|27371|25728|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24506|29984|22770|20763|
|[fastify](https://github.com/fastify/fastify)|16966|17206|17003|16688|
|[koa](https://github.com/koajs/koa)|15052|15839|14007|15311|
|[express](https://github.com/expressjs/express)|6285|6445|5986|6425|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74416|88149|76402|58697|
|[nhttp](https://github.com/nhttp/nhttp)|57400|83050|44135|45014|
|[hono](https://github.com/honojs/hono)|56549|65440|53496|50711|
|[baojs](https://github.com/mattreid1/baojs)|37080|43538|34882|32819|
  



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

