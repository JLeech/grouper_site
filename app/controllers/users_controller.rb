class UsersController < ApplicationController
  
  def index
    @users = User.all
  end
  
  def new
  	puts "WAHAHAHAH"
  end


end