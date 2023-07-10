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
Created At : Mon Jul 10 2023, 12:52:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56669|61499|55436|53073|
|[hono](https://github.com/honojs/hono)|50334|55834|56623|38546|
|[oak](https://github.com/oakserver/oak)|17355|18441|17239|16384|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|28541|29645|28226|27752|
|[nhttp](https://github.com/nhttp/nhttp)|19481|19649|19092|19702|
|[koa](https://github.com/koajs/koa)|16091|17023|14910|16339|
|[express](https://github.com/expressjs/express)|6174|6334|5729|6458|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64293|62832|64814|65232|
|[hono](https://github.com/honojs/hono)|62061|60669|61790|63724|
|[elysia](https://github.com/elysiajs/elysia)|61050|60461|61750|60938|
|[baojs](https://github.com/mattreid1/baojs)|53270|59820|43238|56752|
  



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

