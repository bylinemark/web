'use server';

import { Resend } from 'resend';
import { EmailTemplate } from '@/app/components/email/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    // Validate input
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        error: 'Missing required fields',
      };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: 'Invalid email address',
      };
    }

    const { data, error } = await resend.emails.send({
      from: 'Collaborations Linemark <no-reply@collaborations.linemark.studio>',
      to: ['hello@linemark.studio'],
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      react: EmailTemplate({
        firstName: formData.name,
        message: formData.message,
        senderEmail: formData.email,
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        error: 'Failed to send email. Please try again later.',
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error('Send email error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}
