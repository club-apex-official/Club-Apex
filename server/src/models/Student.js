import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    prn: { type: String, required: true, unique: true, trim: true, uppercase: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true, select: false },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_document, returned) => {
        delete returned.password;
        delete returned.__v;
        return returned;
      },
    },
  },
);

export const Student = mongoose.model('Student', studentSchema);
