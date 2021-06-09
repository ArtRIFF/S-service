const {
  src,
  dest,
  watch,
  parallel,
  series
} = require("gulp"); //ищет в модулях  галп индекс
const scss = require("gulp-sass"),
  prefix = require("gulp-autoprefixer"),
  sync = require("browser-sync").create(),
  imagemin=require("gulp-imagemin"),
  uglify = require("gulp-uglify"),
  fi = require('gulp-file-include'),
  fs = require("fs");

  //HTML parts
  const fileinclude = function () {
return src (["app/pages/**/*.html"])
.pipe (
  fi({
     prefix: '@@',
  basepath: '@file'
  })
)
.pipe(dest("app"));
  };


  //!Создание файлов
  function createFiles () {
    createFolders();
    setTimeout(() => {
      fs.writeFile("newfolder/index.html","!", function (err) {
        if (err) {
          throw err;
        }
        console.log("File created");
      });
      fs.writeFile("newfolder/scss/style.scss","", function (err) {
        if (err) {
          throw err;
        }
        console.log("File created");
      });      
    }, 500);
  }

  //! Создание папок
function createFolders () {
  return src("*.*",{read:false})
  .pipe(dest("./newfolder/scss"))
  .pipe(dest("./newfolder/js"))
  .pipe(dest("./newfolder/img"))
  .pipe(dest("./newfolder/fonts"));
}

//!Dev
function convertStyles() {
  return src('app/scss/style.scss')
    .pipe(scss({
      outputStyle: 'compressed'
    }))
    .pipe(prefix({
      cascade: true,
      flex: true,
      grid: true
    }))
    .pipe(dest('app/css'));
}

function uglifyJS() {
  return src('app/js_original/*.js')
  .pipe(uglify())
  .pipe(dest("app/js/"));
}

function imagesCompressed() {
  return src('app/_img/*.{jpg,png,svg}')
  .pipe(imagemin())
  .pipe(dest("app/img"));
}

function browserSync() {
  sync.init({
    server: {
      baseDir: "app",
      open: "local"
    }
  });
}

function watchFiles() {
  watch('app/scss/**/*.scss', convertStyles);
  watch('app/pages/**/*.html', fileinclude);
  watch('app/*.html').on("change", sync.reload);
  watch('app/css/*.css').on("change", sync.reload);
  watch('app/js/*.js').on("change", sync.reload);
  watch('app/js_original/*.js',uglifyJS);
  watch('app/_img',imagesCompressed);
}

//!Build
function moveHtml () {
  return src ("app/*.html")
  .pipe(dest("dist"));
}

function moveCss () {
  return src ("app/css/*.css")
  .pipe(dest("dist/css"));
}

function moveJs () {
  return src ("app/js/*.js")
  .pipe(dest("dist/js"));
}

function moveImg () {
  return src ("app/img/*")
  .pipe(dest("dist/img"));
}



exports.convertStyles = convertStyles;
exports.watchFiles = watchFiles;
exports.browserSync = browserSync;
exports.imagesCompressed = imagesCompressed;
exports.moveHtml = moveHtml;
exports.moveCss = moveCss;
exports.moveJs = moveJs;
exports.moveImg = moveImg;
exports.fileinclude = fileinclude;

//Папки и файлы
exports.struct = createFiles;

exports.default = parallel(fileinclude,convertStyles,watchFiles,browserSync,uglifyJS);
exports.build = series (moveHtml,moveCss,moveJs,moveImg);

