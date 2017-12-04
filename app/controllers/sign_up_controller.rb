class SignUpController < ApplicationController

  def index
  end

  def action
    data = JSON.parse(request.body.read)
    user_name = data['user_name']
    password = data['password']
    puts user_name
    puts ' and '
    puts password
    json_body = {status: 'ok'}
    render json: json_body
  end

end
