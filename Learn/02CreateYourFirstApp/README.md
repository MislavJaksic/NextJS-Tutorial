## Create your first app

### Create a Next.js App

Install Node.js.  
Install Git.  
```
$: npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
$: cd nextjs-blog
$: npm run dev
```

Open `http://localhost:3000`.  

Next.js has a Fast Refresh just like React.  

### Navigate Between Pages

A page is a React Component exported from a file in the `pages` directory.  

Use the `Link` component to connect pages using client-side navigation.  
Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.  
The browser does not load the full page.  

Automates:
* code splitting - each page only loads what’s necessary for that page
* client-side navigation - faster than waiting for the browser to reload the page
* prefetching (in production) - `Link` components appear in the browser’s viewport and the code for the linked page in the background

### Assets, Metadata, and CSS

Built-in support for CSS and Sass (Syntactically Awesome Style Sheets).  

Serves statis assets like images `robot.txt`, Google Site Verification from `public` directory.  

Uses Automatic Image Optimization by default and it works with any image source.  
Images are lazy loaded.  
`Head` is a React component.  

Third party scripts are loaded into `Script`.  

CSS, SASS, CSS-in-JS and CSS Modues are supported.  
`_app.js` holds the `App` component which is common across all pages. It also includes global CSS.  

### Pre-rendering and Data Fetching

Every page is pre-rendered, generated server side, and not using client side Javascript.  
`Hydration` is when the page becomes interactive.  

Forms of pre-rendering:
* Static Generation: generates the HTML at build time
* Server-side Rendering: generates the HTML on each request
You can declare how each page should be pre-rendered. Use Static Generation whenever possible.  
`export async function getStaticProps()` allows Static Generation with data.  
Markdown files can have metadata added to them using YAML Front Matter.  

`getStaticProps()` can fetch data from an API, file system or database at build time. I always runs server-side and never on client side.  
`getStaticProps()` can only be exposrted from a page.  

`getServerSideProps` uses Server side Rendering. It is called at request time.  
You can also use Client side Rendering with [SWR](https://swr.vercel.app/), a data fetching React hook.  

### Dynamic Routes

If you want to generate a page at path `posts/<id>`, create `pages/posts/[id].js`.  

### API Routes

Supported. Handling forum input is a good use case.  
Preview Mode uses API Routes.  

### Deploying Your Next.js App

[Next.js on Vercal](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy)  
[Next.js on GitHub Pages](https://gregrickaby.blog/2020/03/21/next-js-github-pages)  
