import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error("MONGODB_URI is not defined in environment variables.");
  process.exit(1);
}

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

mongoose.Promise = global.Promise;

const ticketSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    name: {type:String , required: true},
    email: {type:String , require: true},
    description: { type: String },
    category: { type: String },
    status: { type: String },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);

export default Ticket;
