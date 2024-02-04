<div align="center">

# neutrino-template

🌌 lightweight template for creating a website with module bundling, hmr, typescript, tailwindcss & sass

</div>

this template uses parcel

alos this is very easy to deploy, here is a [demo](https://neutrino-template.vercel.app/) on vercel

this template is pretty minimal and lightweight here is structure of template

```
neutrino-template
├── src
│   ├── scripts
│   │   └── index.ts
│   ├── styles
│   │   └── styles.css
│   ├── index.html
│   └── icon.svg
│
├── .gitignore
├── .postcssrc
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

### getting started

```bash
# clone template
git clone https://github.com/maxhu08/neutrino-template.git

# cd
cd neutrino-template

# installing dependecies
npm install

# delete git info so you can add your own repo
rm -rf .git
```

then start the dev server:

```bash
# start server
npm run dev
```
