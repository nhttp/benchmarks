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
Created At : Tue Apr 08 2025, 12:54:39 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57288|66154|55688|50023|
|[hono](https://github.com/honojs/hono)|57091|65407|57046|48821|
|[fast](https://github.com/danteissaias/fast)|52833|61268|49050|48181|
|[oak](https://github.com/oakserver/oak)|28806|30420|27871|28126|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38766|45444|37042|33811|
|[fastify](https://github.com/fastify/fastify)|24811|24433|25509|24490|
|[koa](https://github.com/koajs/koa)|16933|17949|15835|17016|
|[express](https://github.com/expressjs/express)|6482|6426|6399|6622|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74871|86941|68379|69294|
|[nhttp](https://github.com/nhttp/nhttp)|64972|87850|52507|54559|
|[hono](https://github.com/honojs/hono)|59814|69833|53018|56591|
|[baojs](https://github.com/mattreid1/baojs)|46140|50925|42619|44875|
  



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

