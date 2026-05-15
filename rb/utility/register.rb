# Freepublicapis SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FreepublicapisUtility.registrar = ->(u) {
  u.clean = FreepublicapisUtilities::Clean
  u.done = FreepublicapisUtilities::Done
  u.make_error = FreepublicapisUtilities::MakeError
  u.feature_add = FreepublicapisUtilities::FeatureAdd
  u.feature_hook = FreepublicapisUtilities::FeatureHook
  u.feature_init = FreepublicapisUtilities::FeatureInit
  u.fetcher = FreepublicapisUtilities::Fetcher
  u.make_fetch_def = FreepublicapisUtilities::MakeFetchDef
  u.make_context = FreepublicapisUtilities::MakeContext
  u.make_options = FreepublicapisUtilities::MakeOptions
  u.make_request = FreepublicapisUtilities::MakeRequest
  u.make_response = FreepublicapisUtilities::MakeResponse
  u.make_result = FreepublicapisUtilities::MakeResult
  u.make_point = FreepublicapisUtilities::MakePoint
  u.make_spec = FreepublicapisUtilities::MakeSpec
  u.make_url = FreepublicapisUtilities::MakeUrl
  u.param = FreepublicapisUtilities::Param
  u.prepare_auth = FreepublicapisUtilities::PrepareAuth
  u.prepare_body = FreepublicapisUtilities::PrepareBody
  u.prepare_headers = FreepublicapisUtilities::PrepareHeaders
  u.prepare_method = FreepublicapisUtilities::PrepareMethod
  u.prepare_params = FreepublicapisUtilities::PrepareParams
  u.prepare_path = FreepublicapisUtilities::PreparePath
  u.prepare_query = FreepublicapisUtilities::PrepareQuery
  u.result_basic = FreepublicapisUtilities::ResultBasic
  u.result_body = FreepublicapisUtilities::ResultBody
  u.result_headers = FreepublicapisUtilities::ResultHeaders
  u.transform_request = FreepublicapisUtilities::TransformRequest
  u.transform_response = FreepublicapisUtilities::TransformResponse
}
