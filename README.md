# Freepublicapis SDK

Browse the freepublicapis.com directory of free public APIs programmatically

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Free Public APIs API

The Free Public APIs API exposes the catalogue behind [freepublicapis.com](https://www.freepublicapis.com), a community-curated directory of free public APIs aimed at students, developers, and hobbyists. The site tests listed APIs daily and tracks health metrics for each entry.

What you get from the API:

- API metadata: names, descriptions, categories, and documentation links
- Health metrics: reliability scores, error rates, response times, and 30-day uptime history
- CORS availability status for each listed API
- Listing, filtering, and random-pick access to the full catalogue

The API is capped at 1,000 requests per day, with higher limits available on request. Listings span 25+ categories covering AI, development, finance, gaming, music, science, transportation, weather, and more.

## Try it

**TypeScript**
```bash
npm install freepublicapis
```

**Python**
```bash
pip install freepublicapis-sdk
```

**PHP**
```bash
composer require voxgig/freepublicapis-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/freepublicapis-sdk/go
```

**Ruby**
```bash
gem install freepublicapis-sdk
```

**Lua**
```bash
luarocks install freepublicapis-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { FreepublicapisSDK } from 'freepublicapis'

const client = new FreepublicapisSDK({})

// List all apis
const apis = await client.Api().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o freepublicapis-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "freepublicapis": {
      "command": "/abs/path/to/freepublicapis-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Api** | An entry in the freepublicapis.com directory, representing a single cataloged public API along with its metadata, health metrics, category, and documentation links. | `/api/apis` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from freepublicapis_sdk import FreepublicapisSDK

client = FreepublicapisSDK({})

# List all apis
apis, err = client.Api(None).list(None, None)

# Load a specific api
api, err = client.Api(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'freepublicapis_sdk.php';

$client = new FreepublicapisSDK([]);

// List all apis
[$apis, $err] = $client->Api(null)->list(null, null);

// Load a specific api
[$api, $err] = $client->Api(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/freepublicapis-sdk/go"

client := sdk.NewFreepublicapisSDK(map[string]any{})

// List all apis
apis, err := client.Api(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Freepublicapis_sdk"

client = FreepublicapisSDK.new({})

# List all apis
apis, err = client.Api(nil).list(nil, nil)

# Load a specific api
api, err = client.Api(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("freepublicapis_sdk")

local client = sdk.new({})

-- List all apis
local apis, err = client:Api(nil):list(nil, nil)

-- Load a specific api
local api, err = client:Api(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = FreepublicapisSDK.test()
const result = await client.Api().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = FreepublicapisSDK.test(None, None)
result, err = client.Api(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = FreepublicapisSDK::test(null, null);
[$result, $err] = $client->Api(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Api(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FreepublicapisSDK.test(nil, nil)
result, err = client.Api(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Api(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Free Public APIs API

- Upstream: [https://www.freepublicapis.com](https://www.freepublicapis.com)
- API docs: [https://freepublicapis.com/api](https://freepublicapis.com/api)

---

Generated from the Free Public APIs API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
