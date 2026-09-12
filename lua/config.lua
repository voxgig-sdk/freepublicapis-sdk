-- Freepublicapis SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Freepublicapis",
      slug = "freepublicapis",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://www.freepublicapis.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["api"] = {},
      },
    },
    entity = {
      ["api"] = {
        ["fields"] = {
          {
            ["name"] = "auth",
            ["short"] = "Authentication method required",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "avgResponseTime",
            ["short"] = "Average response time in milliseconds",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "cors",
            ["short"] = "Whether CORS is enabled",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "createdAt",
            ["short"] = "When the API was added to the directory",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["short"] = "Description of what the API does",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "documentationUrl",
            ["short"] = "URL to the API documentation",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "endpoints",
            ["short"] = "Available endpoints for this API",
            ["type"] = "`$ARRAY`",
          },
          {
            ["format"] = "float",
            ["name"] = "errorRate",
            ["short"] = "Error rate percentage",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "https",
            ["short"] = "Whether the API supports HTTPS",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the API",
            ["type"] = "`$INTEGER`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "lastChecked",
            ["short"] = "When the API was last checked for availability",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "method",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "path",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "float",
            ["name"] = "reliability",
            ["short"] = "Reliability percentage based on monitoring",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "tags",
            ["short"] = "Categories/tags associated with the API",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "title",
            ["short"] = "Name of the API",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["short"] = "Base URL of the API",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "api",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "best",
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/apis",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "apis",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "limit",
                    "page",
                    "sort",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
                ["parts"] = {
                  "api",
                  "apis",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/random",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "random",
                  },
                },
                ["select"] = {
                  ["$action"] = "random",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "random",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = 275,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/apis/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "apis",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "apis",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
