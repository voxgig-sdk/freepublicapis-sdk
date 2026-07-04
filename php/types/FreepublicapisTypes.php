<?php
declare(strict_types=1);

// Typed models for the Freepublicapis SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Api entity data model. */
class Api
{
    public ?string $auth = null;
    public ?int $avg_response_time = null;
    public ?bool $cor = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $documentation_url = null;
    public ?array $endpoint = null;
    public ?float $error_rate = null;
    public ?bool $http = null;
    public ?int $id = null;
    public ?string $last_checked = null;
    public ?string $method = null;
    public ?string $path = null;
    public ?float $reliability = null;
    public ?array $tag = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Request payload for Api#load. */
class ApiLoadMatch
{
    public int $id;
}

/** Match filter for Api#list (any subset of Api fields). */
class ApiListMatch
{
    public ?string $auth = null;
    public ?int $avg_response_time = null;
    public ?bool $cor = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $documentation_url = null;
    public ?array $endpoint = null;
    public ?float $error_rate = null;
    public ?bool $http = null;
    public ?int $id = null;
    public ?string $last_checked = null;
    public ?string $method = null;
    public ?string $path = null;
    public ?float $reliability = null;
    public ?array $tag = null;
    public ?string $title = null;
    public ?string $url = null;
}

