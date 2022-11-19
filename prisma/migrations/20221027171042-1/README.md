# Migration `20221027171042-1`

This migration has been generated at 10/28/2022, 2:10:43 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Addmenual" DROP CONSTRAINT "Addmenual_userId_fkey"

ALTER TABLE "public"."Adminbasicmall" DROP CONSTRAINT "Adminbasicmall_userId_fkey"

ALTER TABLE "public"."Adminbasicplan" DROP CONSTRAINT "Adminbasicplan_userId_fkey"

ALTER TABLE "public"."Admincollectcategory" DROP CONSTRAINT "Admincollectcategory_userId_fkey"

ALTER TABLE "public"."Admincollectmarket" DROP CONSTRAINT "Admincollectmarket_userId_fkey"

ALTER TABLE "public"."Admincollectnation" DROP CONSTRAINT "Admincollectnation_userId_fkey"

ALTER TABLE "public"."Admincommissionfee" DROP CONSTRAINT "Admincommissionfee_userId_fkey"

ALTER TABLE "public"."Admincommissionmarket" DROP CONSTRAINT "Admincommissionmarket_userId_fkey"

ALTER TABLE "public"."Admincommissiontransfer" DROP CONSTRAINT "Admincommissiontransfer_userId_fkey"

ALTER TABLE "public"."Adminoptionfee" DROP CONSTRAINT "Adminoptionfee_userId_fkey"

ALTER TABLE "public"."Adminsellerfiltering" DROP CONSTRAINT "Adminsellerfiltering_userId_fkey"

ALTER TABLE "public"."Comment" DROP CONSTRAINT "Comment_commentId_fkey"

ALTER TABLE "public"."Comment" DROP CONSTRAINT "Comment_tweetId_fkey"

ALTER TABLE "public"."Comment" DROP CONSTRAINT "Comment_userId_fkey"

ALTER TABLE "public"."Connectinfo" DROP CONSTRAINT "Connectinfo_userId_fkey"

ALTER TABLE "public"."Deliveryfee" DROP CONSTRAINT "Deliveryfee_userId_fkey"

ALTER TABLE "public"."Deliverymangeitems" DROP CONSTRAINT "Deliverymangeitems_userId_fkey"

ALTER TABLE "public"."ExchangeRate" DROP CONSTRAINT "ExchangeRate_userId_fkey"

ALTER TABLE "public"."Filtering" DROP CONSTRAINT "Filtering_userId_fkey"

ALTER TABLE "public"."Following" DROP CONSTRAINT "Following_userId_fkey"

ALTER TABLE "public"."LikedTweet" DROP CONSTRAINT "LikedTweet_tweetId_fkey"

ALTER TABLE "public"."LikedTweet" DROP CONSTRAINT "LikedTweet_userId_fkey"

ALTER TABLE "public"."Maxiplan" DROP CONSTRAINT "Maxiplan_userId_fkey"

ALTER TABLE "public"."Privacypolicy" DROP CONSTRAINT "Privacypolicy_userId_fkey"

ALTER TABLE "public"."Refundpolicy" DROP CONSTRAINT "Refundpolicy_userId_fkey"

ALTER TABLE "public"."Sellingprice" DROP CONSTRAINT "Sellingprice_userId_fkey"

ALTER TABLE "public"."Stockhandling" DROP CONSTRAINT "Stockhandling_userId_fkey"

ALTER TABLE "public"."Subid" DROP CONSTRAINT "Subid_userId_fkey"

ALTER TABLE "public"."Termsanduse" DROP CONSTRAINT "Termsanduse_userId_fkey"

ALTER TABLE "public"."Tweet" DROP CONSTRAINT "Tweet_authorId_fkey"

DROP TABLE "public"."Addmenual"

DROP TABLE "public"."Adminbasicmall"

DROP TABLE "public"."Adminbasicplan"

DROP TABLE "public"."Admincollectcategory"

DROP TABLE "public"."Admincollectmarket"

DROP TABLE "public"."Admincollectnation"

DROP TABLE "public"."Admincommissionfee"

DROP TABLE "public"."Admincommissionmarket"

DROP TABLE "public"."Admincommissiontransfer"

DROP TABLE "public"."Adminoptionfee"

DROP TABLE "public"."Adminsellerfiltering"

DROP TABLE "public"."Comment"

DROP TABLE "public"."Connectinfo"

DROP TABLE "public"."Deliveryfee"

DROP TABLE "public"."Deliverymangeitems"

DROP TABLE "public"."Demandpoint"

DROP TABLE "public"."ExchangeRate"

DROP TABLE "public"."Filtering"

DROP TABLE "public"."Following"

DROP TABLE "public"."LikedTweet"

