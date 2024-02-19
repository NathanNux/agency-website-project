import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    if (req.method === 'POST') {
        try {
            const {
                first_name,
                last_name,
                email,
                job_title,
                company_name,
                help,
                company_size,
                info,
            } = await req.json();

            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD,
                },
            });

            const mailOptions = {
                from: email,
                to: process.env.EMAIL,
                subject: "Contact Form Submission (agency website project)",
                html: `
                        <h1>Contact Form</h1>
                        <p>First Name: ${first_name}</p>
                        <p>Last Name: ${last_name}</p>
                        <p>Work Email: ${email}</p>
                        <p>Job Title: ${job_title}</p>
                        <p>Company Name: ${company_name}</p>
                        <p>Company Size: ${company_size}</p>
                        <p>Help: ${help}</p>
                    
                        <p>Info: ${info}</p>
                    `,
            };

            await transporter.sendMail(mailOptions);

            return NextResponse.redirect('E-mail byl poslán úspěšně');

        } catch (error) {
            return NextResponse.json('Něco se pokazilo');
        }
    } else {
        return NextResponse.json('Tato metoda není povolena')
    }
}