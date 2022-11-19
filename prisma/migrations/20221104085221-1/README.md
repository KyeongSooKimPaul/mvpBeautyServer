# Migration `20221104085221-1`

This migration has been generated at 11/4/2022, 5:52:21 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Hashtag" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"content" text   ,
"boardId" integer   ,
"userId" integer   ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."Hashtag" ADD FOREIGN KEY("boardId")REFERENCES "public"."MvpFreeBoard"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Hashtag" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221103031818-1..20221104085221-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -61,9 +61,9 @@
 MvpFreeProductCategory MvpFreeProductCategory []
 MvpFreeLikesUser MvpFreeLikesUser[]
 MvpFreeBoard MvpFreeBoard[]
  comments  Comment[]
-
+  Hashtag  Hashtag[]
 }
@@ -352,8 +352,9 @@
    images String?   
    likes String?   
     MvpFreeLikesUser     MvpFreeLikesUser[]
      comments  Comment[]
+       Hashtag  Hashtag[]
        }
   model Comment {
@@ -366,5 +367,17 @@
   userId    Int?
   comments  Comment[] @relation("CommentToComment")
   Comment   Comment?  @relation("CommentToComment", fields: [commentId], references: [id])
   commentId Int?
-}
+}
+
+
+
+  model Hashtag {
+  id        Int       @id @default(autoincrement())
+  createdAt DateTime  @default(now())
+  content   String?
+  MvpFreeBoard     MvpFreeBoard?    @relation(fields: [boardId], references: [id])
+  boardId   Int?
+  User      User?     @relation(fields: [userId], references: [id])
+  userId    Int?
+  }
```


