// Typed models for the Freepublicapis SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Api {
  auth?: string
  avg_response_time?: number
  cor?: boolean
  created_at?: string
  description?: string
  documentation_url?: string
  endpoint?: any[]
  error_rate?: number
  http?: boolean
  id?: number
  last_checked?: string
  method?: string
  path?: string
  reliability?: number
  tag?: any[]
  title?: string
  url?: string
}

export interface ApiLoadMatch {
  id: number
}

export type ApiListMatch = Partial<Api>

