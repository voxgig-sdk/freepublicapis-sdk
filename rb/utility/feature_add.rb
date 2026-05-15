# Freepublicapis SDK utility: feature_add
module FreepublicapisUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
