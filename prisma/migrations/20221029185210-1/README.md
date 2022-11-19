# Migration `20221029185210-1`

This migration has been generated at 10/30/2022, 3:52:10 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."KeepOrder" ADD COLUMN "orderaddress" text   NOT NULL DEFAULT E'no'

ALTER TABLE "public"."Ordermanageitems" ADD COLUMN "orderaddress" text   NOT NULL DEFAULT E'no'
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221029180103-1..20221029185210-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -183,8 +183,9 @@
   created_at String?
   updated_at String?
   item_price String?
   paidstatus String?
+  orderaddress String  @default("no")
   productid Int?
   messagefromcustomer String @default("no")
   messagefromadmin String @default("no")
   Keepstatus Keepstatus[]
@@ -218,8 +219,9 @@
   productName String?
   productPrice String?
   productQty String?
   productKeepQty String?
+    orderaddress String  @default("no")
   demandproductKeepQty String @default("0")
   messagefromcustomer String @default("no")
   messagefromadmin String @default("no")
     paidstatus String @default("no")
```


