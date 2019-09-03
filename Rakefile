task :build do
  sh "hjson -j htdocs/style.hjson > htdocs/style.json"
  sh "browserify -o htdocs/bundle.js -t " +
    "[ babelify --presets [ @babel/preset-env ] ] app.js"
end

task :start do
  sh "pm2 start process.yml"
end

task :stop do
  sh "pm2 stop ango; pm2 delete ango"
end

task :_mapbox do
  sh "cp ../mapbox-gl-js/dist/mapbox-gl.js htdocs"
  sh "cp ../mapbox-gl-js/dist/mapbox-gl.js.map htdocs"
  sh "cp ../mapbox-gl-js/dist/mapbox-gl.css htdocs"
end
  
