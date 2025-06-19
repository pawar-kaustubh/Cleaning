// middleware.ts
import { authMiddleware } from "@descope/nextjs-sdk/server";

export default authMiddleware({
  projectId: "P2yXjmf07kFt4rxrbE2ul0RHPaMR", // Required
  redirectUrl: "/login", // Redirect if not logged in
  publicRoutes: ["/", "/login"], // Optional: other unprotected routes
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
