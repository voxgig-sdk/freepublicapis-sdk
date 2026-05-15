# Freepublicapis SDK utility: make_context
require_relative '../core/context'
module FreepublicapisUtilities
  MakeContext = ->(ctxmap, basectx) {
    FreepublicapisContext.new(ctxmap, basectx)
  }
end
