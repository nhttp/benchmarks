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
Created At : Tue Jan 09 2024, 12:39:22 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46106|49278|44606|44434|
|[fast](https://github.com/danteissaias/fast)|45617|49495|42129|45226|
|[hono](https://github.com/honojs/hono)|44556|47183|45813|40671|
|[fastro](https://github.com/fastrodev/fastro)|22196|47775|9539|9273|
|[oak](https://github.com/oakserver/oak)|21073|22281|21185|19754|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25620|32726|23149|20984|
|[fastify](https://github.com/fastify/fastify)|15220|15587|15072|15000|
|[koa](https://github.com/koajs/koa)|13770|14230|12923|14157|
|[express](https://github.com/expressjs/express)|6403|6527|6156|6525|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70674|81214|76056|54752|
|[hono](https://github.com/honojs/hono)|60459|74298|55613|51466|
|[nhttp](https://github.com/nhttp/nhttp)|59932|81812|54917|43066|
|[baojs](https://github.com/mattreid1/baojs)|34964|41663|33525|29703|
  



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

