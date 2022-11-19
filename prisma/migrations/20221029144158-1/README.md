# Migration `20221029144158-1`

This migration has been generated at 10/29/2022, 11:41:58 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."KeepOrder" ADD COLUMN "demandproductKeepQty" text   NOT NULL DEFAULT E'0'
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221029140029-1..20221029144158-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -217,8 +217,9 @@
   productName String?
   productPrice String?
   productQty String?
   productKeepQty String?
+  demandproductKeepQty String @default("0")
   messagefromcustomer String @default("no")
   messagefromadmin String @default("no")
 }
```


