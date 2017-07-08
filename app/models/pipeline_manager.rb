# require 'fileutils'

# class PipelineManager

#   GENES_LOCATIONS_LOADED = 'step 1/5 completed. genes locations loaded'
#   GBK_FILES_LOADED = 'step 2/5 completed. gbk files loaded'

#   UPLOAD_PATH = 'public/uploads'
#   GENE_IDS_PATHS = 'public/gene_ids'
#   GENE_GBK_PATHS = 'public/gbks'
#   SOURCE_PATH = 'public/pipeline_sources'


#   attr_accessor :load_id
#   attr_accessor :state

#   def initialize(load_id, state = Load::CREATED)
#     self.load_id = load_id
#     self.state = state
#     check_folder_existence
#   end

#   def start_pipeline
#     get_gene_location
#     get_gbk_files
#   end

#   def get_gene_location
#     file_path = Rails.root.join(UPLOAD_PATH, self.load_id)
#     result_path = Rails.root.join(GENE_IDS_PATHS, self.load_id)
#     get_gene_location_source = Rails.root.join(SOURCE_PATH,'get_gene_location.py')
#     `python #{get_gene_location_source} #{file_path} #{result_path}`
#     update_state(GENES_LOCATIONS_LOADED)
#   end

#   def get_gbk_files
#     file_path = Rails.root.join( GENE_IDS_PATHS, self.load_id )
#     result_path = Rails.root.join( GENE_GBK_PATHS, self.load_id )
#     get_gbk_files_source = Rails.root.join(SOURCE_PATH,'get_gbk_file.py')
#     Dir.mkdir(result_path)
#     `python #{get_gbk_files_source} #{file_path} #{result_path}`
#     update_state(GBK_FILES_LOADED)
#   end

#   def check_folder_existence
#     folders = [UPLOAD_PATH, GENE_IDS_PATHS, GENE_GBK_PATHS]
#     folders.each do |folder_path|
#       directory_name = "#{Rails.root}/#{folder_path}"
#       Dir.mkdir(directory_name) unless File.exists?(directory_name)
#     end
#   end

#   def update_state(current_state)
#     Load.update_state!(self.load_id, current_state)
#   end

# end



