#!/usr/bin/bash

# USING PACKAGES:

# Bootstrap for Sass:
# https://github.com/twbs/bootstrap-sass
#
# Gulp Packages:
# https://www.npmjs.com/
#
# gulp
# https://www.npmjs.com/package/gulp
#
# gulp-util
# https://www.npmjs.com/package/gulp-util
#
# gulp-concat
# https://www.npmjs.com/package/gulp-concat
#
# gulp-watch
# https://www.npmjs.com/package/gulp-watch
#
# gulp-autoprefixer
# https://www.npmjs.com/package/gulp-autoprefixer
#
# gulp-sourcemaps
# https://www.npmjs.com/package/gulp-sourcemaps
#
# gulp-include
# https://www.npmjs.com/package/gulp-include
#
# gulp-rigger
# https://www.npmjs.com/package/gulp-rigger
#
# gulp-uglify
# https://www.npmjs.com/package/gulp-uglify
#
# gulp-clean-css
# https://www.npmjs.com/package/gulp-clean-css
#
# gulp-sass
# https://www.npmjs.com/package/gulp-sass
#
# gulp-imagemin
# https://www.npmjs.com/package/gulp-imagemin
#
# imagemin-pngquant
# https://www.npmjs.com/package/imagemin-pngquant
#
# gulp-template
# https://www.npmjs.com/package/gulp-template
#
# rimraf
# https://www.npmjs.com/package/rimraf
#
# browser-sync
# https://www.npmjs.com/package/browser-sync


# BIG INSTALL
#
# IF YOU HAVE NOT INSTALLED Nodejs
# PLEASE READ THE INSTRUCTION BELOW
# AND INSTALL IT STEP BY STEP
#
# 1. Install Nodejs & npm
#
# 2. Fix npm permissions
#    https://docs.npmjs.com/getting-started/fixing-npm-permissions
#
# 3. Install bower
#    https://bower.io/
#    > npm install -g bower
#
# 4. Install Gulp cli
#    https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
#    > npm install --global gulp-cli
#
# 5. Install gulp packages:

# Install Bootstrap for Sass
bower i --save bootstrap-sass

# Install Gulp and Utils
npm i --save-dev \
    gulp \
    gulp-util \
    gulp-uglify \
    gulp-concat \
    gulp-autoprefixer \
    gulp-sourcemaps \
    gulp-rigger \
    gulp-sass

# gulp-uglify: Minifier for JS & CSS

# Install Minifiers for Images
npm i --save-dev \
    gulp-imagemin \
    imagemin-pngquant

# Install Browser Sync
npm i --save-dev browser-sync
