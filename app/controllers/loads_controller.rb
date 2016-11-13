class LoadsController < ApplicationController
  
  def new
    @load = Load.new
  end

  def show
    @state = Load.get_state(params[:id])
  end

  def create
    @load = Load.new(load_params)
    @load.save_file(params)
    if @load.save!
      @load.update_redis
      @load.start
      redirect_to action: "show", id: @load.id
    else
      redirect_to action: 'new'
    end
  end

  private

  def load_params
    params.require(:load).permit(:email)
  end

end