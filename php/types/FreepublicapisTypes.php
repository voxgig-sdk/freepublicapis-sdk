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
    public ?int $avgResponseTime = null;
    public ?bool $cors = null;
    public ?string $createdAt = null;
    public ?string $description = null;
    public ?string $documentationUrl = null;
    public ?array $endpoints = null;
    public ?float $errorRate = null;
    public ?bool $https = null;
    public ?int $id = null;
    public ?string $lastChecked = null;
    public ?string $method = null;
    public ?string $path = null;
    public ?float $reliability = null;
    public ?array $tags = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Request payload for Api#load. */
class ApiLoadMatch
{
    public int $id;
}

/** Request payload for Api#list. */
class ApiListMatch
{
    public ?int $limit = null;
    public ?int $page = null;
    public ?string $sort = null;
}

