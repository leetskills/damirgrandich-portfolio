# Damir Grandich Portfolio

> Work examples and profile of Damir Grandich, a Product UX Designer in London.

## Dependencies
* Node: `>4.2`
* Ruby: `>2.0` with Bundler `>1.10`
* Gulp: `4.0` you need to install `gulp-cli`: `npm install gulp-cli -g`

## Quick start
1. `npm install`
2. `bundle install`
3. `gulp`

## Usage
```sh
$ gulp [--prod]
```
This command will build your assets and site with development settings. As you are modifying files they will automatically inject into your browser via [BrowserSync](https://github.com/shakyShane/browser-sync).

`--prod` runs the site with production settings, where CSS, JS and HTML will be minified, gzipped and cache-busted. Changes to files are not automatically injected.

```sh
$ gulp build [--prod]
```
This command is identical to the normal `gulp [--prod]` however it will not create a BrowserSync session in your browser.

## Reinstall
If you have cloned this repo or want to reinstall, make sure there are no
`node_modules` or `Gemfile.lock` folder/file and then run `npm install` and
`bundle install` again.

## Credits

> [jekyllized](https://github.com/sondr3/generator-jekyllized)
