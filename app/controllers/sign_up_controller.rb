class SignUpController < ApplicationController

  def index
  end

  def action
    puts request.body.read
    json_body = {status: 'ok'}
    render json: json_body
  end

end
