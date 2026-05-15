<?php
declare(strict_types=1);

// Freepublicapis SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

FreepublicapisUtility::setRegistrar(function (FreepublicapisUtility $u): void {
    $u->clean = [FreepublicapisClean::class, 'call'];
    $u->done = [FreepublicapisDone::class, 'call'];
    $u->make_error = [FreepublicapisMakeError::class, 'call'];
    $u->feature_add = [FreepublicapisFeatureAdd::class, 'call'];
    $u->feature_hook = [FreepublicapisFeatureHook::class, 'call'];
    $u->feature_init = [FreepublicapisFeatureInit::class, 'call'];
    $u->fetcher = [FreepublicapisFetcher::class, 'call'];
    $u->make_fetch_def = [FreepublicapisMakeFetchDef::class, 'call'];
    $u->make_context = [FreepublicapisMakeContext::class, 'call'];
    $u->make_options = [FreepublicapisMakeOptions::class, 'call'];
    $u->make_request = [FreepublicapisMakeRequest::class, 'call'];
    $u->make_response = [FreepublicapisMakeResponse::class, 'call'];
    $u->make_result = [FreepublicapisMakeResult::class, 'call'];
    $u->make_point = [FreepublicapisMakePoint::class, 'call'];
    $u->make_spec = [FreepublicapisMakeSpec::class, 'call'];
    $u->make_url = [FreepublicapisMakeUrl::class, 'call'];
    $u->param = [FreepublicapisParam::class, 'call'];
    $u->prepare_auth = [FreepublicapisPrepareAuth::class, 'call'];
    $u->prepare_body = [FreepublicapisPrepareBody::class, 'call'];
    $u->prepare_headers = [FreepublicapisPrepareHeaders::class, 'call'];
    $u->prepare_method = [FreepublicapisPrepareMethod::class, 'call'];
    $u->prepare_params = [FreepublicapisPrepareParams::class, 'call'];
    $u->prepare_path = [FreepublicapisPreparePath::class, 'call'];
    $u->prepare_query = [FreepublicapisPrepareQuery::class, 'call'];
    $u->result_basic = [FreepublicapisResultBasic::class, 'call'];
    $u->result_body = [FreepublicapisResultBody::class, 'call'];
    $u->result_headers = [FreepublicapisResultHeaders::class, 'call'];
    $u->transform_request = [FreepublicapisTransformRequest::class, 'call'];
    $u->transform_response = [FreepublicapisTransformResponse::class, 'call'];
});
