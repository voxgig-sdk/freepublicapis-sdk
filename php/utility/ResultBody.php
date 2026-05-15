<?php
declare(strict_types=1);

// Freepublicapis SDK utility: result_body

class FreepublicapisResultBody
{
    public static function call(FreepublicapisContext $ctx): ?FreepublicapisResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
