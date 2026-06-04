# Freepublicapis SDK configuration

module FreepublicapisConfig
  def self.make_config
    {
      "main" => {
        "name" => "Freepublicapis",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://www.freepublicapis.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "api" => {},
        },
      },
      "entity" => {
        "api" => {
          "fields" => [
            {
              "name" => "auth",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "avg_response_time",
              "req" => false,
              "type" => "`$INTEGER`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "cor",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "created_at",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 3,
            },
            {
              "name" => "description",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 4,
            },
            {
              "name" => "documentation_url",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 5,
            },
            {
              "name" => "endpoint",
              "req" => false,
              "type" => "`$ARRAY`",
              "active" => true,
              "index$" => 6,
            },
            {
              "name" => "error_rate",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 7,
            },
            {
              "name" => "http",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 8,
            },
            {
              "name" => "id",
              "req" => false,
              "type" => "`$INTEGER`",
              "active" => true,
              "index$" => 9,
            },
            {
              "name" => "last_checked",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 10,
            },
            {
              "name" => "method",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 11,
            },
            {
              "name" => "path",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 12,
            },
            {
              "name" => "reliability",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 13,
            },
            {
              "name" => "tag",
              "req" => false,
              "type" => "`$ARRAY`",
              "active" => true,
              "index$" => 14,
            },
            {
              "name" => "title",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 15,
            },
            {
              "name" => "url",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 16,
            },
          ],
          "name" => "api",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "example" => "best",
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/api/apis",
                  "parts" => [
                    "api",
                    "apis",
                  ],
                  "select" => {
                    "exist" => [
                      "limit",
                      "page",
                      "sort",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
                {
                  "method" => "GET",
                  "orig" => "/api/random",
                  "parts" => [
                    "api",
                    "random",
                  ],
                  "select" => {
                    "$action" => "random",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "args" => {},
                  "index$" => 1,
                },
              ],
              "input" => "data",
              "key$" => "list",
            },
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 275,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/api/apis/{id}",
                  "parts" => [
                    "api",
                    "apis",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    FreepublicapisFeatures.make_feature(name)
  end
end
