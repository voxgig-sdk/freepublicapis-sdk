<?php
declare(strict_types=1);

// Freepublicapis SDK utility: feature_add

class FreepublicapisFeatureAdd
{
    public static function call(FreepublicapisContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
