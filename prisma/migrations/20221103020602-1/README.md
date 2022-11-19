# Migration `20221103020602-1`

This migration has been generated at 11/3/2022, 11:06:02 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."MvpFreeLikesUser" (
"id" SERIAL,
"likedAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"userId" integer   ,
"boardId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."MvpFreeBoard" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"userId" integer   ,
"title" text   ,
"contents" text   ,
"images" text   ,
"likes" text   ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."MvpFreeLikesUser" ADD FOREIGN KEY("boardId")REFERENCES "public"."MvpFreeBoard"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."MvpFreeLikesUser" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."MvpFreeBoard" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221101080854-1..20221103020602-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -58,8 +58,10 @@
 MvpFreeProduct MvpFreeProduct []
 MvpFreeProductpage MvpFreeProductpage []
 MvpFreeProductCategory MvpFreeProductCategory []
+MvpFreeLikesUser MvpFreeLikesUser[]
+MvpFreeBoard MvpFreeBoard[]
 }
@@ -329,4 +331,24 @@
  always String  @default("no")
        }
+model MvpFreeLikesUser {
+  id      Int      @id @default(autoincrement())
+  MvpFreeBoard   MvpFreeBoard    @relation(fields: [boardId], references: [id])
+  likedAt DateTime @default(now())
+  userId  Int?
+  User    User?    @relation(fields: [userId], references: [id])
+  boardId Int
+}
+
+model MvpFreeBoard {
+  id        Int       @id @default(autoincrement())
+  createdAt DateTime  @default(now())
+   User      User?     @relation(fields: [userId], references: [id])
+  userId    Int?
+  title String?
+  contents String?
+   images String?   
+   likes String?   
+    MvpFreeLikesUser     MvpFreeLikesUser[]
+       }
```


