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
Created At : Sun Jan 26 2025, 12:50:55 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58137|65267|58575|50570|
|[hono](https://github.com/honojs/hono)|56907|62457|58686|49579|
|[fast](https://github.com/danteissaias/fast)|56333|65836|53993|49171|
|[oak](https://github.com/oakserver/oak)|28641|29573|27670|28680|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38770|46166|35574|34570|
|[fastify](https://github.com/fastify/fastify)|24665|25046|26664|22284|
|[koa](https://github.com/koajs/koa)|17056|17710|16143|17316|
|[express](https://github.com/expressjs/express)|6889|7043|6361|7264|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78010|85900|77710|70419|
|[nhttp](https://github.com/nhttp/nhttp)|70528|93389|59572|58623|
|[hono](https://github.com/honojs/hono)|64226|74468|59580|58631|
|[baojs](https://github.com/mattreid1/baojs)|48578|51869|45207|48658|
  



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

