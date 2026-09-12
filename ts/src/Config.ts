
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Freepublicapis',
        slug: "freepublicapis",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://www.freepublicapis.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      api: {
      },

    }
  }


  entity = {
    "api": {
      "fields": [
        {
          "name": "auth",
          "short": "Authentication method required",
          "type": "`$STRING`"
        },
        {
          "name": "avgResponseTime",
          "short": "Average response time in milliseconds",
          "type": "`$INTEGER`"
        },
        {
          "name": "cors",
          "short": "Whether CORS is enabled",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "short": "When the API was added to the directory",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Description of what the API does",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "documentationUrl",
          "short": "URL to the API documentation",
          "type": "`$STRING`"
        },
        {
          "name": "endpoints",
          "short": "Available endpoints for this API",
          "type": "`$ARRAY`"
        },
        {
          "format": "float",
          "name": "errorRate",
          "short": "Error rate percentage",
          "type": "`$NUMBER`"
        },
        {
          "name": "https",
          "short": "Whether the API supports HTTPS",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the API",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "lastChecked",
          "short": "When the API was last checked for availability",
          "type": "`$STRING`"
        },
        {
          "name": "method",
          "type": "`$STRING`"
        },
        {
          "name": "path",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "reliability",
          "short": "Reliability percentage based on monitoring",
          "type": "`$NUMBER`"
        },
        {
          "name": "tags",
          "short": "Categories/tags associated with the API",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "short": "Name of the API",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "url",
          "short": "Base URL of the API",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "api",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "best",
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/apis",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "apis"
                }
              ],
              "select": {
                "exist": [
                  "limit",
                  "page",
                  "sort"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "api",
                "apis"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/random",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "random"
                }
              ],
              "select": {
                "$action": "random"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "random"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": 275,
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/apis/{id}",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "apis"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "apis",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

