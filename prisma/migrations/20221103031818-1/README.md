# Migration `20221103031818-1`

This migration has been generated at 11/3/2022, 12:18:18 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Comment" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"content" text   ,
"boardId" integer   ,
"userId" integer   ,
"commentId" integer   ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."Comment" ADD FOREIGN KEY("boardId")REFERENCES "public"."MvpFreeBoard"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Comment" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Comment" ADD FOREIGN KEY("commentId")REFERENCES "public"."Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221103020602-1..20221103031818-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -60,8 +60,9 @@
 MvpFreeProductpage MvpFreeProductpage []
 MvpFreeProductCategory MvpFreeProductCategory []
 MvpFreeLikesUser MvpFreeLikesUser[]
 MvpFreeBoard MvpFreeBoard[]
+ comments  Comment[]
 }
@@ -350,5 +351,20 @@
   contents String?
    images String?   
    likes String?   
     MvpFreeLikesUser     MvpFreeLikesUser[]
-       }
+     comments  Comment[]
+       }
+
+
+  model Comment {
+  id        Int       @id @default(autoincrement())
+  createdAt DateTime  @default(now())
+  content   String?
+  MvpFreeBoard     MvpFreeBoard?    @relation(fields: [boardId], references: [id])
+  boardId   Int?
+  User      User?     @relation(fields: [userId], references: [id])
+  userId    Int?
+  comments  Comment[] @relation("CommentToComment")
+  Comment   Comment?  @relation("CommentToComment", fields: [commentId], references: [id])
+  commentId Int?
+}
```


