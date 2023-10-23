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
Created At : Mon Oct 23 2023, 12:36:37 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|37880|41502|37673|34466|
|[nhttp](https://github.com/nhttp/nhttp)|37191|39986|37490|34098|
|[fast](https://github.com/danteissaias/fast)|34928|40994|35476|28315|
|[oak](https://github.com/oakserver/oak)|10881|11548|10596|10500|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|21520|24685|20602|19274|
|[fastify](https://github.com/fastify/fastify)|12916|13060|12762|12927|
|[koa](https://github.com/koajs/koa)|9666|9882|9304|9811|
|[express](https://github.com/expressjs/express)|3879|4001|3475|4162|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|39023|37708|41319|38043|
|[hono](https://github.com/honojs/hono)|37520|40803|37033|34725|
|[nhttp](https://github.com/nhttp/nhttp)|37065|41289|34206|35699|
|[baojs](https://github.com/mattreid1/baojs)|25135|29267|21886|24252|
  



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

