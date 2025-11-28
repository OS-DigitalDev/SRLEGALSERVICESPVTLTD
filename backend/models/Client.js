import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String },
  message: { type: String, required: true },
  organization: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Client = mongoose.model("Client", clientSchema);

export default Client;