# EDOR Html template
This Html template and the logotype was developed for the [EDOR company](https://www.instagram.com/edor.com.ua/).
The template is based on [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5), [CSS3](https://developer.mozilla.org/en-US/docs/Archive/CSS3), [SCSS](https://sass-lang.com/), [Bootstrap 3](https://getbootstrap.com/docs/3.3/), and [Gulp](https://gulpjs.com/) usage as streaming build system on Node.js

## Init
```bash
bower i && npm i
```

## Build
Use these console commands to start build process:

```bash
# Run it to build the project and start the watcher
gulp

# Run it to build the entire project
gulp build

# Run it to build entire project in 'product' mode
gulp build --type pro 

# Start watching the files
gulp watch

# Partials build
gulp build:html
gulp build:css
gulp build:js

# Partials copy
gulp build:images
gulp build:fonts
gulp build:other
```
