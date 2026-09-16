# Freepublicapis SDK feature factory

from freepublicapis_sdk.feature.base_feature import FreepublicapisBaseFeature
from freepublicapis_sdk.feature.ratelimit_feature import FreepublicapisRatelimitFeature
from freepublicapis_sdk.feature.retry_feature import FreepublicapisRetryFeature
from freepublicapis_sdk.feature.test_feature import FreepublicapisTestFeature
from freepublicapis_sdk.feature.timeout_feature import FreepublicapisTimeoutFeature


_FEATURES = {
    "base": lambda: FreepublicapisBaseFeature(),
    "ratelimit": lambda: FreepublicapisRatelimitFeature(),
    "retry": lambda: FreepublicapisRetryFeature(),
    "test": lambda: FreepublicapisTestFeature(),
    "timeout": lambda: FreepublicapisTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
