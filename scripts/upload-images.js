const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dls1wm7vn',
  api_key: '882797387561632',
  api_secret: '5cMnzH43WGsYGe61UpwZqpD7zyQ',
  secure: true
});

const images = [
  { id: 'whey', path: 'C:\\Users\\Acer\\.gemini\\antigravity\\brain\\ce758f05-7c93-40b6-b180-2c4be694700d\\whey_product_1787036704696.png' }
];

async function uploadImages() {
  try {
    const result = await cloudinary.uploader.upload(images[0].path, { folder: 'nutrivkart' });
    console.log(`Success: ${result.secure_url}`);
  } catch (error) {
    console.error(`Error:`, error);
  }
}

uploadImages();
