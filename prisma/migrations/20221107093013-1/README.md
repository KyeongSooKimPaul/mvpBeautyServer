# Migration `20221107093013-1`

This migration has been generated at 11/7/2022, 6:30:13 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."BeautyCategoryData" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"title" text   ,
"userId" integer   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."BeautyCategoryDataImages" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"url" text   ,
"beautyId" integer   NOT NULL ,
"userId" integer   ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."BeautyCategoryData" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."BeautyCategoryDataImages" ADD FOREIGN KEY("beautyId")REFERENCES "public"."BeautyCategoryData"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."BeautyCategoryDataImages" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221104085221-1..20221107093013-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -29,8 +29,9 @@
 sample1phonenumber  String @default("")
 sample2name  String @default("")
 sample2phonenumber  String @default("")
+
   Profile    Profile[]
@@ -62,8 +63,10 @@
 MvpFreeLikesUser MvpFreeLikesUser[]
 MvpFreeBoard MvpFreeBoard[]
  comments  Comment[]
   Hashtag  Hashtag[]
+  BeautyCategoryData BeautyCategoryData[]
+  BeautyCategoryDataImages BeautyCategoryDataImages[]
 }
@@ -379,5 +382,26 @@
   MvpFreeBoard     MvpFreeBoard?    @relation(fields: [boardId], references: [id])
   boardId   Int?
   User      User?     @relation(fields: [userId], references: [id])
   userId    Int?
+  }
+
+
+  model BeautyCategoryData {
+  id        Int       @id @default(autoincrement())
+  createdAt DateTime  @default(now())
+  title   String?
+  BeautyCategoryDataImages BeautyCategoryDataImages[]
+  User      User?     @relation(fields: [userId], references: [id])
+  userId    Int?
+  }
+
+
+  model BeautyCategoryDataImages {
+  id        Int       @id @default(autoincrement())
+  createdAt DateTime  @default(now())
+ url String?
+   BeautyCategoryData   BeautyCategoryData    @relation(fields: [beautyId], references: [id])
+     beautyId   Int
+       User      User?     @relation(fields: [userId], references: [id])
+  userId    Int?
   }
```


