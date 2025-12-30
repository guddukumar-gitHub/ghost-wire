import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User.model";
import { z } from "zod";
import { usernameSchemaValidation } from "@/schemas/signUpSchema";

const usernameCheckSchema = z.object({
  username: usernameSchemaValidation,
});

export async function GET(request: Request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const queryParams = {
      username: searchParams.get("username") || "",
    }

    const parsed = usernameCheckSchema.safeParse(queryParams);
    console.log("Parsed result: ", parsed);

    if (!parsed.success) {
      const usernameErrors = parsed.error.format().username?._errors || [];
      return Response.json(
       {
          success: false,
          message:
            usernameErrors?.length > 0
              ? usernameErrors.join(', ')
              : 'Invalid query parameters',
        },
        { status: 400 }
      );
    }
    
    const { username } = parsed.data;
    const existingVerifiedUser = await UserModel.findOne({
      username,
      isVerified: true,
    });
    console.log("Existing verified user: ", existingVerifiedUser);

    if (existingVerifiedUser) {
      return Response.json(
        { success: false, message: "Username is already taken" },
        { status: 200 }
      );
    }
    return Response.json(
      { success: true, message: "Username is available" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error checking username uniqueness:", error);
    return Response.json(
      { success: false, message: "Error while checking username uniqueness" },
      { status: 500 }
    );
  }
}
