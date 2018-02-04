# EDOR
Adaptive HTML template


Visit [edor.com.ua](https://edor.com.ua/)

## Dependencies
- cli:
   [nodejs](https://nodejs.org/),
   [npm](https://www.npmjs.com/),
   [bower](https://bower.io/),
   [gulp-cli](https://www.npmjs.com/package/gulp-cli) ([website](https://gulpjs.com/))
- git:
   [bootstrap-sass](https://github.com/twbs/bootstrap-sass)
- npm:
   [gulp](https://www.npmjs.com/package/gulp),
   [gulp-util](https://www.npmjs.com/package/gulp-util),
   [gulp-include](https://www.npmjs.com/package/gulp-include),
   [gulp-sass](https://www.npmjs.com/package/gulp-sass),
   [gulp-concat](https://www.npmjs.com/package/gulp-concat),
   [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer),
   [gulp-watch](https://www.npmjs.com/package/gulp-watch),
   [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps),
   [gulp-rigger](https://www.npmjs.com/package/gulp-rigger),
   [gulp-uglify](https://www.npmjs.com/package/gulp-uglify),
   [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css),
   [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin),
   [gulp-template](https://www.npmjs.com/package/gulp-template),
   [rimraf](https://www.npmjs.com/package/rimraf),
   [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant),
   [browser-sync](https://www.npmjs.com/package/browser-sync)

[gulp](https://gulpjs.com/), [sass](http://sass-lang.com/)

## Init
Install dependencies at first
```bash
> bower i && npm i
```

## Build
Use these console commands to start build process:

```bash
# starts 'build','webserver','watch' tasks
> gulp
# or same
> gulp default

# build entire project
> gulp build

# build entire project in 'product' mode
> gulp build --type pro 

# watching what the files was changed then compile it to 'build' folder
> gulp watch

# Build Partials

# build html files
> gulp build:html

# build stylesheets
> gulp build:css

# build JavaScript
> gulp build:js

# build/copy images
> gulp build:images

# just copy fonts from source to build directory
> gulp build:fonts

# copy favicon.ico and other files
> gulp build:other
```
