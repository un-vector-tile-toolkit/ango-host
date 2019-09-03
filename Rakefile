task :start do
  sh "hjson htdocs/style.hjson > htdocs/style.json"
  sh "pm2 start process.yml"
end

task :stop do
  sh "pm2 stop ango; pm2 delete ango"
end

