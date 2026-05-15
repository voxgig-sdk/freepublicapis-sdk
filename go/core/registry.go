package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewApiEntityFunc func(client *FreepublicapisSDK, entopts map[string]any) FreepublicapisEntity

