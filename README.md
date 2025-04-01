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
Created At : Tue Apr 01 2025, 1:01:23 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60533|66101|57064|58433|
|[hono](https://github.com/honojs/hono)|57053|60393|62685|48081|
|[fast](https://github.com/danteissaias/fast)|55873|64589|47296|55733|
|[oak](https://github.com/oakserver/oak)|28715|30015|27664|28466|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38206|46541|35132|32944|
|[fastify](https://github.com/fastify/fastify)|24039|24161|25277|22678|
|[koa](https://github.com/koajs/koa)|16669|17498|15390|17120|
|[express](https://github.com/expressjs/express)|6599|6666|6430|6702|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78219|86109|76708|71840|
|[nhttp](https://github.com/nhttp/nhttp)|67087|86955|56115|58191|
|[hono](https://github.com/honojs/hono)|64521|72322|62225|59016|
|[baojs](https://github.com/mattreid1/baojs)|46434|53451|44670|41181|
  



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

