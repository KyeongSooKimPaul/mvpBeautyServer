# Migration `20221112113810-1`

This migration has been generated at 11/12/2022, 8:38:10 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."RecentlyViewd" (
"id" SERIAL,
"viewedAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"userId" integer   ,
"boardId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."RecentlyViewd" ADD FOREIGN KEY("boardId")REFERENCES "public"."BeautyCategoryDataImages"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."RecentlyViewd" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221109044625-1..20221112113810-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -68,8 +68,9 @@
   BeautyCategoryDataDetails BeautyCategoryDataDetails[]
   BeautyCategoryDataDetailsImages BeautyCategoryDataDetailsImages[]
   BeautyCategoryDataDetailsContents BeautyCategoryDataDetailsContents[]
   BeautyLikesUser BeautyLikesUser[]
+  RecentlyViewd RecentlyViewd[]
 }
@@ -413,8 +414,9 @@
       originalPrice String?
          finalPrice String?
          BeautyCategoryDataDetails BeautyCategoryDataDetails[]
          BeautyLikesUser BeautyLikesUser[]
+         RecentlyViewd RecentlyViewd[]
   }
 // 각 이미지 정보를 클릭시 뿌리는 데이터
    model BeautyCategoryDataDetails {
@@ -460,5 +462,14 @@
   likedAt DateTime @default(now())
   userId  Int?
   User    User?    @relation(fields: [userId], references: [id])
   boardId Int
+}
+
+model RecentlyViewd {
+  id      Int      @id @default(autoincrement())
+  BeautyCategoryDataImages   BeautyCategoryDataImages    @relation(fields: [boardId], references: [id])
+  viewedAt DateTime @default(now())
+  userId  Int?
+  User    User?    @relation(fields: [userId], references: [id])
+  boardId Int
 }
```


