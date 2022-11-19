# Migration `20221107101934-1`

This migration has been generated at 11/7/2022, 7:19:34 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."MvpFreeProductpage" DROP CONSTRAINT "MvpFreeProductpage_userId_fkey"

ALTER TABLE "public"."MvpFreeProductpage" DROP COLUMN "userId"

CREATE TABLE "public"."BeautyCategoryDataDetailsContents" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"contents" text   ,
"beautyDetailImageId" integer   NOT NULL ,
"userId" integer   ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."BeautyCategoryDataDetailsContents" ADD FOREIGN KEY("beautyDetailImageId")REFERENCES "public"."BeautyCategoryDataDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."BeautyCategoryDataDetailsContents" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221107094105-1..20221107101934-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -57,9 +57,8 @@
 //mvpfreeproject
 MvpFreeProduct MvpFreeProduct []
-MvpFreeProductpage MvpFreeProductpage []
 MvpFreeProductCategory MvpFreeProductCategory []
 MvpFreeLikesUser MvpFreeLikesUser[]
 MvpFreeBoard MvpFreeBoard[]
  comments  Comment[]
@@ -67,8 +66,9 @@
   BeautyCategoryData BeautyCategoryData[]
   BeautyCategoryDataImages BeautyCategoryDataImages[]
   BeautyCategoryDataDetails BeautyCategoryDataDetails[]
   BeautyCategoryDataDetailsImages BeautyCategoryDataDetailsImages[]
+  BeautyCategoryDataDetailsContents BeautyCategoryDataDetailsContents[]
 }
@@ -386,9 +386,9 @@
   User      User?     @relation(fields: [userId], references: [id])
   userId    Int?
   }
-
+//메인에 노출되는 것
   model BeautyCategoryData {
   id        Int       @id @default(autoincrement())
   createdAt DateTime  @default(now())
   title   String?
@@ -396,9 +396,9 @@
   User      User?     @relation(fields: [userId], references: [id])
   userId    Int?
   }
-
+//메인 노출 각 카테고리마다 나오는 이미지, 정보
   model BeautyCategoryDataImages {
   id        Int       @id @default(autoincrement())
   createdAt DateTime  @default(now())
  url String?
@@ -413,9 +413,9 @@
          finalPrice String?
          BeautyCategoryDataDetails BeautyCategoryDataDetails[]
   }
-
+// 각 이미지 정보를 클릭시 뿌리는 데이터
    model BeautyCategoryDataDetails {
   id        Int       @id @default(autoincrement())
   createdAt DateTime  @default(now())
  url String?
@@ -423,12 +423,13 @@
      beautyDetailId   Int
        User      User?     @relation(fields: [userId], references: [id])
   userId    Int?
   BeautyCategoryDataDetailsImages BeautyCategoryDataDetailsImages[]
+    BeautyCategoryDataDetailsContents BeautyCategoryDataDetailsContents[]
   }
-
+// 상품 디테일 페이지에서 이미지 슬라이드 저장용
   model BeautyCategoryDataDetailsImages{
   id        Int       @id @default(autoincrement())
   createdAt DateTime  @default(now())
  url String?
@@ -437,4 +438,15 @@
        User      User?     @relation(fields: [userId], references: [id])
   userId    Int?
   }
+
+    model BeautyCategoryDataDetailsContents{
+  id        Int       @id @default(autoincrement())
+  createdAt DateTime  @default(now())
+ contents String?
+   BeautyCategoryDataDetails   BeautyCategoryDataDetails    @relation(fields: [beautyDetailImageId], references: [id])
+     beautyDetailImageId   Int
+       User      User?     @relation(fields: [userId], references: [id])
+  userId    Int?
+  
+  }
```


