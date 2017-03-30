class ApiController < ApplicationController
  
  # def gene_names
  #   data = GenesOrgs.where("name ~ '^"+params[:query]+"'").limit(10).map{ |val| {"name"=>val[:name]} }
  #   render json: data.to_json
  # end

  # def organism_names
  #   if params[:query].blank?
  #     render json: {}.to_json 
  #   else
  #     data = Organisms.where("name ~ '^"+params[:query]+"'").limit(10).map{ |val| {"name"=>val[:name], "id"=>val[:id]} }
  #     render json: data.to_json
  #   end
  # end

  # def filter_button
  #   puts "P : #{params[:column]}"
  #   respond_to do |format|
  #     format.html {render layout: "filter_button"}
  #   end
  # end

  # def sql_rules
  #   puts "#{params[:rules]}"
  #   #@xx = SqlMaker.make_request(params[:rules]).to_s
  #   @xx = "#{JSON.parse(SqlMaker.make_request(params[:rules]))['sql']}"
  #   puts @xx
  #   respond_to do |format|
  #     format.js
  #   end
  # end

end
