# 2019-Spring

Go Conference 2019 Spring

if you link this site.

use `https://gocon.jp/pages/home`

<<<<<<< HEAD
## How to deploy
=======
## Features
+ [Lost Grid](http://lostgrid.org).
+ [Modern font stack](https://bitsofco.de/the-new-system-font-stack).
+ Beautiful typography inspired by [matejlatin/Gutenberg](https://github.com/matejlatin/Gutenberg).
+ Syntax highlighting in code blocks using [PrismJS](http://prismjs.com).
+ [Mobile-First](https://medium.com/@mrmrs_/mobile-first-css-48bc4cc3f60f) approach in development.
+ Archive organized by tags and categories.
+ Pagination support.
+ [Netlify CMS](https://www.netlifycms.org) support.
+ Google Analytics.
+ Disqus Comments.
+ [Flow](https://flow.org/) static type checking.
>>>>>>> b7d7dd3... fix: update gatsby, restore babel

```
# After git pull
npm install
npm install gatsby -g

# build
npm run build

# serve locally
npm run serve

# firebase
npm install firebase-tools -g
firebase login
firebase init
firebase deploy
```

__Must build before deploy__

## categories and tags

There are two categories

- info
- session

if you post something, please make tag `en` or `ja`

## content

```
content
    pages/
    posts/
        info/
        sessions/
```