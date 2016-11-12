class Load

  include Mongoid::Document

  CREATED = "created"

  field :state, type: String, default: CREATED
  field :uuid, type: String
  field :email, type: String


  def self.new_with_uid
  	return Load.new({uuid: uid})
  end


end

#    <h1 class='loadinfo'> we support orthologs files in txt format from NCBI Annotation Pipeline </h1>