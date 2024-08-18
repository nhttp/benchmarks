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
Created At : Sun Aug 18 2024, 12:47:08 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|46478|49049|47553|42831|
|[fast](https://github.com/danteissaias/fast)|46267|49659|44379|44762|
|[nhttp](https://github.com/nhttp/nhttp)|45975|48425|46186|43313|
|[oak](https://github.com/oakserver/oak)|25978|26835|25483|25615|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24082|30054|21943|20250|
|[fastify](https://github.com/fastify/fastify)|17040|17452|16940|16728|
|[koa](https://github.com/koajs/koa)|14165|14955|13395|14144|
|[express](https://github.com/expressjs/express)|6302|6449|5999|6457|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68837|81002|74188|51321|
|[hono](https://github.com/honojs/hono)|61019|75119|57550|50388|
|[nhttp](https://github.com/nhttp/nhttp)|58680|86991|42984|46064|
|[baojs](https://github.com/mattreid1/baojs)|33173|37268|33014|29237|
  



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

