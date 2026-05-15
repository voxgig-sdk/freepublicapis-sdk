# Freepublicapis SDK exists test

require "minitest/autorun"
require_relative "../Freepublicapis_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = FreepublicapisSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
