import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real scenario, you would use a service like Resend, Nodemailer, or SendGrid here.
    console.log('Received contact form submission:', body);

    // Simulate some work
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully!' 
    }, { status: 200 });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send email' 
    }, { status: 500 });
  }
}

