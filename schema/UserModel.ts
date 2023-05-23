import { UserModelInterface } from "@/lib/model";
import { model, models, Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  emailVerified: {
    type: String,
    default: null,
  },
});
const User = models.User || model<UserModelInterface>("User", UserSchema);

export default User;
