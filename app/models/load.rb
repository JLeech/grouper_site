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
    Redis.new.set self.uuid , self.to_json
  end

  def self.find(uuid)
    string_object = Redis.new.get (uuid)
    return string_object.nil? ? nil : ( Load.new JSON.parse ( string_object ) )
  end

  def self.first
    redis_client = Redis.new
    return redis_client.keys.blank? ? nil : ( Load.new JSON.parse ( redis_client.get (redis_client.keys.first) ) )
  end

  def self.delete_all
    Redis.new.flushall
  end

end