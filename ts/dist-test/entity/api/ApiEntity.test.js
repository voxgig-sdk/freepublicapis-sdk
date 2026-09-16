"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ApiEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FREEPUBLICAPIS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FREEPUBLICAPIS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.FreepublicapisSDK.test();
        const ent = testsdk.Api();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FREEPUBLICAPIS_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "auth", "req": false, "short": "Authentication method required", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "avgResponseTime", "req": false, "short": "Average response time in milliseconds", "type": "`$INTEGER`", "index$": 1 }, { "active": true, "name": "cors", "req": false, "short": "Whether CORS is enabled", "type": "`$BOOLEAN`", "index$": 2 }, { "active": true, "format": "date-time", "name": "createdAt", "req": false, "short": "When the API was added to the directory", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "description", "req": false, "short": "Description of what the API does", "type": "`$STRING`", "index$": 4 }, { "active": true, "format": "uri", "name": "documentationUrl", "req": false, "short": "URL to the API documentation", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "endpoints", "req": false, "short": "Available endpoints for this API", "type": "`$ARRAY`", "index$": 6 }, { "active": true, "format": "float", "name": "errorRate", "req": false, "short": "Error rate percentage", "type": "`$NUMBER`", "index$": 7 }, { "active": true, "name": "https", "req": false, "short": "Whether the API supports HTTPS", "type": "`$BOOLEAN`", "index$": 8 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier for the API", "type": "`$INTEGER`", "index$": 9 }, { "active": true, "format": "date-time", "name": "lastChecked", "req": false, "short": "When the API was last checked for availability", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "method", "req": false, "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "path", "req": false, "type": "`$STRING`", "index$": 12 }, { "active": true, "format": "float", "name": "reliability", "req": false, "short": "Reliability percentage based on monitoring", "type": "`$NUMBER`", "index$": 13 }, { "active": true, "name": "tags", "req": false, "short": "Categories/tags associated with the API", "type": "`$ARRAY`", "index$": 14 }, { "active": true, "name": "title", "req": false, "short": "Name of the API", "type": "`$STRING`", "index$": 15 }, { "active": true, "format": "uri", "name": "url", "req": false, "short": "Base URL of the API", "type": "`$STRING`", "index$": 16 }], "id": { "field": "id", "name": "id" }, "name": "api", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": 10, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": "best", "kind": "query", "name": "sort", "orig": "sort", "reqd": false, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /api/apis", "json": "{\"operationId\":\"listAPIs\",\"parameters\":[{\"description\":\"Maximum number of APIs to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":10,\"example\":10,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Sort order for the results\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"default\":\"best\",\"enum\":[\"best\",\"newest\",\"oldest\",\"name\"],\"example\":\"best\",\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"example\":1,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"description\":\"List of APIs\",\"items\":{\"properties\":{\"auth\":{\"description\":\"Authentication method required\",\"example\":\"apiKey\",\"nullable\":true,\"type\":\"string\"},\"avgResponseTime\":{\"description\":\"Average response time in milliseconds\",\"example\":392,\"nullable\":true,\"type\":\"integer\"},\"cors\":{\"description\":\"Whether CORS is enabled\",\"example\":true,\"type\":\"boolean\"},\"createdAt\":{\"description\":\"When the API was added to the directory\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"Description of what the API does\",\"example\":\"Generate random data for testing and development\",\"type\":\"string\"},\"documentationUrl\":{\"description\":\"URL to the API documentation\",\"example\":\"https://api.example.com/docs\",\"format\":\"uri\",\"type\":\"string\"},\"endpoints\":{\"description\":\"Available endpoints for this API\",\"items\":{\"properties\":{\"description\":{\"example\":\"Get list of users\",\"type\":\"string\"},\"method\":{\"example\":\"GET\",\"type\":\"string\"},\"path\":{\"example\":\"/api/v1/users\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"errorRate\":{\"description\":\"Error rate percentage\",\"example\":0.5,\"format\":\"float\",\"maximum\":100,\"minimum\":0,\"type\":\"number\"},\"https\":{\"description\":\"Whether the API supports HTTPS\",\"example\":true,\"type\":\"boolean\"},\"id\":{\"description\":\"Unique identifier for the API\",\"example\":275,\"type\":\"integer\"},\"lastChecked\":{\"description\":\"When the API was last checked for availability\",\"format\":\"date-time\",\"type\":\"string\"},\"reliability\":{\"description\":\"Reliability percentage based on monitoring\",\"example\":99.5,\"format\":\"float\",\"maximum\":100,\"minimum\":0,\"type\":\"number\"},\"tags\":{\"description\":\"Categories/tags associated with the API\",\"example\":[\"data\",\"testing\",\"development\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Name of the API\",\"example\":\"Random Data API\",\"type\":\"string\"},\"url\":{\"description\":\"Base URL of the API\",\"example\":\"https://api.example.com\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"limit\":{\"description\":\"Number of items per page\",\"example\":10,\"type\":\"integer\"},\"page\":{\"description\":\"Current page number\",\"example\":1,\"type\":\"integer\"},\"total\":{\"description\":\"Total number of APIs available\",\"example\":501,\"type\":\"integer\"},\"totalPages\":{\"description\":\"Total number of pages\",\"example\":51,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of APIs\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Rate limit exceeded\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"example\":\"You have exceeded the daily limit of 1000 requests. Please try again tomorrow.\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"example\":429,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Rate limit exceeded\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"example\":\"You have exceeded the daily limit of 1000 requests. Please try again tomorrow.\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"example\":429,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded (1000 requests per day)\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Rate limit exceeded\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"example\":\"You have exceeded the daily limit of 1000 requests. Please try again tomorrow.\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"example\":429,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/apis", "segments": [{ "lit": "api" }, { "lit": "apis" }], "select": { "exist": ["limit", "page", "sort"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "GET /api/random", "json": "{\"operationId\":\"getRandomAPI\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"auth\":{\"description\":\"Authentication method required\",\"example\":\"apiKey\",\"nullable\":true,\"type\":\"string\"},\"avgResponseTime\":{\"description\":\"Average response time in milliseconds\",\"example\":392,\"nullable\":true,\"type\":\"integer\"},\"cors\":{\"description\":\"Whether CORS is enabled\",\"example\":true,\"type\":\"boolean\"},\"createdAt\":{\"description\":\"When the API was added to the directory\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"Description of what the API does\",\"example\":\"Generate random data for testing and development\",\"type\":\"string\"},\"documentationUrl\":{\"description\":\"URL to the API documentation\",\"example\":\"https://api.example.com/docs\",\"format\":\"uri\",\"type\":\"string\"},\"endpoints\":{\"description\":\"Available endpoints for this API\",\"items\":{\"properties\":{\"description\":{\"example\":\"Get list of users\",\"type\":\"string\"},\"method\":{\"example\":\"GET\",\"type\":\"string\"},\"path\":{\"example\":\"/api/v1/users\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"errorRate\":{\"description\":\"Error rate percentage\",\"example\":0.5,\"format\":\"float\",\"maximum\":100,\"minimum\":0,\"type\":\"number\"},\"https\":{\"description\":\"Whether the API supports HTTPS\",\"example\":true,\"type\":\"boolean\"},\"id\":{\"description\":\"Unique identifier for the API\",\"example\":275,\"type\":\"integer\"},\"lastChecked\":{\"description\":\"When the API was last checked for availability\",\"format\":\"date-time\",\"type\":\"string\"},\"reliability\":{\"description\":\"Reliability percentage based on monitoring\",\"example\":99.5,\"format\":\"float\",\"maximum\":100,\"minimum\":0,\"type\":\"number\"},\"tags\":{\"description\":\"Categories/tags associated with the API\",\"example\":[\"data\",\"testing\",\"development\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Name of the API\",\"example\":\"Random Data API\",\"type\":\"string\"},\"url\":{\"description\":\"Base URL of the API\",\"example\":\"https://api.example.com\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with a random API\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Rate limit exceeded\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"example\":\"You have exceeded the daily limit of 1000 requests. Please try again tomorrow.\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"example\":429,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded (1000 requests per day)\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Rate limit exceeded\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"example\":\"You have exceeded the daily limit of 1000 requests. Please try again tomorrow.\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"example\":429,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/random", "segments": [{ "lit": "api" }, { "lit": "random" }], "select": { "$action": "random" }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": 275, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /api/apis/{id}", "json": "{\"operationId\":\"getAPIById\",\"parameters\":[{\"description\":\"The unique identifier of the API\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":275,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"auth\":{\"description\":\"Authentication method required\",\"example\":\"apiKey\",\"nullable\":true,\"type\":\"string\"},\"avgResponseTime\":{\"description\":\"Average response time in milliseconds\",\"example\":392,\"nullable\":true,\"type\":\"integer\"},\"cors\":{\"description\":\"Whether CORS is enabled\",\"example\":true,\"type\":\"boolean\"},\"createdAt\":{\"description\":\"When the API was added to the directory\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"Description of what the API does\",\"example\":\"Generate random data for testing and development\",\"type\":\"string\"},\"documentationUrl\":{\"description\":\"URL to the API documentation\",\"example\":\"https://api.example.com/docs\",\"format\":\"uri\",\"type\":\"string\"},\"endpoints\":{\"description\":\"Available endpoints for this API\",\"items\":{\"properties\":{\"description\":{\"example\":\"Get list of users\",\"type\":\"string\"},\"method\":{\"example\":\"GET\",\"type\":\"string\"},\"path\":{\"example\":\"/api/v1/users\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"errorRate\":{\"description\":\"Error rate percentage\",\"example\":0.5,\"format\":\"float\",\"maximum\":100,\"minimum\":0,\"type\":\"number\"},\"https\":{\"description\":\"Whether the API supports HTTPS\",\"example\":true,\"type\":\"boolean\"},\"id\":{\"description\":\"Unique identifier for the API\",\"example\":275,\"type\":\"integer\"},\"lastChecked\":{\"description\":\"When the API was last checked for availability\",\"format\":\"date-time\",\"type\":\"string\"},\"reliability\":{\"description\":\"Reliability percentage based on monitoring\",\"example\":99.5,\"format\":\"float\",\"maximum\":100,\"minimum\":0,\"type\":\"number\"},\"tags\":{\"description\":\"Categories/tags associated with the API\",\"example\":[\"data\",\"testing\",\"development\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Name of the API\",\"example\":\"Random Data API\",\"type\":\"string\"},\"url\":{\"description\":\"Base URL of the API\",\"example\":\"https://api.example.com\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with API details\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Rate limit exceeded\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"example\":\"You have exceeded the daily limit of 1000 requests. Please try again tomorrow.\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"example\":429,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"API not found\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Rate limit exceeded\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"example\":\"You have exceeded the daily limit of 1000 requests. Please try again tomorrow.\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"example\":429,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded (1000 requests per day)\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"example\":\"Rate limit exceeded\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"example\":\"You have exceeded the daily limit of 1000 requests. Please try again tomorrow.\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"example\":429,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/apis/{id}", "segments": [{ "lit": "api" }, { "lit": "apis" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "api", "name__orig": "api", "Name": "Api", "name_": "api", "name-": "api", "NAME": "API", "index$": 0 }, { "active": true, "entity": "api", "key$": "BasicApiFlow", "kind": "basic", "name": "BasicApiFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "api_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "api_ref01", "srcdatavar": "api_ref01_data", "suffix": "_dt0" }, "match": { "id": "api01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_ref01" } }], "index$": 1 }] }, 'Api');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_ref01_data = Object.values(setup.data.existing.api)[0];
        // LIST
        const api_ref01_ent = client.Api();
        const api_ref01_match = {};
        const api_ref01_list = (await api_ref01_ent.list(api_ref01_match)).map((e) => e.data());
        // LOAD
        const api_ref01_match_dt0 = {};
        api_ref01_match_dt0.id = api_ref01_data.id;
        const api_ref01_data_dt0 = (await api_ref01_ent.load(api_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_ref01_data_dt0.id === api_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api/ApiTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.FreepublicapisSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api01', 'api02', 'api03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FREEPUBLICAPIS_TEST_API_ENTID': idmap,
        'FREEPUBLICAPIS_TEST_LIVE': 'FALSE',
        'FREEPUBLICAPIS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FREEPUBLICAPIS_TEST_API_ENTID'];
    const live = 'TRUE' === env.FREEPUBLICAPIS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FREEPUBLICAPIS_TEST_API_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.FreepublicapisSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.FREEPUBLICAPIS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ApiEntity.test.js.map