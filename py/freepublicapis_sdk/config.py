# Freepublicapis SDK configuration


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
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "type": "`$STRING`",
          },
          {
            "name": "avgResponseTime",
            "type": "`$INTEGER`",
          },
          {
            "name": "cors",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "createdAt",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "type": "`$STRING`",
          },
          {
            "name": "documentationUrl",
            "type": "`$STRING`",
          },
          {
            "name": "endpoints",
            "type": "`$ARRAY`",
          },
          {
            "name": "errorRate",
            "type": "`$NUMBER`",
          },
          {
            "name": "https",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "lastChecked",
            "type": "`$STRING`",
          },
          {
            "name": "method",
            "type": "`$STRING`",
          },
          {
            "name": "path",
            "type": "`$STRING`",
          },
          {
            "name": "reliability",
            "type": "`$NUMBER`",
          },
          {
            "name": "tags",
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "type": "`$STRING`",
          },
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
                "parts": [
                  "api",
                  "apis",
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
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/random",
                "parts": [
                  "api",
                  "random",
                ],
                "select": {
                  "$action": "random",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "api",
                  "apis",
                  "{id}",
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
