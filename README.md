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
Created At : Tue Aug 08 2023, 12:41:46 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|36617|39052|36827|33971|
|[nhttp](https://github.com/nhttp/nhttp)|36185|39367|35477|33711|
|[fastro](https://github.com/fastrodev/fastro)|14432|35872|3455|3968|
|[oak](https://github.com/oakserver/oak)|9703|10397|9748|8965|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|17872|19579|18764|15272|
|[fastify](https://github.com/fastify/fastify)|13609|14166|13274|13387|
|[koa](https://github.com/koajs/koa)|9109|9210|8710|9407|
|[express](https://github.com/expressjs/express)|3786|3828|3610|3921|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44601|46360|42713|44730|
|[elysia](https://github.com/elysiajs/elysia)|41922|41490|46477|37800|
|[hono](https://github.com/honojs/hono)|38333|42317|36509|36173|
|[baojs](https://github.com/mattreid1/baojs)|32368|36661|30985|29459|
  



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

