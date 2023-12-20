//Send mail
import nodemailer from 'nodemailer';
const sendMail = async (email, text, sub) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        const mailOption = {
            from: process.env.email,
            to: email,
            subject: sub,
            html: text,
        };

        transporter.sendMail(mailOption, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Mail has been sent", info.response);
            }
        });
    } catch (error) {
        console.log(error);
    }
};
export default sendMail;