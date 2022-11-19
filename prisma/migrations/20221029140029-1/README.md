# Migration `20221029140029-1`

This migration has been generated at 10/29/2022, 11:00:29 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Ordermanageitems" ADD COLUMN "messagefromcustomer" text   NOT NULL DEFAULT E'no',
ADD COLUMN "messagefromadmin" text   NOT NULL DEFAULT E'no'

CREATE TABLE "public"."KeepOrder" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"userId" integer   ,
"productId" text   ,
"orderId" text   ,
"productName" text   ,
"productPrice" text   ,
"productQty" text   ,
"productKeepQty" text   ,
"messagefromcustomer" text   NOT NULL DEFAULT E'no',
"messagefromadmin" text   NOT NULL DEFAULT E'no',
PRIMARY KEY ("id")
)

ALTER TABLE "public"."KeepOrder" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221029113406-1..20221029140029-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -49,8 +49,9 @@
 LikesUser LikesUser[]
 ProductCategory ProductCategory[]
 Keepstatus Keepstatus[]
+KeepOrder KeepOrder[]
 }
@@ -181,9 +182,11 @@
   created_at String?
   updated_at String?
   item_price String?
   paidstatus String?
-   productid Int?
+  productid Int?
+  messagefromcustomer String @default("no")
+  messagefromadmin String @default("no")
   Keepstatus Keepstatus[]
   userId    Int?    
   User      User?    @relation(fields: [userId], references: [id])
 }
@@ -203,9 +206,26 @@
 }
+model KeepOrder {
+  id      Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  userId  Int?
+  User    User?    @relation(fields: [userId], references: [id])
+  productId String?
+  orderId String?
+  productName String?
+  productPrice String?
+  productQty String?
+  productKeepQty String?
+  messagefromcustomer String @default("no")
+  messagefromadmin String @default("no")
+}
+
+
+
 model Paidproductlist {
   id        Int       @id @default(autoincrement())
   createdAt DateTime  @default(now())
    User      User?     @relation(fields: [userId], references: [id])
```


