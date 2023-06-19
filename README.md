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
Created At : Mon Jun 19 2023, 12:46:03 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57587|61325|56048|55389|
|[hono](https://github.com/honojs/hono)|56225|60227|56152|52296|
|[fastro](https://github.com/fastrodev/fastro)|44806|57897|38807|37714|
|[oak](https://github.com/oakserver/oak)|17538|18772|17579|16262|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37221|39478|36922|35262|
|[fastify](https://github.com/fastify/fastify)|29160|30170|28880|28430|
|[koa](https://github.com/koajs/koa)|18273|18859|17308|18652|
|[express](https://github.com/expressjs/express)|6470|6677|6183|6550|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60714|60269|61262|60612|
|[hono](https://github.com/honojs/hono)|59001|58226|59312|59464|
|[elysia](https://github.com/elysiajs/elysia)|57590|56781|58850|57140|
|[baojs](https://github.com/mattreid1/baojs)|48393|55227|41096|48855|
  



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

