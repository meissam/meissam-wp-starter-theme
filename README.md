# Meissam-WP-Starter-Theme

**Meissam-WP-Starter-Theme is a starter theme including full setup for `gulp`, `Webpack`, `Babel`, `PostCss`, `Browsersync` and beautiful admin panel based on Slate admin theme. This them uses `PostCSS` which has a great plugin based ecosystem and is also blazing fast in contrast with Sass. **

## 

## Features

- gulp
- gulp-plumber
- webpack
- webpackstream
- babel
- PostCSS
  - autoprefixer
  - cssnano 
  - postcss-simple-vars
  - postcss-hexrgba
  - postcss-nested
  - postcss-import
  - postcss-mixin
- Beautiful admin panel
- Translate Ready [Compatible with WPML and Polylang]



## Usage

This theme includes full setup for `gulp`, `Webpack`, `Babel`, `PostCss`, `Browsersync` and etc. This them uses`PostCSS` this some well-known plugins which can facilitate the development process. In order to use more plugins you can visit [postcss.parts](https://www.postcss.parts/) 



### 1 Install Node.js

https://nodejs.org/



### 2 Clone this repo into your WordPress theme directory

```
$ git clone https://gitlab.com/meissam/meissam-wp-boilerplate
```

You can also download the .zip file from the following URL. 

[zip file](https://github.com/meissam/meissam-wp-starter-theme/archive/master.zip)



### 3. Install Node modules

```
$ npm install
```



### 4. Change the site url

Change the value of proxy key in `browserSync` function  located in  ` gulpfile.js` for your environment. 



#### 5. Run the package's start script

```
$ npm start
```

Or, if you have installed gulp globally, this is also available and is same as `npm start`.

```
$ gulp watch
```



### 

## Notes

`Meissam-WP-Starter-Theme` puts bundled `style.css` in the root of them in order to use as a main style. admin panel is base on [Slate Admin Theme.](https://wordpress.org/plugins/slate-admin-theme/)  



## 

## Author(s)

This starter theme developed by [Meissam](https://meissam.net). 



## 

## Copyright / License

© 2020 the contributors of the [Meissam-WP-Starter-Theme](https://gitlab.com/meissam/meissam-wp-starter-theme) project under the [GPL version 2.0](https://raw.githubusercontent.com/wp-bathe/bathe/master/LICENSE) or later.
