// Typed models for the Freepublicapis SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Api is the typed data model for the api entity.
type Api struct {
	Auth *string `json:"auth,omitempty"`
	AvgResponseTime *int `json:"avg_response_time,omitempty"`
	Cor *bool `json:"cor,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	DocumentationUrl *string `json:"documentation_url,omitempty"`
	Endpoint *[]any `json:"endpoint,omitempty"`
	ErrorRate *float64 `json:"error_rate,omitempty"`
	Http *bool `json:"http,omitempty"`
	Id *int `json:"id,omitempty"`
	LastChecked *string `json:"last_checked,omitempty"`
	Method *string `json:"method,omitempty"`
	Path *string `json:"path,omitempty"`
	Reliability *float64 `json:"reliability,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	Title *string `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ApiLoadMatch is the typed request payload for Api.LoadTyped.
type ApiLoadMatch struct {
	Id int `json:"id"`
}

// ApiListMatch mirrors the api fields as an all-optional match
// filter (Go analog of Partial<Api>).
type ApiListMatch struct {
	Auth *string `json:"auth,omitempty"`
	AvgResponseTime *int `json:"avg_response_time,omitempty"`
	Cor *bool `json:"cor,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	DocumentationUrl *string `json:"documentation_url,omitempty"`
	Endpoint *[]any `json:"endpoint,omitempty"`
	ErrorRate *float64 `json:"error_rate,omitempty"`
	Http *bool `json:"http,omitempty"`
	Id *int `json:"id,omitempty"`
	LastChecked *string `json:"last_checked,omitempty"`
	Method *string `json:"method,omitempty"`
	Path *string `json:"path,omitempty"`
	Reliability *float64 `json:"reliability,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	Title *string `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
