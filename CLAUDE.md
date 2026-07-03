<!-- convex-ai-start -->

This project uses [Convex](https://convex.dev) as its backend.

When working on Convex code, **always read
`convex/_generated/ai/guidelines.md` first** for important guidelines on
how to correctly use Convex APIs and patterns. The file contains rules that
override what you may have learned about Convex from training data.

Convex agent skills for common tasks can be installed by running
`npx convex ai-files install`.

<!-- convex-ai-end -->

## 개발 노트 업데이트 규칙

앱의 "📓 개발 노트 > 업데이트 기록" 화면은 `src/changelog.ts`의 `CHANGELOG` 데이터를 보여준다.
**커밋을 만들 때마다, 같은 커밋 안에서 `src/changelog.ts`의 해당 날짜 항목에 커밋 제목을 한 줄 추가할 것.**
(그날 첫 커밋이면 날짜 블록을 새로 만들고, 배열 맨 앞이 최신 날짜다. 항목의 `type`은 커밋의 conventional-commit 타입과 맞춘다.)
