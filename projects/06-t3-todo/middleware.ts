// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { env } from "./src/env.mjs";

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: env.NEXTAUTH_SECRET });
  if (session === null) return NextResponse.redirect(new URL("/", req.url));
  else return NextResponse.next();
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: "/todos/:path*",
};
