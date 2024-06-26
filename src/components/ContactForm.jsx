import { useRef, useState } from "react"
import FormRow from "./FormRow"
import emailjs from "@emailjs/browser"
import { toast } from "react-hot-toast"
import SpinnerMini from "./SpinnerMini"
import HCaptcha from "@hcaptcha/react-hcaptcha"

function ContactForm() {
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  const captchaRef = useRef()

  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    const [name, email, message] = [nameRef.current.value, emailRef.current.value, messageRef.current.value]

    if (!name || !email || !message) return

    captchaRef.current?.execute()
  }

  async function handleEmail(token) {
    try {
      if (!token) throw new Error("captcha invalid")

      const params = {
        user_name: nameRef.current.value,
        user_email: emailRef.current.value,
        message: messageRef.current.value,
        to_name: "Ayoub"
      }

      await emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, params, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        limitRate: {
          throttle: 300000
        }
      })

      toast.success("Message successfully sent!")

      captchaRef.current?.resetCaptcha()

      nameRef.current.value = ""
      emailRef.current.value = ""
      messageRef.current.value = ""
    } catch (error) {
      let errMsg
      if (error?.status === 429) errMsg = `${error?.text}! Try again in a few minutes.`
      else errMsg = error?.text || error?.message
      toast.error(errMsg)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="flex flex-col gap-4 justify-center mt-10" onSubmit={handleSubmit}>
      <FormRow name="user_name" id="name" type="text" placeholder="Your name" ref={nameRef} required autoComplete="name">
        Name*
      </FormRow>
      <FormRow name="user_email" id="email" type="text" placeholder="Your email address" ref={emailRef} required autoComplete="email">
        Your email*
      </FormRow>
      <FormRow name="message" id="message" type="text" placeholder="Your message" ref={messageRef} isTextArea={true} required>
        Message*
      </FormRow>
      <div className="flex justify-center h-min-[4.5rem]">
        <HCaptcha
          loadAsync={true}
          sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY}
          onVerify={token => {
            handleEmail(token)
          }}
          size="invisible"
          ref={captchaRef}
          onClose={() => setIsLoading(false)}
          onError={captchaRef.current?.resetCaptcha()}
          onExpire={captchaRef.current?.resetCaptcha()}
        />
      </div>
      <button type="submit" className="bg-[#4f46e5] text-gray-100 py-3 text-lg font-bold w-24 mx-7 rounded-2xl self-center text-center" disabled={isLoading}>
        {isLoading ? <SpinnerMini /> : "Submit"}
      </button>
    </form>
  )
}

export default ContactForm
