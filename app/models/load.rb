class Load

  attr_accessor :state
  attr_accessor :uuid

  CREATED = "created"

  def initialize(params = {})
    if params.blank?
      self.uuid = SecureRandom.hex(10)
      self.state = CREATED
    else
      params.keys.each { |key| self.send("#{key}=", params[key]) }
    end
  end

  def save
    redis_client = Redis.new
    redis_client.set self.uuid , self.to_json
  end

  def self.find(uuid)
    redis_client = Redis.new
    string_object = redis_client.get (uuid)
    return string_object.nil? ? nil : ( Load.new JSON.parse ( string_object ) )
  end

  def self.first
    Load.new JSON.parse ( Redis.new.get (redis_client.keys.first) )
  end

end