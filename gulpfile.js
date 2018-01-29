//const path = require('path');
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    prefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    //rimraf = require('rimraf'),
    browserSync = require('browser-sync').create();


var settings = {

    // https://www.browsersync.io/docs/gulp
    // https://browsersync.io/docs/options
    // https://github.com/Browsersync/browser-sync
    browserSync: {
        //server: './build'
        server: {
            baseDir: './build'
        }
        // tunnel: true,
        // host: 'localhost',
        // port: 9000,
        // logPrefix: 'frontend'
    },

    // Sass
    // https://github.com/dlmanning/gulp-sass
    // https://www.npmjs.com/package/gulp-sass
    //
    // Different Sass Output Styles:
    // https://web-design-weekly.com/2014/06/15/different-sass-output-styles/
    sass: {
        includePaths: ['source/scss/'],
        errLogToConsole: true,
        sourceMap: (gutil.env.type == 'pro'),
        outputStyle: (gutil.env.type == 'pro'
            ?'compressed':'expanded')
    },

    path: {
        src: {
            html:  'source/template/**/*.html',
            css:   'source/scss/theme.scss',
            js:    'source/js/app.js',
            img:   'source/img',
            fonts: 'source/fonts/**/*.*'
        },

        build: {
            html:  'build',
            css:   'build/assets/css',
            js:    'build/assets/js',
            img:   'build/assets/img',
            fonts: 'build/assets/fonts'
        },

        watch: {
            html:  'source/template/**/*.html',
            css:   'source/scss/**/*.scss',
            js:    'source/js/**/*.js',
            img:   'source/img/**/*.*',
            fonts: 'source/fonts/**/*.*'
        }
    }
};


gulp.task('webserver', function() {
    browserSync.init(settings.browserSync);
});


gulp.task('build:html', function() {
    return gulp.src('source/template/*.html')
	    .pipe(rigger())
	    .pipe(gulp.dest(settings.path.build.html))
        .pipe(browserSync.stream());
});


gulp.task('build:css', function() {

    // Unminified css file in product version
    if (gutil.env.type == 'pro') {
        gulp.src(settings.path.src.css)
            .pipe(sass({outputStyle:'expanded'}))
            .pipe(prefixer())
            .pipe(gulp.dest(settings.path.build.css));
    }

    return gulp.src(settings.path.src.css)
        // Process the original sources
        .pipe(gutil.env.type != 'pro'
            ?sourcemaps.init() :gutil.noop())

        .pipe(sass(settings.sass))
        .pipe(prefixer())

        // Add the map to modified source
        .pipe(gutil.env.type != 'pro'
            ?sourcemaps.write() :gutil.noop())

        .pipe(concat('theme.min.css'))
        .pipe(gulp.dest(settings.path.build.css))
        .pipe(browserSync.stream());
});


gulp.task('build:js', function() {
    // Copy jQuery file
    gulp.src('bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest(settings.path.build.js));

    // Unminified version copy in product version
    if (gutil.env.type == 'pro') {
        gulp.src(settings.path.src.js)
            .pipe(rigger())
            .pipe(concat('app.js'))
            .pipe(gulp.dest(settings.path.build.js))
            .pipe(browserSync.stream());
    }

    // Build Template
    return gulp.src(settings.path.src.js)
        .pipe(rigger())
        // Uglify if gulp is ran with '--type pro'
        .pipe(gutil.env.type != 'pro' ?sourcemaps.init() :gutil.noop())
        .pipe(gutil.env.type == 'pro' ?uglify() :gutil.noop())
        .pipe(gutil.env.type != 'pro' ?sourcemaps.write() :gutil.noop())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(settings.path.build.js))
        .pipe(browserSync.stream());
});


gulp.task('build:images', function() {
    var result;

    // Compress images
    //gulp.src(settings.path.src.img+'/assets/**/*.*')
    //    .pipe(imagemin({
    //        progressive: true,
    //        svgoPlugins: [{removeViewBox: false}],
    //        use: [pngquant()],
    //        interlaced: true
    //    }))
    //    .pipe(gulp.dest(settings.path.build.img));

    result = gulp.src('source/img/assets/**/*.*')
        .pipe(gulp.dest('build/assets/img'))
        .pipe(browserSync.stream());

    result &= gulp.src('source/img/media/**/*.*')
        .pipe(gulp.dest('build/img'))
        .pipe(browserSync.stream());

    // return gulp.pipe(browserSync.stream());
    return result;
});


gulp.task('build:fonts', function() {
    return gulp.src(settings.path.src.fonts)
        .pipe(gulp.dest(settings.path.build.fonts))
        .pipe(browserSync.stream());
});


gulp.task('build:other', function() {
    return gulp.src([
        'source/.htaccess',
        'source/favicon.ico'
    ])
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
});


gulp.task('build', [
    'build:html',
    'build:css',
    'build:js',
    'build:images',
    'build:fonts',
    'build:other'
]);


gulp.task('watch', function() {
    gulp.watch(settings.path.watch.html, ['build:html'])
        .on('change', browserSync.reload);

    gulp.watch(settings.path.watch.css, ['build:css'])
        .on('change', browserSync.reload);

    gulp.watch(settings.path.watch.js, ['build:js'])
        .on('change', browserSync.reload);

    gulp.watch(settings.path.watch.img, ['build:img'])
        .on('change', browserSync.reload);

    gulp.watch(settings.path.watch.fonts, ['build:fonts'])
        .on('change', browserSync.reload);

    // Uncomment if need watching other files
    //gulp.watch(settings.path.watch.fonts, ['build:other'])
    //    .on('change', browserSync.reload);
});


gulp.task('default', ['build', 'webserver', 'watch']);
