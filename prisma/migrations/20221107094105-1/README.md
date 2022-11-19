# Migration `20221107094105-1`

This migration has been generated at 11/7/2022, 6:41:05 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."BeautyCategoryDataImages" ADD COLUMN "title" text   ,
ADD COLUMN "subtitle" text   ,
ADD COLUMN "brandName" text   ,
ADD COLUMN "originalPrice" text   ,
ADD COLUMN "finalPrice" text   

CREATE TABLE "public"."BeautyCategoryDataDetails" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"url" text   ,
"beautyDetailId" integer   NOT NULL ,
"userId" integer   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."BeautyCategoryDataDetailsImages" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"url" text   ,
"beautyDetailImageId" integer   NOT NULL ,
"userId" integer   ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."BeautyCategoryDataDetails" ADD FOREIGN KEY("beautyDetailId")REFERENCES "public"."BeautyCategoryDataImages"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."BeautyCategoryDataDetails" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."BeautyCategoryDataDetailsImages" ADD FOREIGN KEY("beautyDetailImageId")REFERENCES "public"."BeautyCategoryDataDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."BeautyCategoryDataDetailsImages" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221107093013-1..20221107094105-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -65,8 +65,10 @@
  comments  Comment[]
   Hashtag  Hashtag[]
   BeautyCategoryData BeautyCategoryData[]
   BeautyCategoryDataImages BeautyCategoryDataImages[]
+  BeautyCategoryDataDetails BeautyCategoryDataDetails[]
+  BeautyCategoryDataDetailsImages BeautyCategoryDataDetailsImages[]
 }
@@ -403,5 +405,36 @@
    BeautyCategoryData   BeautyCategoryData    @relation(fields: [beautyId], references: [id])
      beautyId   Int
        User      User?     @relation(fields: [userId], references: [id])
   userId    Int?
-  }
+   title String?
+    subtitle String?
+     brandName String?
+      originalPrice String?
+         finalPrice String?
+         BeautyCategoryDataDetails BeautyCategoryDataDetails[]
+  }
+
+
+   model BeautyCategoryDataDetails {
+  id        Int       @id @default(autoincrement())
+  createdAt DateTime  @default(now())
+ url String?
+   BeautyCategoryDataImages   BeautyCategoryDataImages    @relation(fields: [beautyDetailId], references: [id])
+     beautyDetailId   Int
+       User      User?     @relation(fields: [userId], references: [id])
+  userId    Int?
+  BeautyCategoryDataDetailsImages BeautyCategoryDataDetailsImages[]
+  
+  
+  }
+
+  model BeautyCategoryDataDetailsImages{
+  id        Int       @id @default(autoincrement())
+  createdAt DateTime  @default(now())
+ url String?
+   BeautyCategoryDataDetails   BeautyCategoryDataDetails    @relation(fields: [beautyDetailImageId], references: [id])
+     beautyDetailImageId   Int
+       User      User?     @relation(fields: [userId], references: [id])
+  userId    Int?
+  
+  }
```


