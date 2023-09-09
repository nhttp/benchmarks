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
Created At : Sat Sep 09 2023, 12:34:07 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|54324|60217|54640|48115|
|[hono](https://github.com/honojs/hono)|53988|58423|53057|50483|
|[fast](https://github.com/danteissaias/fast)|51153|63071|51095|39293|
|[fastro](https://github.com/fastrodev/fastro)|23460|58246|6012|6122|
|[oak](https://github.com/oakserver/oak)|17260|18326|16844|16610|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39286|42768|39393|35696|
|[fastify](https://github.com/fastify/fastify)|28613|30148|28839|26852|
|[koa](https://github.com/koajs/koa)|18547|19620|17220|18802|
|[express](https://github.com/expressjs/express)|6269|6655|5635|6516|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|62928|63310|60923|64550|
|[nhttp](https://github.com/nhttp/nhttp)|62801|63756|63804|60843|
|[hono](https://github.com/honojs/hono)|59159|47993|65380|64103|
|[baojs](https://github.com/mattreid1/baojs)|45248|51521|41652|42571|
  



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

