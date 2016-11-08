class LoadsController < ApplicationController
  
  def new
  	puts "WAHAHAHAH"
  end

  def show
  	@load = Load.find( params["id"] )
  	puts @load
  end

  def create

  end

end