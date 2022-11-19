# Migration `20221027073305-1`

This migration has been generated at 10/27/2022, 4:33:05 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Ordermanageitems" ADD COLUMN "shippingfee" text   NOT NULL DEFAULT E'0'
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221026124049-1..20221027073305-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model Tweet {
   id        Int          @id @default(autoincrement())
@@ -570,17 +570,19 @@
   id        Int      @id @default(autoincrement())
   createdAt DateTime @default(now())
   product_main_image String?
   name String?
+  shippingfee String @default("0")
   wholeamount String?
-    keepingamount String?
+  keepingamount String?
   shipping_amount String?
   multiorder String?
   created_at String?
   updated_at String?
   item_price String?
   paidstatus String?
    productid Int?
+ 
   userId    Int?    
   User      User?    @relation(fields: [userId], references: [id])
 }
```


