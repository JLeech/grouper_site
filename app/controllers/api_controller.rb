class ApiController < ApplicationController
  
  def gene_names
    data = GenesOrgs.where("name ~ '^"+params[:query]+"'").limit(10).map{ |val| {"name"=>val[:name]} }
    render json: data.to_json
  end

  def organism_names
    if params[:query].blank?
      render json: {}.to_json 
    else
      data = Organisms.where("name ~ '^"+params[:query]+"'").limit(10).map{ |val| {"name"=>val[:name], "id"=>val[:id]} }
      render json: data.to_json
    end
  end

end