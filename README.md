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
Created At : Fri May 19 2023, 12:40:42 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37554|41283|37806|33574|
|[hono](https://github.com/honojs/hono)|32752|37115|33837|27304|
|[fast](https://github.com/danteissaias/fast)|30268|37557|32814|20433|
|[fastro](https://github.com/fastrodev/fastro)|29391|38488|29844|19841|
|[oak](https://github.com/oakserver/oak)|10822|10726|10779|10962|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18422|19912|18081|17272|
|[fastify](https://github.com/fastify/fastify)|14524|16328|14198|13046|
|[koa](https://github.com/koajs/koa)|9709|10291|9046|9789|
|[express](https://github.com/expressjs/express)|3741|3866|3419|3939|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48736|48279|49668|48261|
|[hono](https://github.com/honojs/hono)|42810|46739|43892|37799|
|[elysia](https://github.com/elysiajs/elysia)|37496|39168|38494|34825|
|[baojs](https://github.com/mattreid1/baojs)|37320|39786|36443|35730|
  



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

