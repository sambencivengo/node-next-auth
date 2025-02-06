import { db } from "../../db";

export const deleteUser = async () => {
	try {
		const user = await db.query.users.findFirst();

		return { user, success: true };

	} catch (error: any) {
		return ({ error, message: "Unable to delete user" });
	}
};
