# Migration `20221029083606-1`

This migration has been generated at 10/29/2022, 5:36:06 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" ALTER COLUMN "approved" SET DEFAULT E'yes'
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221027171042-1..20221029083606-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -19,9 +19,9 @@
   phonenumber String       @default("")
    deposit   String       @default("0")
     point   String       @default("0")
     businesscard  String @default("")
-  approved  String @default("no")
+  approved  String @default("yes")
 recommendname  String @default("")
 recommendphonenumber  String @default("")
 sample1name  String @default("")
 sample1phonenumber  String @default("")
```


