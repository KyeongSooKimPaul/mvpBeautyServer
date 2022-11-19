# Migration `20221031130225-1`

This migration has been generated at 10/31/2022, 10:02:25 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" ADD COLUMN "isKakaoSavedId" text   NOT NULL DEFAULT E'no'
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221029185210-1..20221031130225-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -15,8 +15,9 @@
   email      String       @unique
   password   String       @default("")
   name       String?
   address  String @default("")
+     isKakaoSavedId   String       @default("no")
   createdAt DateTime @default(now())
   phonenumber String       @default("")
    deposit   String       @default("0")
     point   String       @default("0")
```


