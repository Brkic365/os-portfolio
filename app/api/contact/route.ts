import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { subject, message, fromEmail } = await request.json();

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Default testing domain
            to: ['antonio.brkic@example.com'], // Replace with user's actual email or env var
            replyTo: 'antonio.brkic@example.com', // In a real app, this might come from the user input if we asked for it
            subject: `[Portfolio] ${subject}`,
            text: message,
            // React email template could go here if we had one
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
