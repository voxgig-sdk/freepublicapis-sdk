# Freepublicapis SDK feature factory

from feature.base_feature import FreepublicapisBaseFeature
from feature.test_feature import FreepublicapisTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FreepublicapisBaseFeature(),
        "test": lambda: FreepublicapisTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
