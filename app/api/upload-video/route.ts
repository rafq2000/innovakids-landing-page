import { put } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const filename = searchParams.get("filename")

    if (!filename) {
      return NextResponse.json({ error: "Filename is required" }, { status: 400 })
    }

    // Sanitize filename: strip path separators, allow only safe chars, limit length
    const sanitized = filename
      .replace(/[/\\]/g, "")          // strip path separators
      .replace(/[^a-zA-Z0-9._-]/g, "") // only alphanumeric, dots, hyphens, underscores
      .slice(0, 100)                    // limit to 100 chars

    if (!sanitized || sanitized.startsWith(".")) {
      return NextResponse.json({ error: "Invalid filename" }, { status: 400 })
    }

    // Get the file from the request body
    const file = await request.blob()

    // Upload to Vercel Blob
    const blob = await put(`videos/${sanitized}`, file, {
      access: "public",
      addRandomSuffix: false,
    })

    console.log("[v0] Video uploaded to Blob:", blob.url)

    return NextResponse.json({
      url: blob.url,
      success: true,
    })
  } catch (error) {
    console.error("[v0] Error uploading video:", error)
    return NextResponse.json({ error: "Error uploading video" }, { status: 500 })
  }
}
