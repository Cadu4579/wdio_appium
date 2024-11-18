class LoginScreen {
    constructor() {
      this.userNameInput = "~Username input field"
      this.passwordInput = "~Password input field"
      this.loginButton = "~Login button"
      this.errorMessage = "//android.view.ViewGroup[@content-desc='generic-error-message']/android,widget.TextView"
    }

    async fillLoginForm() {
        await $(this.userNameInput).setValue('usernameErrado')
        await $(this.passwordInput).setValue('invalidpassword')
        await $(this.loginButton).click()
 }
} 

export default new LoginScreen()