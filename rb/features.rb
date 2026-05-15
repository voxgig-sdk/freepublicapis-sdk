# Freepublicapis SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module FreepublicapisFeatures
  def self.make_feature(name)
    case name
    when "base"
      FreepublicapisBaseFeature.new
    when "test"
      FreepublicapisTestFeature.new
    else
      FreepublicapisBaseFeature.new
    end
  end
end
