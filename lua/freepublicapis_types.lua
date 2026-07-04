-- Typed models for the Freepublicapis SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Api
---@field auth? string
---@field avg_response_time? number
---@field cor? boolean
---@field created_at? string
---@field description? string
---@field documentation_url? string
---@field endpoint? table
---@field error_rate? number
---@field http? boolean
---@field id? number
---@field last_checked? string
---@field method? string
---@field path? string
---@field reliability? number
---@field tag? table
---@field title? string
---@field url? string

---@class ApiLoadMatch
---@field id number

---@class ApiListMatch

local M = {}

return M
