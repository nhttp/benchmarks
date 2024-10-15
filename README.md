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
Created At : Tue Oct 15 2024, 12:50:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48190|51183|48041|45346|
|[fast](https://github.com/danteissaias/fast)|47731|52746|45060|45386|
|[hono](https://github.com/honojs/hono)|47581|51122|48323|43298|
|[oak](https://github.com/oakserver/oak)|25450|26383|25024|24943|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23770|29052|21918|20339|
|[fastify](https://github.com/fastify/fastify)|16830|17210|16712|16567|
|[koa](https://github.com/koajs/koa)|13734|14408|13002|13793|
|[express](https://github.com/expressjs/express)|6140|6387|5790|6243|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78347|82666|81121|71255|
|[hono](https://github.com/honojs/hono)|62003|76970|54613|54425|
|[nhttp](https://github.com/nhttp/nhttp)|59091|79745|42219|55310|
|[baojs](https://github.com/mattreid1/baojs)|35941|42005|36231|29587|
  



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

