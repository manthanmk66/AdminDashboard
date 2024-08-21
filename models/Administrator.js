import mongoose from 'mongoose';

const administratorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Administrator = mongoose.model('Administrator', administratorSchema);

export default Administrator;
