<?php
declare(strict_types=1);

// Freepublicapis SDK utility: result_headers

class FreepublicapisResultHeaders
{
    public static function call(FreepublicapisContext $ctx): ?FreepublicapisResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
