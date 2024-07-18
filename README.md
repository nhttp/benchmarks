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
Created At : Thu Jul 18 2024, 12:41:55 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|46353|50075|43449|45535|
|[nhttp](https://github.com/nhttp/nhttp)|46108|49310|46195|42820|
|[hono](https://github.com/honojs/hono)|46075|48109|47217|42900|
|[oak](https://github.com/oakserver/oak)|25583|26473|25094|25182|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24721|31436|22525|20203|
|[fastify](https://github.com/fastify/fastify)|17077|17655|16973|16604|
|[koa](https://github.com/koajs/koa)|14564|15440|13676|14575|
|[express](https://github.com/expressjs/express)|6384|6442|6149|6561|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67647|78171|78626|46145|
|[hono](https://github.com/honojs/hono)|59444|72947|58185|47199|
|[nhttp](https://github.com/nhttp/nhttp)|58555|82254|50194|43216|
|[baojs](https://github.com/mattreid1/baojs)|37500|46678|34284|31537|
  



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

