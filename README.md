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
Created At : Wed May 24 2023, 12:41:30 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|34575|38166|34723|30836|
|[hono](https://github.com/honojs/hono)|34234|37276|36002|29425|
|[fast](https://github.com/danteissaias/fast)|30963|37680|27505|27704|
|[fastro](https://github.com/fastrodev/fastro)|28735|37638|30170|18398|
|[oak](https://github.com/oakserver/oak)|10837|11741|10689|10080|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18644|20037|18364|17531|
|[fastify](https://github.com/fastify/fastify)|14864|15378|14692|14522|
|[koa](https://github.com/koajs/koa)|9395|9706|8823|9655|
|[express](https://github.com/expressjs/express)|3872|4034|3503|4078|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44121|47081|43227|42056|
|[elysia](https://github.com/elysiajs/elysia)|41398|41961|43777|38457|
|[hono](https://github.com/honojs/hono)|40405|42767|40540|37909|
|[baojs](https://github.com/mattreid1/baojs)|32201|37030|26262|33312|
  



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

