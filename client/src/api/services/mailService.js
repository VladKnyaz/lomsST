import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';
import { $api } from '../api';

export class MailService {
    static sendMail(form) {
        let promise = emailjs.sendForm('service_mosju8m', 'template_w0329ev', form.current, 'B7C61pe3eDyJmk6JI')
        .then((result) => {
            form.current.user_email.value = '';
            form.current.user_name.value = '';
            form.current.user_text.value = '';
        }, (error) => {
            toast.error('Service: error');    
      });

      toast.promise(promise, {
        pending: "Sending..",
        success: "Send!",
        error: "Error!"
      })
    }

    static async subscribe(name,mail) {
        
        await $api.post('/mail/subscribe', {
            name,
            mail
        }).then(res => {toast.warn(`${res.data}`)})
    
    }
}