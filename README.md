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
Created At : Thu Nov 09 2023, 12:36:45 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59536|61076|61396|56137|
|[hono](https://github.com/honojs/hono)|56033|60353|57131|50616|
|[fast](https://github.com/danteissaias/fast)|50830|57632|40796|54061|
|[oak](https://github.com/oakserver/oak)|17983|18998|18072|16878|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38848|41189|38755|36601|
|[fastify](https://github.com/fastify/fastify)|28963|29988|29065|27836|
|[koa](https://github.com/koajs/koa)|19255|20051|18159|19556|
|[express](https://github.com/expressjs/express)|6258|6307|5966|6502|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56815|53896|57831|58718|
|[hono](https://github.com/honojs/hono)|55616|49420|59176|58251|
|[elysia](https://github.com/elysiajs/elysia)|52643|52461|48431|57037|
|[baojs](https://github.com/mattreid1/baojs)|46672|52060|39851|48106|
  



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

