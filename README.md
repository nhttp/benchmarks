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
Created At : Thu Jun 01 2023, 8:38:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58066|62223|57882|54094|
|[hono](https://github.com/honojs/hono)|56953|61842|58563|50454|
|[fast](https://github.com/danteissaias/fast)|49741|59952|52159|37112|
|[fastro](https://github.com/fastrodev/fastro)|46720|58479|47611|34070|
|[oak](https://github.com/oakserver/oak)|19124|20398|19568|17407|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43614|46725|43299|40818|
|[fastify](https://github.com/fastify/fastify)|34824|35562|35286|33623|
|[koa](https://github.com/koajs/koa)|21452|22279|20003|22073|
|[express](https://github.com/expressjs/express)|7577|7835|7001|7894|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|68864|68005|69735|68852|
|[hono](https://github.com/honojs/hono)|67573|67311|68495|66914|
|[elysia](https://github.com/elysiajs/elysia)|66209|66802|67655|64169|
|[baojs](https://github.com/mattreid1/baojs)|56704|61828|58606|49679|
  



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

