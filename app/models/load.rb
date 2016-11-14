class Load

  include Mongoid::Document

  CREATED = "created"

  field :state, type: String, default: CREATED
  field :email, type: String

  def save_file(params)
    uploaded_io = params[:load][:file]
    File.open(Rails.root.join(PipelineManager::UPLOAD_PATH, self.id), 'wb') do |file|
      file.write(uploaded_io.read)
    end
  end

  def update_redis(state = CREATED)
    redis_client = Redis.new
    redis_client.set self.id, state
  end

  def start
    PipelineManagerJob.perform_later self.id.to_s
  end

  def self.get_state(id)
    redis_client = Redis.new
    current_state = redis_client.get id
    if current_state.nil?
      load = Load.find(id)
      return nil if load.nil?
      
      redis_client.set load.id, load.state
      return load.state
    end
    return current_state
  end

  def self.update_state!(id, state)
    load = Load.find(id)
    load.state = state
    load.save!

    redis_client = Redis.new
    redis_client.set id, state
  end

  def self.clear_all
    Load.delete_all
    Redis.new.flushall
  end

end
