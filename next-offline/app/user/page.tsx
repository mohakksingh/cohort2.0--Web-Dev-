import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import client from "@/db"

async function fetchData() {
    const user=await client.user.findFirst();
    return ({
      email:user?.email,
      name:"Mohak"
    });
}

export default async function User() {
  const data = await fetchData();
  return (
    <div>
      {data.email}
      {data.name}
    </div>
  );
}
