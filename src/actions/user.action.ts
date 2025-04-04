"use server";

import { query } from "@/lib/mysql";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function syncUser() {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) return null;
    
    // Check if user already exists in db
    const existingUsers = await query(
      "SELECT * FROM users WHERE clerkId = ?",
      [userId]
    ) as any[];
    
    if (existingUsers.length > 0) return existingUsers[0];

    // Insert new user
    const result = await query(
      `INSERT INTO users (id, email, username, clerkId, name, image) 
       VALUES (UUID(), ?, ?, ?, ?, ?)`,
      [
        user.emailAddresses[0].emailAddress,
        user.username || user.emailAddresses[0].emailAddress.split("@")[0],
        userId,
        `${user.firstName || ""} ${user.lastName || ""}`.trim(),
        user.imageUrl
      ]
    );

    const newUser = await query(
      "SELECT * FROM users WHERE clerkId = ?",
      [userId]
    ) as any[];
    
    return newUser[0];
  } catch (error) {
    console.error("Error syncing user:", error);
    return null;
  }
}