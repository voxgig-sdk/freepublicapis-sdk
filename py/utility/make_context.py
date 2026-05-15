# Freepublicapis SDK utility: make_context

from core.context import FreepublicapisContext


def make_context_util(ctxmap, basectx):
    return FreepublicapisContext(ctxmap, basectx)
