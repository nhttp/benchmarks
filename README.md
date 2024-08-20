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
Created At : Tue Aug 20 2024, 12:43:16 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46569|49989|46476|43243|
|[hono](https://github.com/honojs/hono)|45695|49050|46177|41859|
|[fast](https://github.com/danteissaias/fast)|45560|48510|42436|45735|
|[oak](https://github.com/oakserver/oak)|25621|26576|24978|25309|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24256|30349|21797|20621|
|[fastify](https://github.com/fastify/fastify)|16490|16674|16534|16262|
|[koa](https://github.com/koajs/koa)|13771|14343|13017|13953|
|[express](https://github.com/expressjs/express)|6250|6415|5963|6371|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71601|80134|76151|58518|
|[nhttp](https://github.com/nhttp/nhttp)|62499|81157|51647|54693|
|[hono](https://github.com/honojs/hono)|62417|70406|64255|52589|
|[baojs](https://github.com/mattreid1/baojs)|37883|43550|35680|34420|
  



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

