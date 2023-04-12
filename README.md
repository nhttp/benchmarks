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
Created At : Wed Apr 12 2023, 12:38:53 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|53632|59084|54586|47226|
|[hono](https://github.com/honojs/hono)|50383|55088|52221|43840|
|[fast](https://github.com/danteissaias/fast)|43802|51800|38286|41321|
|[fastro](https://github.com/fastrodev/fastro)|41938|54116|38385|33314|
|[oak](https://github.com/oakserver/oak)|18345|21521|15792|17721|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44238|47794|43551|41370|
|[fastify](https://github.com/fastify/fastify)|36085|37098|36102|35056|
|[koa](https://github.com/koajs/koa)|22058|23382|20598|22194|
|[express](https://github.com/expressjs/express)|7777|8101|7115|8116|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|69768|68427|70890|69987|
|[hono](https://github.com/honojs/hono)|67399|66191|68889|67117|
|[elysia](https://github.com/elysiajs/elysia)|67190|67101|68186|66283|
|[baojs](https://github.com/mattreid1/baojs)|59824|66105|62656|50711|
  



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

