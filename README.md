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
Created At : Fri Apr 28 2023, 12:41:08 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37444|39227|37043|36062|
|[hono](https://github.com/honojs/hono)|35844|38207|35695|33629|
|[fast](https://github.com/danteissaias/fast)|34200|38106|28926|35569|
|[fastro](https://github.com/fastrodev/fastro)|30654|36042|31354|24565|
|[oak](https://github.com/oakserver/oak)|17117|18633|16719|16000|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36099|39223|35913|33160|
|[fastify](https://github.com/fastify/fastify)|28296|29668|28062|27158|
|[koa](https://github.com/koajs/koa)|18077|18871|16948|18412|
|[express](https://github.com/expressjs/express)|6090|6269|5891|6110|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62839|62785|64448|61284|
|[hono](https://github.com/honojs/hono)|60546|59312|60719|61608|
|[elysia](https://github.com/elysiajs/elysia)|57941|59131|59952|54739|
|[baojs](https://github.com/mattreid1/baojs)|51282|57300|52181|44365|
  



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

