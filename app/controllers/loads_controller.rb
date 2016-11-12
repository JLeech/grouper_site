class LoadsController < ApplicationController
  
  def new
    @uid = SecureRandom.hex(10)
    @load = Load.new
  end

  def show
    @load = Load.find_by_uid( params[:id] )
  end

  def create
    @load = Load.new(load_params)
    #upload
  end

  def upload
    uploaded_io = params[:load][:file]
    File.open(Rails.root.join('public', 'uploads', uploaded_io.original_filename), 'wb') do |file|
      file.write(uploaded_io.read)
    end
  end


  private

  def load_params
    params.require(:load).permit(:email)
  end

end