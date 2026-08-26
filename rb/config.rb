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
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
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
              "name" => "lastChecked",
              "short" => "When the API was last checked for availability",
              "type" => "`$STRING`",
            },
            {
              "name" => "method",
              "type" => "`$STRING`",
            },
            {
              "name" => "path",
              "type" => "`$STRING`",
            },
            {
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
              "name" => "url",
              "short" => "Base URL of the API",
              "type" => "`$STRING`",
            },
          ],
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
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
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
