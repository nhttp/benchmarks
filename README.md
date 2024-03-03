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
Created At : Sun Mar 03 2024, 12:38:38 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48478|52248|47057|46129|
|[fast](https://github.com/danteissaias/fast)|48424|52110|45676|47485|
|[hono](https://github.com/honojs/hono)|47792|50884|48250|44241|
|[oak](https://github.com/oakserver/oak)|27395|29027|27417|25741|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24538|31167|22336|20112|
|[fastify](https://github.com/fastify/fastify)|16914|17258|16927|16556|
|[koa](https://github.com/koajs/koa)|14150|14841|13360|14248|
|[express](https://github.com/expressjs/express)|6461|6591|6311|6481|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75544|85870|75921|64840|
|[hono](https://github.com/honojs/hono)|61470|74221|60895|49294|
|[nhttp](https://github.com/nhttp/nhttp)|60104|87166|43937|49210|
|[baojs](https://github.com/mattreid1/baojs)|33599|36475|32951|31371|
  



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

