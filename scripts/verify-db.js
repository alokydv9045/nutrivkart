const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('MongoDB connected for verification');
    
    // We need to redefine the schema minimally to query
    const productSchema = new mongoose.Schema({}, { strict: false });
    const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
    
    const totalCount = await Product.countDocuments();
    console.log(`Total Products in DB: ${totalCount}`);
    
    const categories = await Product.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    
    console.log('\nProducts by Category:');
    categories.forEach(cat => {
      console.log(`- ${cat._id}: ${cat.count}`);
    });

    const highTicket = await Product.countDocuments({ price: { $gte: 10000 } });
    console.log(`\nHigh-ticket items (>= ₹10,000): ${highTicket}`);
    
    process.exit(0);
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
