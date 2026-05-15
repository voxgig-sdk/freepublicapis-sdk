<?php
declare(strict_types=1);

// Freepublicapis SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FreepublicapisMakeContext
{
    public static function call(array $ctxmap, ?FreepublicapisContext $basectx): FreepublicapisContext
    {
        return new FreepublicapisContext($ctxmap, $basectx);
    }
}
