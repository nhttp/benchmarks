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
Created At : Sat Jul 27 2024, 12:42:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|46438|50090|43964|45261|
|[hono](https://github.com/honojs/hono)|46281|49608|46395|42840|
|[nhttp](https://github.com/nhttp/nhttp)|45806|49217|45651|42551|
|[oak](https://github.com/oakserver/oak)|25192|26194|24677|24705|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24536|30800|22341|20468|
|[fastify](https://github.com/fastify/fastify)|17110|17237|17097|16996|
|[koa](https://github.com/koajs/koa)|14525|15426|13673|14475|
|[express](https://github.com/expressjs/express)|6367|6463|6190|6449|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70543|85874|78241|47514|
|[nhttp](https://github.com/nhttp/nhttp)|59181|84679|51061|41804|
|[hono](https://github.com/honojs/hono)|57622|73552|46568|52747|
|[baojs](https://github.com/mattreid1/baojs)|33222|37773|31605|30287|
  



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

