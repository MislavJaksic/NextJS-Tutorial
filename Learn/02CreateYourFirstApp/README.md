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

In Next.js a page is a React Component exported from a file in the `pages` directory.  

Use the `Link` component to connect pages using client-side navigation.  
Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.  
The browser does not load the full page.  

Next.js automates:
* code splitting - each page only loads what’s necessary for that page
* client-side navigation - faster than waiting for the browser to reload the page
* prefetching (in production) - `Link` components appear in the browser’s viewport and the code for the linked page in the background

### Assets, Metadata, and CSS

Next.js has built-in support for CSS and Sass (Syntactically Awesome Style Sheets).  
