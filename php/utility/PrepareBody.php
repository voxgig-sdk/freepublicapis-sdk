<?php
declare(strict_types=1);

// Freepublicapis SDK utility: prepare_body

class FreepublicapisPrepareBody
{
    public static function call(FreepublicapisContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
