# frozen_string_literal: true

# Typed models for the Freepublicapis SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Api entity data model.
#
# @!attribute [rw] auth
#   @return [String, nil]
#
# @!attribute [rw] avg_response_time
#   @return [Integer, nil]
#
# @!attribute [rw] cor
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] documentation_url
#   @return [String, nil]
#
# @!attribute [rw] endpoint
#   @return [Array, nil]
#
# @!attribute [rw] error_rate
#   @return [Float, nil]
#
# @!attribute [rw] http
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_checked
#   @return [String, nil]
#
# @!attribute [rw] method
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] reliability
#   @return [Float, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Api = Struct.new(
  :auth,
  :avg_response_time,
  :cor,
  :created_at,
  :description,
  :documentation_url,
  :endpoint,
  :error_rate,
  :http,
  :id,
  :last_checked,
  :method,
  :path,
  :reliability,
  :tag,
  :title,
  :url,
  keyword_init: true
)

# Request payload for Api#load.
#
# @!attribute [rw] id
#   @return [Integer]
ApiLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Api#list (any subset of Api fields).
#
# @!attribute [rw] auth
#   @return [String, nil]
#
# @!attribute [rw] avg_response_time
#   @return [Integer, nil]
#
# @!attribute [rw] cor
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] documentation_url
#   @return [String, nil]
#
# @!attribute [rw] endpoint
#   @return [Array, nil]
#
# @!attribute [rw] error_rate
#   @return [Float, nil]
#
# @!attribute [rw] http
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_checked
#   @return [String, nil]
#
# @!attribute [rw] method
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] reliability
#   @return [Float, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
ApiListMatch = Struct.new(
  :auth,
  :avg_response_time,
  :cor,
  :created_at,
  :description,
  :documentation_url,
  :endpoint,
  :error_rate,
  :http,
  :id,
  :last_checked,
  :method,
  :path,
  :reliability,
  :tag,
  :title,
  :url,
  keyword_init: true
)

