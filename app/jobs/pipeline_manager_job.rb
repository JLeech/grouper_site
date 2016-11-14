class PipelineManagerJob < ActiveJob::Base
  queue_as :default

  def perform(load_id)
    pipeline_manager = PipelineManager.new(load_id)
    pipeline_manager.start_pipeline
  end
end