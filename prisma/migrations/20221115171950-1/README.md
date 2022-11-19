# Migration `20221115171950-1`

This migration has been generated at 11/16/2022, 2:19:50 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Chat" (
"id" SERIAL,
"receiverId" integer   NOT NULL ,
"senderId" integer   NOT NULL ,
"message" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."Chat" ADD FOREIGN KEY("receiverId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Chat" ADD FOREIGN KEY("senderId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221112113810-1..20221115171950-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
@@ -69,8 +69,12 @@
   BeautyCategoryDataDetailsImages BeautyCategoryDataDetailsImages[]
   BeautyCategoryDataDetailsContents BeautyCategoryDataDetailsContents[]
   BeautyLikesUser BeautyLikesUser[]
   RecentlyViewd RecentlyViewd[]
+  RecieverOfChat Chat[]  @relation("RecieverOfChat")
+ SenderOfChat Chat[]  @relation("SenderOfChat")
+
+
 }
@@ -471,5 +475,16 @@
   viewedAt DateTime @default(now())
   userId  Int?
   User    User?    @relation(fields: [userId], references: [id])
   boardId Int
+}
+
+model  Chat {
+id Int  @id  @default(autoincrement())
+receiverId Int
+receiver User  @relation("RecieverOfChat", fields: [receiverId], references: [id])
+sender User  @relation("SenderOfChat",fields: [senderId], references: [id])
+senderId Int
+message String
+createdAt DateTime  @default(now())
+updatedAt DateTime  @default(now())
 }
```


