## Runtime JS/TS benchmarks.
This benchmark uses [bombardier](https://github.com/codesenberg/bombardier).

> Focus on framework features.

Example code for benchmark.
```ts
// GET /
framework.get("/", (req, res) => {
  res.send("home");
});

// GET /blog/99?title=bench
framework.get("/blog/:id", (req, res) => {
  res.send(`${req.params.id} ${req.query.title}`);
});

// GET /api/user (set header & send json)
framework.get("/api/user", (req, res) => {
  res.setHeader("x-powered-by", "bench");
  res.json({ user: "john" });
});
```

## Output
Created At : Thu Mar 09 2023, 2:28:31 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24902|25757|24650|24299|
|[fast](https://github.com/danteissaias/fast)|24702|26547|23242|24316|
|[hono](https://github.com/honojs/hono)|20542|21822|22384|17419|
|[fastro](https://github.com/fastrodev/fastro)|16217|23326|11890|13436|
|[oak](https://github.com/oakserver/oak)|8374|8953|8580|7589|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|35319|38933|32966|34057|
|[hono](https://github.com/honojs/hono)|27519|33679|25482|23395|
|[elysia](https://github.com/elysiajs/elysia)|27354|34272|24633|23157|
|[baojs](https://github.com/mattreid1/baojs)|27248|30467|28585|22693|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|12131|13017|12367|11010|
|[fastify](https://github.com/fastify/fastify)|12023|12378|11688|12002|
|[koa](https://github.com/koajs/koa)|8355|8534|8045|8487|
|[express](https://github.com/expressjs/express)|3638|3855|3306|3752|
  


### Results
|Name|Lang/Runtime|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|Bun|35319|38933|32966|34057|
|[hono](https://github.com/honojs/hono)|Bun|27519|33679|25482|23395|
|[elysia](https://github.com/elysiajs/elysia)|Bun|27354|34272|24633|23157|
|[baojs](https://github.com/mattreid1/baojs)|Bun|27248|30467|28585|22693|
|[nhttp](https://github.com/nhttp/nhttp)|Deno|24902|25757|24650|24299|
|[fast](https://github.com/danteissaias/fast)|Deno|24702|26547|23242|24316|
|[hono](https://github.com/honojs/hono)|Deno|20542|21822|22384|17419|
|[fastro](https://github.com/fastrodev/fastro)|Deno|16217|23326|11890|13436|
|[nhttp](https://github.com/nhttp/nhttp)|Node|12131|13017|12367|11010|
|[fastify](https://github.com/fastify/fastify)|Node|12023|12378|11688|12002|
|[oak](https://github.com/oakserver/oak)|Deno|8374|8953|8580|7589|
|[koa](https://github.com/koajs/koa)|Node|8355|8534|8045|8487|
|[express](https://github.com/expressjs/express)|Node|3638|3855|3306|3752|



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

