import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // In a real application, you would save this to the database, 
    // send an email to the admin, or push to a CRM (like Hubspot/Salesforce).
    
    // For now, we will just log it and return success.
    console.log('[Wholesale Enquiry]', body);
    
    // Mock save logic...
    // await dbConnect();
    // await WholesaleModel.create(body);

    return NextResponse.json({ message: 'Enquiry received successfully', success: true }, { status: 200 });
  } catch (error) {
    console.error('[Wholesale API Error]', error);
    return NextResponse.json({ message: 'Failed to submit enquiry', success: false }, { status: 500 });
  }
}
