# Typed models for the Freepublicapis SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Api(TypedDict, total=False):
    auth: str
    avgResponseTime: int
    cors: bool
    createdAt: str
    description: str
    documentationUrl: str
    endpoints: list
    errorRate: float
    https: bool
    id: int
    lastChecked: str
    reliability: float
    tags: list
    title: str
    url: str


class ApiLoadMatch(TypedDict):
    id: int


class ApiListMatch(TypedDict, total=False):
    limit: int
    page: int
    sort: str
