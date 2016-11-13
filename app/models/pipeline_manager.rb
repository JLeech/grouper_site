class PipelineManager

  GENES_LOCATIONS_LOADED = 'genes locations loaded'

  UPLOAD_PATH = 'public/uploads'
  GENE_IDS_PATHS = 'public/gene_ids'
  SOURCE_PATH = 'public/pipeline_sources'

  attr_accessor :load_id
  attr_accessor :state

  def initialize(load_id, state = Load::CREATED)
    self.load_id = load_id
    self.state = state
  end

  def get_gene_location
    file_path = Rails.root.join(UPLOAD_PATH, self.load_id)
    result_path = Rails.root.join(GENE_IDS_PATHS, self.load_id)
    get_gene_location_source = Rails.root.join(SOURCE_PATH,'get_gene_location.py')
    `python #{get_gene_location_source} #{file_path} #{result_path}`
    Load.update_state!(self.load_id, GENES_LOCATIONS_LOADED)
  end
end