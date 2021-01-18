const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");
const sync = require("browser-sync").create();
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const postcss = require("gulp-postcss");
const plumber = require("gulp-plumber");
const autoprefixer = require("autoprefixer");
const csso = require("gulp-csso");
const svgstore = require("gulp-svgstore");
const sourcemap = require("gulp-sourcemaps");
const webp = require("gulp-webp");

// Styles
gulp.task("styles", () => {
    return gulp.src("source/sass/style.scss")
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([
          autoprefixer()
        ]))
        .pipe(csso())
        .pipe(rename("min.css"))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("build/css/"))
        .pipe(sync.stream());
});

gulp.task("clean", () => {
    return del([
        "css/main.css",
    ]);
});

// Html
gulp.task("html", () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build/."))
    .pipe(sync.stream());
});


gulp.task("clean", () => {
  return del("build");
});

// Images
gulp.task("images", () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
      .pipe(imagemin([
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.mozjpeg({progressive: true}),
        imagemin.svgo()
      ]));
});

// Webp
gulp.task("makewebp", () => {
  return gulp.src("source/img/**/*.{jpg,png}")
      .pipe(webp({quality: 90}))
      .pipe(gulp.dest("source/img"));
});

// Sprite
gulp.task("sprite", () => {
  return gulp.src("source/img/**/icon-*.svg")
      .pipe(svgstore())
      .pipe(rename("sprite.svg"))
      .pipe(gulp.dest("build/img"))
});

// Server
gulp.task("server", (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
});

// Watcher

gulp.task("watcher", () => {
  gulp.watch("source/sass/**/*.scss", (done) => {
      gulp.series(["styles"])(done);
  });
  gulp.watch("source/js/*.js", (done) => {
    gulp.series(["js"])(done);
});
gulp.watch("source/*.html", (done) => {
  gulp.series(["html"])(done);
});
});

gulp.task("copy", () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
    "source/*.ico"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("build", gulp.series(["clean", "copy", "styles", "html", "sprite", "images", "makewebp"]));
gulp.task("start", gulp.series(["clean", "copy", "styles", "html", "sprite", "images", "makewebp", "server", "watcher"]));
