-- Freepublicapis SDK error

local FreepublicapisError = {}
FreepublicapisError.__index = FreepublicapisError


function FreepublicapisError.new(code, msg, ctx)
  local self = setmetatable({}, FreepublicapisError)
  self.is_sdk_error = true
  self.sdk = "Freepublicapis"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FreepublicapisError:error()
  return self.msg
end


function FreepublicapisError:__tostring()
  return self.msg
end


return FreepublicapisError
