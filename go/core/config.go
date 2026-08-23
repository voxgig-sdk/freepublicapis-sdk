package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Freepublicapis",
			"slug": "freepublicapis",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://www.freepublicapis.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"api": map[string]any{},
			},
		},
		"entity": map[string]any{
			"api": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth",
						"short": "Authentication method required",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "avgResponseTime",
						"short": "Average response time in milliseconds",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "cors",
						"short": "Whether CORS is enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "createdAt",
						"short": "When the API was added to the directory",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Description of what the API does",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "documentationUrl",
						"short": "URL to the API documentation",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "endpoints",
						"short": "Available endpoints for this API",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "errorRate",
						"short": "Error rate percentage",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "https",
						"short": "Whether the API supports HTTPS",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the API",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "lastChecked",
						"short": "When the API was last checked for availability",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "method",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "path",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reliability",
						"short": "Reliability percentage based on monitoring",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "tags",
						"short": "Categories/tags associated with the API",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"short": "Name of the API",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "Base URL of the API",
						"type": "`$STRING`",
					},
				},
				"name": "api",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "best",
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/apis",
								"parts": []any{
									"api",
									"apis",
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
										"sort",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/random",
								"parts": []any{
									"api",
									"random",
								},
								"select": map[string]any{
									"$action": "random",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 275,
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/apis/{id}",
								"parts": []any{
									"api",
									"apis",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
