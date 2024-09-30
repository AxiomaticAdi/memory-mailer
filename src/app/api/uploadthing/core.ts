import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
	// Define as many FileRoutes as you like, each with a unique routeSlug
	imageUploader: f({ image: { maxFileSize: "16MB" } })
		// Set permissions and file types for this FileRoute
		.onUploadComplete(async ({ metadata, file }) => {
			// This code RUNS ON YOUR SERVER after upload
			console.log("Upload complete");
			console.log("file url", file.url);
			return { metadata, file };
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
