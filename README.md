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
Created At : Sun Mar 09 2025, 12:45:21 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59261|66051|57002|54729|
|[hono](https://github.com/honojs/hono)|56626|62612|58391|48876|
|[fast](https://github.com/danteissaias/fast)|54628|64761|47615|51508|
|[oak](https://github.com/oakserver/oak)|29170|30663|28097|28750|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39042|47262|34977|34888|
|[fastify](https://github.com/fastify/fastify)|25596|25974|27108|23706|
|[koa](https://github.com/koajs/koa)|16903|18335|15720|16653|
|[express](https://github.com/expressjs/express)|6946|7178|6344|7315|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79025|88831|77286|70958|
|[nhttp](https://github.com/nhttp/nhttp)|71094|93436|60131|59715|
|[hono](https://github.com/honojs/hono)|66565|74151|64219|61325|
|[baojs](https://github.com/mattreid1/baojs)|49209|52915|46470|48241|
  



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

