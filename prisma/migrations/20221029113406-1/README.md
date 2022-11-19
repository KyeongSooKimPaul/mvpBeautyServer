# Migration `20221029113406-1`

This migration has been generated at 10/29/2022, 8:34:06 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Keepstatus" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"userId" integer   ,
"keepId" integer   NOT NULL ,
"productId" text   ,
"productName" text   ,
"productPrice" text   ,
"productQty" text   ,
"productKeepQty" text   ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."Keepstatus" ADD FOREIGN KEY("keepId")REFERENCES "public"."Ordermanageitems"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Keepstatus" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221029083606-1..20221029113406-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -48,12 +48,12 @@
 Ordermanageitems Ordermanageitems[]
 LikesUser LikesUser[]
 ProductCategory ProductCategory[]
+Keepstatus Keepstatus[]
-
 }
@@ -182,15 +182,30 @@
   updated_at String?
   item_price String?
   paidstatus String?
    productid Int?
- 
+  Keepstatus Keepstatus[]
   userId    Int?    
   User      User?    @relation(fields: [userId], references: [id])
 }
+model Keepstatus {
+  id      Int      @id @default(autoincrement())
+  Ordermanageitems   Ordermanageitems    @relation(fields: [keepId], references: [id])
+  createdAt DateTime @default(now())
+  userId  Int?
+  User    User?    @relation(fields: [userId], references: [id])
+  keepId Int
+  productId String?
+  productName String?
+  productPrice String?
+  productQty String?
+  productKeepQty String?
+}
+
+
 model Paidproductlist {
   id        Int       @id @default(autoincrement())
   createdAt DateTime  @default(now())
    User      User?     @relation(fields: [userId], references: [id])
```