DROP TABLE "public"."Maxiplan"

DROP TABLE "public"."Privacypolicy"

DROP TABLE "public"."Refundpolicy"

DROP TABLE "public"."Sellingprice"

DROP TABLE "public"."Stockhandling"

DROP TABLE "public"."Subid"

DROP TABLE "public"."Termsanduse"

DROP TABLE "public"."Tweet"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20221027073305-1..20221027171042-1
--- datamodel.dml
+++ datamodel.dml
@@ -3,24 +3,14 @@
 }
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
-model Tweet {
-  id        Int          @id @default(autoincrement())
-  createdAt DateTime     @default(now())
-  content   String?
-  likes     LikedTweet[]
-  author    User?        @relation(fields: [authorId], references: [id])
-  authorId  Int?
-  comments  Comment[]
-}
-
 model User {
   id         Int          @id @default(autoincrement())
   email      String       @unique
   password   String       @default("")
@@ -37,50 +27,26 @@
 sample1phonenumber  String @default("")
 sample2name  String @default("")
 sample2phonenumber  String @default("")
-  tweets     Tweet[]
+ 
   Profile    Profile[]
-  likedTweet LikedTweet[]
-  comments   Comment[]
-  Following  Following[]
+
  UserProfile    UserProfile[]
-  ExchangeRate    ExchangeRate[]
-  Deliveryfee Deliveryfee[]
- Sellingprice Sellingprice[]
- Subid Subid[]
-  Connectinfo Connectinfo[]
-   Maxiplan Maxiplan[]
-  
-    Adminbasicplan Adminbasicplan[]
-    Adminbasicmall Adminbasicmall[]
-    Adminoptionfee Adminoptionfee[]
- Admincollectmarket Admincollectmarket[]
- Admincollectnation Admincollectnation[]
- Admincollectcategory Admincollectcategory[]
- Admincommissionmarket Admincommissionmarket[]
- Admincommissionfee Admincommissionfee[]
- Admincommissiontransfer Admincommissiontransfer[]
- Adminsellerfiltering Adminsellerfiltering[]
- Stockhandling Stockhandling[]
+
  Checkpoint Checkpoint[]
 Changepoint Changepoint[]
-Ordermanageitems  Ordermanageitems[]
-Deliverymangeitems  Deliverymangeitems[]
- Filtering  Filtering[]
+
  Productupdate  Productupdate[]
- Addmenual  Addmenual[]
- Privacypolicy  Privacypolicy[]
-  Refundpolicy  Refundpolicy[]
-   Termsanduse  Termsanduse[]
+
 Product  Product[]
 Paidproductlist  Paidproductlist[]
 Board Board[]
-
+Ordermanageitems Ordermanageitems[]
 LikesUser LikesUser[]
 ProductCategory ProductCategory[]
@@ -88,25 +54,9 @@
 }
