import Mail from '@ioc:Adonis/Addons/Mail'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EmailVerifiesController {
    public index = async ({response,auth}:HttpContextContract)=>{
      //send  verification email
       await Mail.send((message) => {
        message
          .from('verify@adonisgram.com')
          .to(auth.user.name)
          .subject('Please verify your email')
          .htmlView('emails/verify', {user:auth.user})
      })
      return response.redirect().back()

    }
}
