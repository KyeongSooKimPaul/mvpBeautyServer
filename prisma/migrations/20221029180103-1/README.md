# Migration `20221029180103-1`

This migration has been generated at 10/30/2022, 3:01:03 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" ADD COLUMN "address" text   NOT NULL DEFAULT E''
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221029173626-1..20221029180103-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -14,8 +14,9 @@
   id         Int          @id @default(autoincrement())
   email      String       @unique
   password   String       @default("")
   name       String?
+  address  String @default("")
   createdAt DateTime @default(now())
   phonenumber String       @default("")
    deposit   String       @default("0")
     point   String       @default("0")
```


