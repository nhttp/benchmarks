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
Created At : Wed Aug 23 2023, 12:34:16 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39407|41881|39284|37056|
|[hono](https://github.com/honojs/hono)|37461|39845|37177|35361|
|[fastro](https://github.com/fastrodev/fastro)|16311|41240|4353|3340|
|[oak](https://github.com/oakserver/oak)|11082|11602|10935|10709|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|20439|23190|19445|18681|
|[fastify](https://github.com/fastify/fastify)|14086|15060|13807|13392|
|[koa](https://github.com/koajs/koa)|9555|10101|9190|9375|
|[express](https://github.com/expressjs/express)|4059|4213|3956|4008|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47185|48100|47064|46392|
|[elysia](https://github.com/elysiajs/elysia)|44503|46600|46722|40186|
|[hono](https://github.com/honojs/hono)|43647|47803|43335|39803|
|[baojs](https://github.com/mattreid1/baojs)|35357|40578|27830|37664|
  



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

