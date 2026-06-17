import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  message?: string;
  senderEmail?: string;
}

export function EmailTemplate({ firstName, message, senderEmail }: EmailTemplateProps) {
  return (
    <div>
      <h1>New Contact Form Submission</h1>
      <p>
        <strong>From:</strong> {firstName}
      </p>
      {senderEmail && (
        <p>
          <strong>Email:</strong> {senderEmail}
        </p>
      )}
      {message && (
        <div>
          <strong>Message:</strong>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}