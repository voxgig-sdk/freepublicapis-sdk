# Typed models for the Freepublicapis SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Api:
    auth: Optional[str] = None
    avg_response_time: Optional[int] = None
    cor: Optional[bool] = None
    created_at: Optional[str] = None
    description: Optional[str] = None
    documentation_url: Optional[str] = None
    endpoint: Optional[list] = None
    error_rate: Optional[float] = None
    http: Optional[bool] = None
    id: Optional[int] = None
    last_checked: Optional[str] = None
    method: Optional[str] = None
    path: Optional[str] = None
    reliability: Optional[float] = None
    tag: Optional[list] = None
    title: Optional[str] = None
    url: Optional[str] = None


@dataclass
class ApiLoadMatch:
    id: int


@dataclass
class ApiListMatch:
    auth: Optional[str] = None
    avg_response_time: Optional[int] = None
    cor: Optional[bool] = None
    created_at: Optional[str] = None
    description: Optional[str] = None
    documentation_url: Optional[str] = None
    endpoint: Optional[list] = None
    error_rate: Optional[float] = None
    http: Optional[bool] = None
    id: Optional[int] = None
    last_checked: Optional[str] = None
    method: Optional[str] = None
    path: Optional[str] = None
    reliability: Optional[float] = None
    tag: Optional[list] = None
    title: Optional[str] = None
    url: Optional[str] = None

