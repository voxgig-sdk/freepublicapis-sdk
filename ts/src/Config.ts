
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'Freepublicapis',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$STRING`"
        },
        {
          "name": "avgResponseTime",
          "type": "`$INTEGER`"
        },
        {
          "name": "cors",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "createdAt",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "type": "`$STRING`"
        },
        {
          "name": "documentationUrl",
          "type": "`$STRING`"
        },
        {
          "name": "endpoints",
          "type": "`$ARRAY`"
        },
        {
          "name": "errorRate",
          "type": "`$NUMBER`"
        },
        {
          "name": "https",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "id",
          "type": "`$INTEGER`"
        },
        {
          "name": "lastChecked",
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
          "name": "reliability",
          "type": "`$NUMBER`"
        },
        {
          "name": "tags",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "api",
                "apis"
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
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/random",
              "parts": [
                "api",
                "random"
              ],
              "select": {
                "$action": "random"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "api",
                "apis",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
  config
}

