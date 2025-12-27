import mongoose, {Schema, Document} from "mongoose";

export interface IMessege extends Document {
 content: string;
 createdAt: Date;
}

const MessegeSchema: Schema<IMessege> = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now }
});

export interface IUser extends Document {
 username: string;
 email: string;
 password: string;
 verifyCode: string;
 verifyCodeExpiry: Date;
 isverified: boolean;
 isAcceptingMesseges: boolean;
 messeges: IMessege[];
}

const UserSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifyCode: {
    type: String,
    required: [true, "Verify code is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify code expiry is required"],
  },
  isAcceptingMesseges: {
    type: Boolean,
    default: true,
  },
  messeges: {
    type: [MessegeSchema],
    default: [],
  },
});

export const UserModel = (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model<IUser>("User", UserSchema);

export default UserModel;