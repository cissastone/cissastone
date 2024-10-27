import { NextRequest, NextResponse } from "next/server";
import { verifyJwtToken } from "./lib/actions/TokenProcess";

export default async function middleware(request: NextRequest) {
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("admin") ?? { value: null };

  const hasVerifiedToken = token && (await verifyJwtToken(token));
  if (
    nextUrl.pathname === "/addProducts" ||
    nextUrl.pathname === "/adminDashboard" ||
    nextUrl.pathname === "/adminAuth/adminNavigator"
  ) {
    if (!hasVerifiedToken) {
      return NextResponse.redirect(new URL("/adminAuth", url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/addProducts", "/adminDashboard", "/adminAuth/adminNavigator"],
  unstable_allowDynamic: ["/node_modules/function-bind/**"],
};
