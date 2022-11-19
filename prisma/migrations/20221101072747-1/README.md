# Migration `20221101072747-1`

This migration has been generated at 11/1/2022, 4:27:47 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."MvpFreeProductpage" (
"id" SERIAL,
"text" text   NOT NULL ,
"userId" integer   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."MvpFreeProduct" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"userId" integer   ,
"productpageId" integer   ,
"title" text   NOT NULL ,
"description" text   NOT NULL ,
"type" text   NOT NULL ,
"brand" text   NOT NULL ,
"category" text   NOT NULL ,
"price" integer   NOT NULL ,
"newproduct" text   NOT NULL ,
"sale" text   NOT NULL ,
"stock" text   NOT NULL ,
"discount" integer   NOT NULL ,
"variants" text   NOT NULL ,
"images" text   NOT NULL ,
"always" text   NOT NULL DEFAULT E'no',
PRIMARY KEY ("id")
)

ALTER TABLE "public"."MvpFreeProductpage" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."MvpFreeProduct" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."MvpFreeProduct" ADD FOREIGN KEY("productpageId")REFERENCES "public"."MvpFreeProductpage"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221031130225-1..20221101072747-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -53,9 +53,12 @@
 ProductCategory ProductCategory[]
 Keepstatus Keepstatus[]
 KeepOrder KeepOrder[]
+//mvpfreeproject
+MvpFreeProduct MvpFreeProduct []
+MvpFreeProductpage MvpFreeProductpage []
 }
@@ -280,4 +283,42 @@
   name String?
        }
+
+
+
+      ////mvpFree
+
+
+
+      model MvpFreeProductpage {
+  id         Int          @id @default(autoincrement())
+  text String
+  MvpFreeProduct  MvpFreeProduct[]
+     
+}
+
+
+model MvpFreeProduct {
+  id        Int       @id @default(autoincrement())
+  createdAt DateTime  @default(now())
+   User      User?     @relation(fields: [userId], references: [id])
+  userId    Int?
+MvpFreeProductpage      MvpFreeProductpage?     @relation(fields: [productpageId], references: [id])
+  productpageId    Int?
+        title String
+        description String
+        type String
+        brand String
+        category String
+        price Int
+        newproduct String
+        sale String
+        stock String
+        discount Int
+        variants  String
+        images  String
+ always String  @default("no")
+       
+       }
+
```


