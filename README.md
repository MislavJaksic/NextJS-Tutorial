## NextJS Tutorial

React is a JavaScript library for building interactive user interfaces.  

Next.js is a React framework that gives you building blocks to create web applications.

### [Getting Started](https://nextjs.org/docs/getting-started)

1) Install Node.js
2) `npx create-next-app@latest --typescript`
3) `cd App-Name`
4) Run `npm run dev`
5) Visit `http://localhost:3000`

#### Basic Features

```
$: npm run lint
```

[ESLint](https://nextjs.org/docs/basic-features/eslint)  

#### Deployment

[Deployment](https://nextjs.org/docs/deployment)  

##### GitHub Pages

```
// next.config.js
module.exports = {
  basePath: "/GitHub-Repository-Name",
  assetPrefix: '/GitHub-Repository-Name',
  images: {
    loader: 'akamai',
    path: '',
  },
}
```

```
// package.json
...
"build": "next build && next export",
...
```
