<?php
declare(strict_types=1);

// Freepublicapis SDK utility: prepare_path

class FreepublicapisPreparePath
{
    public static function call(FreepublicapisContext $ctx): string
    {
        $point = $ctx->point;
        $parts = [];
        if ($point) {
            $p = \Voxgig\Struct\Struct::getprop($point, 'parts');
            if (is_array($p)) {
                $parts = $p;
            }
        }
        return \Voxgig\Struct\Struct::join($parts, '/', true);
    }
}
