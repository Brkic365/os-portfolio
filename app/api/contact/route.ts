import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import ContactFormEmail from '@/components/emails/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { subject, message, fromEmail } = await request.json();

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['contact@antoniobrkic.com'],
            subject: `[Portfolio] ${subject}`,
            react: ContactFormEmail({ subject, message }),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
