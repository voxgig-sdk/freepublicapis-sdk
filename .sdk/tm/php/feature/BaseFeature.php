<?php
declare(strict_types=1);

// Freepublicapis SDK base feature

class FreepublicapisBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FreepublicapisContext $ctx, array $options): void {}
    public function PostConstruct(FreepublicapisContext $ctx): void {}
    public function PostConstructEntity(FreepublicapisContext $ctx): void {}
    public function SetData(FreepublicapisContext $ctx): void {}
    public function GetData(FreepublicapisContext $ctx): void {}
    public function GetMatch(FreepublicapisContext $ctx): void {}
    public function SetMatch(FreepublicapisContext $ctx): void {}
    public function PrePoint(FreepublicapisContext $ctx): void {}
    public function PreSpec(FreepublicapisContext $ctx): void {}
    public function PreRequest(FreepublicapisContext $ctx): void {}
    public function PreResponse(FreepublicapisContext $ctx): void {}
    public function PreResult(FreepublicapisContext $ctx): void {}
    public function PreDone(FreepublicapisContext $ctx): void {}
    public function PreUnexpected(FreepublicapisContext $ctx): void {}
}
