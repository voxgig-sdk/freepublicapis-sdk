
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FreepublicapisSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await FreepublicapisSDK.test()
    equal(null !== testsdk, true)
  })

})