-model LikedTweet {
-  id      Int      @id @default(autoincrement())
-  tweet   Tweet    @relation(fields: [tweetId], references: [id])
-  likedAt DateTime @default(now())
-  userId  Int?
-  User    User?    @relation(fields: [userId], references: [id])
-  tweetId Int
-}
-model Following {
-  id       Int    @id @default(autoincrement())
-  name     String
-  avatar   String
-  followId Int
-  User     User?  @relation(fields: [userId], references: [id])
-  userId   Int?
-}
 model Profile {
   id        Int      @id @default(autoincrement())
   createdAt DateTime @default(now())
@@ -139,288 +89,11 @@
-model Maxiplan {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
- malls String@default("")
- plan String@default("")
-        monthlycollecting String@default("")
-        productamount String@default("")
-        productmanagingamount String@default("")
-        update String@default("")
-        monthlyplanfee String@default("")
-        settingfee String@default("")
-        translatefee String@default("")
- 
-platformsettingprice String@default("")
-monthlyplatformsfee String@default("")
-  userId    Int?     
-  User      User?    @relation(fields: [userId], references: [id])
-}
-model ExchangeRate {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  cntokor       String?  @default("")
-  cntojp       String?  @default("")
-  jptokor       String?  @default("")
-  jptomal       String?  @default("")
-  jptocn       String?  @default("")
-  kortomal       String?  @default("")
-  kortocn       String?  @default("")
-  kortojp       String?  @default("")
-  ustocn       String?  @default("")
-  ustomal       String?  @default("")
-    ustojp       String?  @default("")
-  ustokor       String?  @default("")
-  indexid  Int? 
-  userId    Int?     
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-model Deliveryfee {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  cntokor       String?  @default("")
-  cntojp       String?  @default("")
-  jptokor       String?  @default("")
-  jptomal       String?  @default("")
-  jptocn       String?  @default("")
-  kortomal       String?  @default("")
-  kortocn       String?  @default("")
-  kortojp       String?  @default("")
-  ustocn       String?  @default("")
-  ustomal       String?  @default("")
-    ustojp       String?  @default("")
-  ustokor       String?  @default("")
-indexid  Int? 
-  userId    Int?     
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-
-
-
-model Sellingprice {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  price       String?  @default("")
-  mallname String?  @default("")
-  userId    Int?     
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-
-
-model Connectinfo  {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  shopid       String?  @default("")
-    apiid       String?  @default("")
-  apikey       String?  @default("")
-  code       String?  @default("")
-  shop       String?  @default("")
-  access_token String?  @default("")
-  refresh_token String?  @default("")
-  expires_in Int?  @default(1)
-  refresh_expires_in Int?  @default(1)
-  userId    Int?     
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-
-model Subid {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  subid       String?  @default("")
-  userId    Int?     
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-
-
-model Comment {
-  id        Int       @id @default(autoincrement())
-  createdAt DateTime  @default(now())
-  content   String?
-  Tweet     Tweet?    @relation(fields: [tweetId], references: [id])
-  tweetId   Int?
-  User      User?     @relation(fields: [userId], references: [id])
-  userId    Int?
-  comments  Comment[] @relation("CommentToComment")
-  Comment   Comment?  @relation("CommentToComment", fields: [commentId], references: [id])
-  commentId Int?
-}
-
-
-//jinsungadmin
-model Adminbasicplan {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  plan       String?
-  monthlycollecting  String?
-  productamount String?
-  productmanagingamount String?
-  update String?
-  monthlyplanfee String?
-  settingfee String?
-
-  translatefee String?
-  active Boolean? @default(true)
-  userId    Int?     
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-
-model Adminbasicmall {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  country       String?
-  platform  String?
-  settingfee String?
-    translatefee String?
- monthlyfee String?
- selleramount String?
-  active Boolean? @default(true)
-  userId    Int?     
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-
-model Adminoptionfee {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  productamount String?
-  price String?
-  promotion String?
-  modelsort String?
-  active Boolean? @default(true)
- indexid Int
-  userId    Int?     
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-
-model Admincollectmarket {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  productamount String?
-  market String?  @default("")
-  country String?  @default("")
-  active Boolean? @default(true)
-  image String?
-  userId    Int?    
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-
-model Admincollectnation {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  productamount String? 
-  market String?  @default("")
-  country String?  @default("")
-  image String?
-  active Boolean? @default(true)
- 
-  userId    Int?    
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-
-model Admincollectcategory {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  order String?
-  first String?
-  second String?
-  message String?
-  active Boolean? @default(true)
- 
-  userId    Int?     
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-
-
-
-
-model Admincommissionmarket {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  country String?
-  market String?
-  fee String?
-
-  userId    Int?     
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-
-
-model Admincommissionfee {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  country String?
-  market String?
-  fee String?
-
-  userId    Int?     
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-
-model Admincommissiontransfer {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  country String?
-  market String?
-  fee String?
-
-  userId    Int?     
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-model Adminsellerfiltering {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  country String?
-  market String?
-  contents String?
-  userId    Int?     
-  User      User?    @relation(fields: [userId], references: [id])
-}
-model Filtering {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  country String?
-  contents String?
-  userId    Int?     
-  market String?
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-
-model Stockhandling {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  stockimage String?
-  name String?
-  price String?
-  stock String?
-  stockdemand String?
-  widthrowdemand String?
-  productfrom String  @default("")
-  productto String  @default("")
-  indexid Int?
-  userId    Int?    
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
 model Checkpoint {
   id        Int      @id @default(autoincrement())
   createdAt DateTime @default(now())
   marketname String?
@@ -456,80 +129,9 @@
   User      User?    @relation(fields: [userId], references: [id])
 }
-model Addmenual {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  contents String?
-
-  userId    Int?    
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-model Privacypolicy {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-
-  contents String?
-
-  userId    Int?    
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-model Refundpolicy {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-
-  contents String?
-
-  userId    Int?    
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-model Termsanduse {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-
-  contents String?
-
-  userId    Int?    
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-
-model Demandpoint {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  confirmAt String? @default("")
-  bankaccount String?
-  price String?
-  checkname String?
-   checkstatus String? @default("")
-  image String?
-
- 
-}
-
-
-model Deliverymangeitems {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  product_main_image String?
-  name String?
-   currency String?
-  shipping_amount String?
-   created_at String?
-  updated_at String?
-     paid_price String?
-  item_price String?
-
-  userId    Int?    
-  User      User?    @relation(fields: [userId], references: [id])
-}
-
-
 //project
 model Product {
   id        Int       @id @default(autoincrement())
```


