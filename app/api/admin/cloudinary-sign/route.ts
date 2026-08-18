import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';

export const POST = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return NextResponse.json({ message: "unauthorized" }, { status: 401 });
  }

  const { folder, public_id } = await req.json();
  const timestamp = Math.floor(Date.now() / 1000);

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret || 
      cloudName === 'your_cloud_name' || cloudName === 'unknown' ||
      apiKey === 'your_api_key' || apiKey === 'unknown' ||
      apiSecret === 'your_api_secret' || apiSecret === 'unknown') {
    return NextResponse.json({ 
      message: "Cloudinary credentials are not configured. Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in your .env file." 
    }, { status: 500 });
  }

  // Build signature string using Cloudinary SDK to avoid 403 formatting issues
  const signature = cloudinary.utils.api_sign_request(
    {
      folder,
      public_id,
      timestamp
    },
    apiSecret
  );

  return NextResponse.json({
    cloudName,
    apiKey,
    timestamp,
    signature,
    folder,
    public_id
  });
}) as any;
