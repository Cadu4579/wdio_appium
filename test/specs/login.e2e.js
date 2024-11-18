import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import MenuScreen from '../screen/menu.screen.js'
import loginScreen from '../screen/login.screen.js'

describe('My Login application', () => {
    it('should login with invalid credentials', async () => {
        await MenuScreen.accessLoginScreen()
        await loginScreen.fillLoginForm()
        //await expect($(loginScreen.errorMessage)).toHaveText("Provided credentials do not match any user in this service")
       
        
     })
})

