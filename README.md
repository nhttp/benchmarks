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
Created At : Mon Apr 10 2023, 12:39:27 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|51597|57011|49673|48108|
|[hono](https://github.com/honojs/hono)|48734|55134|48575|42492|
|[fast](https://github.com/danteissaias/fast)|47589|55495|37607|49664|
|[fastro](https://github.com/fastrodev/fastro)|40534|52889|38277|30437|
|[oak](https://github.com/oakserver/oak)|17364|20943|15645|15504|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43909|47018|43241|41467|
|[fastify](https://github.com/fastify/fastify)|35392|37026|34737|34413|
|[koa](https://github.com/koajs/koa)|22168|23217|20777|22511|
|[express](https://github.com/expressjs/express)|7760|8021|7114|8144|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|70010|68079|71936|70014|
|[hono](https://github.com/honojs/hono)|66300|67219|66950|64731|
|[elysia](https://github.com/elysiajs/elysia)|63799|66443|68232|56722|
|[baojs](https://github.com/mattreid1/baojs)|59122|66664|50170|60532|
  



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

