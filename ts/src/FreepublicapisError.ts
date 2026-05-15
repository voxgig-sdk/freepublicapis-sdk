
import { Context } from './Context'


class FreepublicapisError extends Error {

  isFreepublicapisError = true

  sdk = 'Freepublicapis'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FreepublicapisError
}

