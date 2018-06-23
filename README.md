# Introduction
Yet another todo list tutorial. This is just for a couple of friends. It's a totally opinionated take on how to FE webdev, and I will deliberately skip steps so that you can google stuff (and read the docs) on your own. so learn at your own risk.

# Week 1
## tldr
setup npm, setup parcel, setup eslint, create hello world
## Setup
google these yourself
-install nodejs
-install npm (via nvm)
-(optional install yarn)

## Creating a hello world
init your npm project

`npm init -y`

install parcel

`npm install parcel-bundler --save`

you should use `--save-dev` for something like parcel as your production should have better ways to serve your app, but in this case for convenience, we want to just run `install` and then are able to host on our server with the exact same configuration as our dev machines, so that we don't have to worry about deployment problems.

the reason we use parcel is simple: it has zero configurations. In a proper working environment, we can expect to use webpack or rollup (google javascript bundlers, then google these), as there some some level of customizations, but parcel is good enough for now.

create a index.html, write a hello world in the body

configure `npm start` to host your index.html

now that we know parcel works, lets actually create a react hello world

## Creating a react hello world

`npm install react --save`
`npm install react-dom --save`

since react uses es6 (google it) lets install and setup babel, which transpiles es6 to es5 (google)

`npm install babel-preset-env babel-preset-react --save`

create a file `.babelrc` and in that file do this
`{
  "presets": ["env", "react"]
}`

~~optional~~ NOT OPTIONAL install eslint (these are my settings)

`npm install eslint --save-dev`

`export PKG=eslint-config-airbnb`

`npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"`

`{
  "extends": "airbnb",
  "env": {
    "browser": true,
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  }
}
`
now that everything's set up, without using create-react-app, write a pure react component that just says 'hello world'
