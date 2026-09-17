# Freepublicapis SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Freepublicapis",
            "slug": "freepublicapis",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://www.freepublicapis.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "api": {},
            },
        },
        "entity": {
      "api": {
        "fields": [
          {
            "name": "auth",
            "short": "Authentication method required",
            "type": "`$STRING`",
          },
          {
            "name": "avgResponseTime",
            "short": "Average response time in milliseconds",
            "type": "`$INTEGER`",
          },
          {
            "name": "cors",
            "short": "Whether CORS is enabled",
            "type": "`$BOOLEAN`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "short": "When the API was added to the directory",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "short": "Description of what the API does",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "documentationUrl",
            "short": "URL to the API documentation",
            "type": "`$STRING`",
          },
          {
            "name": "endpoints",
            "short": "Available endpoints for this API",
            "type": "`$ARRAY`",
          },
          {
            "format": "float",
            "name": "errorRate",
            "short": "Error rate percentage",
            "type": "`$NUMBER`",
          },
          {
            "name": "https",
            "short": "Whether the API supports HTTPS",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the API",
            "type": "`$INTEGER`",
          },
          {
            "format": "date-time",
            "name": "lastChecked",
            "short": "When the API was last checked for availability",
            "type": "`$STRING`",
          },
          {
            "format": "float",
            "name": "reliability",
            "short": "Reliability percentage based on monitoring",
            "type": "`$NUMBER`",
          },
          {
            "name": "tags",
            "short": "Categories/tags associated with the API",
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "short": "Name of the API",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "url",
            "short": "Base URL of the API",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "best",
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/apis",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "apis",
                  },
                ],
                "select": {
                  "exist": [
                    "limit",
                    "page",
                    "sort",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "parts": [
                  "api",
                  "apis",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/random",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "random",
                  },
                ],
                "select": {
                  "$action": "random",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "random",
                ],
              },
            ],
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
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/apis/{id}",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "apis",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "apis",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
