-- Typed models for the Freepublicapis SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Api
---@field auth? string
---@field avgResponseTime? number
---@field cors? boolean
---@field createdAt? string
---@field description? string
---@field documentationUrl? string
---@field endpoints? table
---@field errorRate? number
---@field https? boolean
---@field id? number
---@field lastChecked? string
---@field reliability? number
---@field tags? table
---@field title? string
---@field url? string

---@class ApiLoadMatch
---@field id number

---@class ApiListMatch
---@field limit? number
---@field page? number
---@field sort? string

local M = {}

return M
