<?php
declare(strict_types=1);

// Freepublicapis SDK configuration

class FreepublicapisConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Freepublicapis",
                "slug" => "freepublicapis",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://www.freepublicapis.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "api" => [],
                ],
            ],
            "entity" => [
        'api' => [
          'fields' => [
            [
              'name' => 'auth',
              'short' => 'Authentication method required',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'avgResponseTime',
              'short' => 'Average response time in milliseconds',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'cors',
              'short' => 'Whether CORS is enabled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'createdAt',
              'short' => 'When the API was added to the directory',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Description of what the API does',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'documentationUrl',
              'short' => 'URL to the API documentation',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'endpoints',
              'short' => 'Available endpoints for this API',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'errorRate',
              'short' => 'Error rate percentage',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'https',
              'short' => 'Whether the API supports HTTPS',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the API',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'lastChecked',
              'short' => 'When the API was last checked for availability',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'method',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'path',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'reliability',
              'short' => 'Reliability percentage based on monitoring',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'tags',
              'short' => 'Categories/tags associated with the API',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'title',
              'short' => 'Name of the API',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'Base URL of the API',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'api',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'best',
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/apis',
                  'parts' => [
                    'api',
                    'apis',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'page',
                      'sort',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/random',
                  'parts' => [
                    'api',
                    'random',
                  ],
                  'select' => [
                    '$action' => 'random',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 275,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/apis/{id}',
                  'parts' => [
                    'api',
                    'apis',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return FreepublicapisFeatures::make_feature($name);
    }
}
