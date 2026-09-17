# Freepublicapis SDK configuration

module FreepublicapisConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Freepublicapis",
        "slug" => "freepublicapis",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
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
              "short" => "Authentication method required",
              "type" => "`$STRING`",
            },
            {
              "name" => "avgResponseTime",
              "short" => "Average response time in milliseconds",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "cors",
              "short" => "Whether CORS is enabled",
              "type" => "`$BOOLEAN`",
            },
            {
              "format" => "date-time",
              "name" => "createdAt",
              "short" => "When the API was added to the directory",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "short" => "Description of what the API does",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "documentationUrl",
              "short" => "URL to the API documentation",
              "type" => "`$STRING`",
            },
            {
              "name" => "endpoints",
              "short" => "Available endpoints for this API",
              "type" => "`$ARRAY`",
            },
            {
              "format" => "float",
              "name" => "errorRate",
              "short" => "Error rate percentage",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "https",
              "short" => "Whether the API supports HTTPS",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the API",
              "type" => "`$INTEGER`",
            },
            {
              "format" => "date-time",
              "name" => "lastChecked",
              "short" => "When the API was last checked for availability",
              "type" => "`$STRING`",
            },
            {
              "format" => "float",
              "name" => "reliability",
              "short" => "Reliability percentage based on monitoring",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "tags",
              "short" => "Categories/tags associated with the API",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "title",
              "short" => "Name of the API",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "url",
              "short" => "Base URL of the API",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "api",
          "op" => {
            "list" => {
              "input" => "data",
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
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => "best",
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/apis",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "apis",
                    },
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
                    "res" => "`body.data`",
                  },
                  "parts" => [
                    "api",
                    "apis",
                  ],
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/random",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "random",
                    },
                  ],
                  "select" => {
                    "$action" => "random",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "api",
                    "random",
                  ],
                },
              ],
            },
            "load" => {
              "input" => "data",
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
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/apis/{id}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "apis",
                    },
                    {
                      "var" => "id",
                    },
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
                  "parts" => [
                    "api",
                    "apis",
                    "{id}",
                  ],
                },
              ],
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
