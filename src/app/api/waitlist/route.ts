import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'NomadSafe <newsletter@updates.nomad-safe.com>',
      to: [email],
      subject: 'Welcome to NomadSafe Waitlist!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1a1a1a; font-size: 28px; margin-bottom: 20px;">Welcome to NomadSafe!</h1>
          <p style="color: #666; font-size: 16px; line-height: 1.6;">
            Thank you for joining our waitlist! We're excited to have you on board as we prepare to launch the first insurance specifically designed for digital nomads and their electronic devices.
          </p>
          <p style="color: #666; font-size: 16px; line-height: 1.6;">
            You'll be among the first to know when we launch, and you'll get early access to our protection plans.
          </p>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1a1a1a; font-size: 20px; margin-bottom: 10px;">What's Next?</h2>
            <ul style="color: #666; font-size: 16px; line-height: 1.6;">
              <li>We'll notify you as soon as our plans are available</li>
              <li>Get early access to our protection plans</li>
              <li>Be the first to protect your devices worldwide</li>
            </ul>
          </div>
          <p style="color: #666; font-size: 16px; line-height: 1.6;">
            Safe travels!<br>
            The NomadSafe Team
          </p>
        </div>
      `,
    });

    // Send notification email to your team (optional)
    if (process.env.ADMIN_EMAIL) {
      await resend.emails.send({
        from: 'NomadSafe <newsletter@updates.nomad-safe.com>',
        to: [process.env.ADMIN_EMAIL],
        subject: 'New Waitlist Signup - NomadSafe',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #1a1a1a; font-size: 24px; margin-bottom: 20px;">New Waitlist Signup</h1>
            <p style="color: #666; font-size: 16px; line-height: 1.6;">
              A new user has joined the NomadSafe waitlist:
            </p>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="color: #1a1a1a; font-size: 16px; margin: 0;"><strong>Email:</strong> ${email}</p>
              <p style="color: #1a1a1a; font-size: 16px; margin: 5px 0 0 0;"><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
