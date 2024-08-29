import  EmailTemplate  from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const {username, email, message} = body;
    const { data, error } = await resend.emails.send({
      from: 'Resend <onboarding@resend.dev>',
      to: ['arielstereo@msn.com'],
      subject: 'Portfolio',
      react: EmailTemplate({ username , email, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
