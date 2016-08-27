require 'sinatra' 
require 'net/http'

set :port, ENV['PORT']

get '/' do 
  send_file 'index.html'
end

get '/lib/:file' do
  send_file "./lib/#{params[:file]}"
end

get '/:username/media' do
  target = "https://www.instagram.com/#{params[:username]}/media/?max_id=16"
  uri = URI(target)
  Net::HTTP.get(uri)
end
