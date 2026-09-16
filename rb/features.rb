# Freepublicapis SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FreepublicapisFeatures
  def self.make_feature(name)
    case name
    when "base"
      FreepublicapisBaseFeature.new
    when "ratelimit"
      FreepublicapisRatelimitFeature.new
    when "retry"
      FreepublicapisRetryFeature.new
    when "test"
      FreepublicapisTestFeature.new
    when "timeout"
      FreepublicapisTimeoutFeature.new
    else
      FreepublicapisBaseFeature.new
    end
  end
end
