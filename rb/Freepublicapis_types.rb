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
# @!attribute [rw] avgResponseTime
#   @return [Integer, nil]
#
# @!attribute [rw] cors
#   @return [Boolean, nil]
#
# @!attribute [rw] createdAt
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] documentationUrl
#   @return [String, nil]
#
# @!attribute [rw] endpoints
#   @return [Array, nil]
#
# @!attribute [rw] errorRate
#   @return [Float, nil]
#
# @!attribute [rw] https
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] lastChecked
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
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Api = Struct.new(
  :auth,
  :avgResponseTime,
  :cors,
  :createdAt,
  :description,
  :documentationUrl,
  :endpoints,
  :errorRate,
  :https,
  :id,
  :lastChecked,
  :method,
  :path,
  :reliability,
  :tags,
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

# Request payload for Api#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
ApiListMatch = Struct.new(
  :limit,
  :page,
  :sort,
  keyword_init: true
)

