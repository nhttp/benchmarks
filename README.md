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
Created At : Tue Jan 21 2025, 12:48:35 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61578|67781|61084|55870|
|[hono](https://github.com/honojs/hono)|57334|64156|59884|47961|
|[fast](https://github.com/danteissaias/fast)|56533|62771|53307|53522|
|[oak](https://github.com/oakserver/oak)|27678|28318|27029|27687|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42198|49821|38269|38505|
|[fastify](https://github.com/fastify/fastify)|24373|24291|25055|23772|
|[koa](https://github.com/koajs/koa)|17329|18016|16406|17565|
|[express](https://github.com/expressjs/express)|7079|7263|6624|7351|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79422|92671|75999|69595|
|[nhttp](https://github.com/nhttp/nhttp)|72464|95882|62177|59333|
|[hono](https://github.com/honojs/hono)|66362|80597|60796|57692|
|[baojs](https://github.com/mattreid1/baojs)|51987|58851|48629|48482|
  



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

