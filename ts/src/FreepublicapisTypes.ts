// Typed models for the Freepublicapis SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Api {
  auth?: string
  avgResponseTime?: number
  cors?: boolean
  createdAt?: string
  description?: string
  documentationUrl?: string
  endpoints?: any[]
  errorRate?: number
  https?: boolean
  id?: number
  lastChecked?: string
  reliability?: number
  tags?: any[]
  title?: string
  url?: string
}

export interface ApiLoadMatch {
  id: number
}

export interface ApiListMatch {
  limit?: number
  page?: number
  sort?: string

  // Selects a custom action instead of the plain list:
  //   'random'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

