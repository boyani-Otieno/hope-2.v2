class Api::V1::HealthCheckController < ApplicationController
    def index
    render json: { 
      status: 'online', 
      message: 'Connection Successful! Rails is talking to React.' 
    }
  end
end
