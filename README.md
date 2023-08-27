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
Created At : Sun Aug 27 2023, 12:36:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57477|63073|55718|53641|
|[hono](https://github.com/honojs/hono)|53782|58160|55391|47794|
|[fastro](https://github.com/fastrodev/fastro)|23046|58467|5642|5028|
|[oak](https://github.com/oakserver/oak)|17272|18331|17196|16290|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36011|38904|35869|33261|
|[fastify](https://github.com/fastify/fastify)|28963|30531|28668|27689|
|[koa](https://github.com/koajs/koa)|18695|19705|17585|18795|
|[express](https://github.com/expressjs/express)|6439|6640|5997|6680|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|62818|62221|62254|63980|
|[hono](https://github.com/honojs/hono)|62209|62206|63225|61195|
|[nhttp](https://github.com/nhttp/nhttp)|60145|62365|60660|57410|
|[baojs](https://github.com/mattreid1/baojs)|43431|50043|34702|45549|
  



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

