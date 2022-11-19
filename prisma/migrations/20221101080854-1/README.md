# Migration `20221101080854-1`

This migration has been generated at 11/1/2022, 5:08:54 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."MvpFreeProductCategory" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"userId" integer   ,
"name" text   ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."MvpFreeProductCategory" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221101072747-1..20221101080854-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -57,8 +57,9 @@
 //mvpfreeproject
 MvpFreeProduct MvpFreeProduct []
 MvpFreeProductpage MvpFreeProductpage []
+MvpFreeProductCategory MvpFreeProductCategory []
 }
@@ -288,10 +289,17 @@
       ////mvpFree
+      model MvpFreeProductCategory {
+  id        Int       @id @default(autoincrement())
+  createdAt DateTime  @default(now())
+   User      User?     @relation(fields: [userId], references: [id])
+  userId    Int?
+  name String?
+ 
+       }
-
       model MvpFreeProductpage {
   id         Int          @id @default(autoincrement())
   text String
   MvpFreeProduct  MvpFreeProduct[]
```


