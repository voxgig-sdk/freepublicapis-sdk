<?php
declare(strict_types=1);

// Freepublicapis SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FreepublicapisFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FreepublicapisBaseFeature();
            case "test":
                return new FreepublicapisTestFeature();
            default:
                return new FreepublicapisBaseFeature();
        }
    }
}
