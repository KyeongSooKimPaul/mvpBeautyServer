# Migration `20221029173626-1`

This migration has been generated at 10/30/2022, 2:36:26 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."KeepOrder" ADD COLUMN "paidstatus" text   NOT NULL DEFAULT E'no'
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221029144158-1..20221029173626-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -220,8 +220,9 @@
   productKeepQty String?
   demandproductKeepQty String @default("0")
   messagefromcustomer String @default("no")
   messagefromadmin String @default("no")
+    paidstatus String @default("no")
 }
```


