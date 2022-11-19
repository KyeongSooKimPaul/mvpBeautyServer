# Migration `20221109044625-1`

This migration has been generated at 11/9/2022, 1:46:25 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."BeautyLikesUser" (
"id" SERIAL,
"likedAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"userId" integer   ,
"boardId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."BeautyLikesUser" ADD FOREIGN KEY("boardId")REFERENCES "public"."BeautyCategoryDataImages"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."BeautyLikesUser" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221107101934-1..20221109044625-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -67,8 +67,9 @@
   BeautyCategoryDataImages BeautyCategoryDataImages[]
   BeautyCategoryDataDetails BeautyCategoryDataDetails[]
   BeautyCategoryDataDetailsImages BeautyCategoryDataDetailsImages[]
   BeautyCategoryDataDetailsContents BeautyCategoryDataDetailsContents[]
+  BeautyLikesUser BeautyLikesUser[]
 }
@@ -411,8 +412,9 @@
      brandName String?
       originalPrice String?
          finalPrice String?
          BeautyCategoryDataDetails BeautyCategoryDataDetails[]
+         BeautyLikesUser BeautyLikesUser[]
   }
 // 각 이미지 정보를 클릭시 뿌리는 데이터
    model BeautyCategoryDataDetails {
@@ -449,4 +451,14 @@
        User      User?     @relation(fields: [userId], references: [id])
   userId    Int?
   }
+
+
+model BeautyLikesUser {
+  id      Int      @id @default(autoincrement())
+  BeautyCategoryDataImages   BeautyCategoryDataImages    @relation(fields: [boardId], references: [id])
+  likedAt DateTime @default(now())
+  userId  Int?
+  User    User?    @relation(fields: [userId], references: [id])
+  boardId Int
+}
```


