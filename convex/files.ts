import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

// 노트 본문에 삽입할 이미지를 업로드하기 위한 단기 업로드 URL 발급.
export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("로그인이 필요합니다");
    return await ctx.storage.generateUploadUrl();
  },
});

// 업로드된 파일의 서빙 URL 조회. 노트 본문에는 이 URL을 그대로 저장해 둔다.
export const getUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, { storageId }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;
    return await ctx.storage.getUrl(storageId);
  },
});
