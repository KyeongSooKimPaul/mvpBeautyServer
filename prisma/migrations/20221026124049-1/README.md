# Migration `20221026124049-1`

This migration has been generated at 10/26/2022, 9:40:49 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Product" ADD COLUMN "always" text   NOT NULL DEFAULT E'no'

ALTER TABLE "public"."User" ADD COLUMN "businesscard" text   NOT NULL DEFAULT E'',
ADD COLUMN "approved" text   NOT NULL DEFAULT E'no',
ADD COLUMN "recommendname" text   NOT NULL DEFAULT E'',
ADD COLUMN "recommendphonenumber" text   NOT NULL DEFAULT E'',
ADD COLUMN "sample1name" text   NOT NULL DEFAULT E'',
ADD COLUMN "sample1phonenumber" text   NOT NULL DEFAULT E'',
ADD COLUMN "sample2name" text   NOT NULL DEFAULT E'',
ADD COLUMN "sample2phonenumber" text   NOT NULL DEFAULT E''

CREATE TABLE "public"."LikesUser" (
"id" SERIAL,
"likedAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"userId" integer   ,
"boardId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Board" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"userId" integer   ,
"title" text   ,
"contents" text   ,
"images" text   ,
"likes" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."ProductCategory" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"userId" integer   ,
"name" text   ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."LikesUser" ADD FOREIGN KEY("boardId")REFERENCES "public"."Board"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."LikesUser" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Board" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."ProductCategory" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20221026124049-1
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,638 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource postgresql {
+  provider = "postgresql"
+  url = "***"
+}
+
+model Tweet {
+  id        Int          @id @default(autoincrement())
+  createdAt DateTime     @default(now())
+  content   String?
+  likes     LikedTweet[]
+  author    User?        @relation(fields: [authorId], references: [id])
+  authorId  Int?
+  comments  Comment[]
+}
+
+
+
+
+model User {
+  id         Int          @id @default(autoincrement())
+  email      String       @unique
+  password   String       @default("")
+  name       String?
+  createdAt DateTime @default(now())
+  phonenumber String       @default("")
+   deposit   String       @default("0")
+    point   String       @default("0")
+    businesscard  String @default("")
+  approved  String @default("no")
+recommendname  String @default("")
+recommendphonenumber  String @default("")
+sample1name  String @default("")
+sample1phonenumber  String @default("")
+sample2name  String @default("")
+sample2phonenumber  String @default("")
+
+  tweets     Tweet[]
+  Profile    Profile[]
+  likedTweet LikedTweet[]
+  comments   Comment[]
+  Following  Following[]
+
+ UserProfile    UserProfile[]
+  ExchangeRate    ExchangeRate[]
+  Deliveryfee Deliveryfee[]
+ Sellingprice Sellingprice[]
+ Subid Subid[]
+  Connectinfo Connectinfo[]
+   Maxiplan Maxiplan[]
+  
+    Adminbasicplan Adminbasicplan[]
+    Adminbasicmall Adminbasicmall[]
+    Adminoptionfee Adminoptionfee[]
+ Admincollectmarket Admincollectmarket[]
+
+ Admincollectnation Admincollectnation[]
+ Admincollectcategory Admincollectcategory[]
+ Admincommissionmarket Admincommissionmarket[]
+ Admincommissionfee Admincommissionfee[]
+ Admincommissiontransfer Admincommissiontransfer[]
+ Adminsellerfiltering Adminsellerfiltering[]
+ Stockhandling Stockhandling[]
+ Checkpoint Checkpoint[]
+Changepoint Changepoint[]
+
+Ordermanageitems  Ordermanageitems[]
+Deliverymangeitems  Deliverymangeitems[]
+ Filtering  Filtering[]
+ Productupdate  Productupdate[]
+ Addmenual  Addmenual[]
+ Privacypolicy  Privacypolicy[]
+  Refundpolicy  Refundpolicy[]
+   Termsanduse  Termsanduse[]
+Product  Product[]
+Paidproductlist  Paidproductlist[]
+Board Board[]
+
+
+LikesUser LikesUser[]
+
+ProductCategory ProductCategory[]
+
+
+
+
+}
+
+model LikedTweet {
+  id      Int      @id @default(autoincrement())
+  tweet   Tweet    @relation(fields: [tweetId], references: [id])
+  likedAt DateTime @default(now())
+  userId  Int?
+  User    User?    @relation(fields: [userId], references: [id])
+  tweetId Int
+}
+
+model Following {
+  id       Int    @id @default(autoincrement())
+  name     String
+  avatar   String
+  followId Int
+  User     User?  @relation(fields: [userId], references: [id])
+  userId   Int?
+}
+
+model Profile {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  bio       String?
+  location  String?
+  website   String?
+  avatar    String?
+  userId    Int?     
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+//jinsung
+
+//maxi plan
+
+model UserProfile {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  kakaoid       String
+  gsiid  String
+  bankname   String
+  bankaccount    String
+    businessnumber   String
+  contactemail    String
+   deposit    String
+    point    String
+  userId    Int?     
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+
+
+model Maxiplan {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+ malls String@default("")
+ plan String@default("")
+        monthlycollecting String@default("")
+        productamount String@default("")
+        productmanagingamount String@default("")
+        update String@default("")
+        monthlyplanfee String@default("")
+        settingfee String@default("")
+        translatefee String@default("")
+
+ 
+platformsettingprice String@default("")
+monthlyplatformsfee String@default("")
+  userId    Int?     
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+model ExchangeRate {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  cntokor       String?  @default("")
+  cntojp       String?  @default("")
+  jptokor       String?  @default("")
+  jptomal       String?  @default("")
+  jptocn       String?  @default("")
+  kortomal       String?  @default("")
+  kortocn       String?  @default("")
+  kortojp       String?  @default("")
+  ustocn       String?  @default("")
+  ustomal       String?  @default("")
+    ustojp       String?  @default("")
+  ustokor       String?  @default("")
+  indexid  Int? 
+  userId    Int?     
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+model Deliveryfee {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  cntokor       String?  @default("")
+  cntojp       String?  @default("")
+  jptokor       String?  @default("")
+  jptomal       String?  @default("")
+  jptocn       String?  @default("")
+  kortomal       String?  @default("")
+  kortocn       String?  @default("")
+  kortojp       String?  @default("")
+  ustocn       String?  @default("")
+  ustomal       String?  @default("")
+    ustojp       String?  @default("")
+  ustokor       String?  @default("")
+indexid  Int? 
+  userId    Int?     
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+
+
+model Sellingprice {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  price       String?  @default("")
+  mallname String?  @default("")
+  userId    Int?     
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+
+model Connectinfo  {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  shopid       String?  @default("")
+    apiid       String?  @default("")
+  apikey       String?  @default("")
+  code       String?  @default("")
+  shop       String?  @default("")
+  access_token String?  @default("")
+  refresh_token String?  @default("")
+  expires_in Int?  @default(1)
+  refresh_expires_in Int?  @default(1)
+  userId    Int?     
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+model Subid {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  subid       String?  @default("")
+  userId    Int?     
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+
+model Comment {
+  id        Int       @id @default(autoincrement())
+  createdAt DateTime  @default(now())
+  content   String?
+  Tweet     Tweet?    @relation(fields: [tweetId], references: [id])
+  tweetId   Int?
+  User      User?     @relation(fields: [userId], references: [id])
+  userId    Int?
+  comments  Comment[] @relation("CommentToComment")
+  Comment   Comment?  @relation("CommentToComment", fields: [commentId], references: [id])
+  commentId Int?
+}
+
+
+//jinsungadmin
+model Adminbasicplan {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  plan       String?
+  monthlycollecting  String?
+  productamount String?
+  productmanagingamount String?
+  update String?
+  monthlyplanfee String?
+  settingfee String?
+
+  translatefee String?
+  active Boolean? @default(true)
+  userId    Int?     
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+model Adminbasicmall {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  country       String?
+  platform  String?
+  settingfee String?
+    translatefee String?
+ monthlyfee String?
+ selleramount String?
+  active Boolean? @default(true)
+  userId    Int?     
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+model Adminoptionfee {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  productamount String?
+  price String?
+  promotion String?
+  modelsort String?
+  active Boolean? @default(true)
+ indexid Int
+  userId    Int?     
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+model Admincollectmarket {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  productamount String?
+  market String?  @default("")
+  country String?  @default("")
+  active Boolean? @default(true)
+  image String?
+  userId    Int?    
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+model Admincollectnation {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  productamount String? 
+  market String?  @default("")
+  country String?  @default("")
+  image String?
+  active Boolean? @default(true)
+ 
+  userId    Int?    
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+model Admincollectcategory {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  order String?
+  first String?
+  second String?
+  message String?
+  active Boolean? @default(true)
+ 
+  userId    Int?     
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+
+
+
+model Admincommissionmarket {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  country String?
+  market String?
+  fee String?
+
+  userId    Int?     
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+
+model Admincommissionfee {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  country String?
+  market String?
+  fee String?
+
+  userId    Int?     
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+model Admincommissiontransfer {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  country String?
+  market String?
+  fee String?
+
+  userId    Int?     
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+model Adminsellerfiltering {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  country String?
+  market String?
+  contents String?
+  userId    Int?     
+  User      User?    @relation(fields: [userId], references: [id])
+}
+model Filtering {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  country String?
+  contents String?
+  userId    Int?     
+  market String?
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+model Stockhandling {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  stockimage String?
+  name String?
+  price String?
+  stock String?
+  stockdemand String?
+  widthrowdemand String?
+  productfrom String  @default("")
+  productto String  @default("")
+  indexid Int?
+  userId    Int?    
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+model Checkpoint {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  marketname String?
+  price String?
+  image String?
+  checkstatus String?
+
+  userId    Int?    
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+model Changepoint {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  price String?
+  checkstatus String?
+  userId    Int?    
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+
+model Productupdate {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+
+
+  prefix String?
+  postfix String?
+
+
+  userId    Int?    
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+model Addmenual {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+
+  contents String?
+
+  userId    Int?    
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+model Privacypolicy {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+
+  contents String?
+
+  userId    Int?    
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+model Refundpolicy {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+
+  contents String?
+
+  userId    Int?    
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+model Termsanduse {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+
+  contents String?
+
+  userId    Int?    
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+model Demandpoint {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  confirmAt String? @default("")
+  bankaccount String?
+  price String?
+  checkname String?
+   checkstatus String? @default("")
+  image String?
+
+ 
+}
+
+
+model Deliverymangeitems {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  product_main_image String?
+  name String?
+   currency String?
+  shipping_amount String?
+   created_at String?
+  updated_at String?
+     paid_price String?
+  item_price String?
+
+  userId    Int?    
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+//project
+
+model Product {
+  id        Int       @id @default(autoincrement())
+  createdAt DateTime  @default(now())
+   User      User?     @relation(fields: [userId], references: [id])
+  userId    Int?
+Productpage      Productpage?     @relation(fields: [productpageId], references: [id])
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
+
+ always String  @default("no")
+       
+       }
+       
+
+
+model Productpage {
+  id         Int          @id @default(autoincrement())
+  text String
+  Product  Product[]
+     
+}
+
+
+
+model Ordermanageitems {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  product_main_image String?
+  name String?
+  wholeamount String?
+    keepingamount String?
+  shipping_amount String?
+  multiorder String?
+  created_at String?
+  updated_at String?
+  item_price String?
+  paidstatus String?
+   productid Int?
+  userId    Int?    
+  User      User?    @relation(fields: [userId], references: [id])
+}
+
+
+
+model Paidproductlist {
+  id        Int       @id @default(autoincrement())
+  createdAt DateTime  @default(now())
+   User      User?     @relation(fields: [userId], references: [id])
+  userId    Int?
+        productid Int?
+        title String?
+        category String?
+        price String?
+        discount String?
+        images  String?
+  wholeamount String?
+    keepingamount String?
+  shipping_amount String?
+  updated_at String?
+  orderstatus String?
+
+       
+       }
+
+model LikesUser {
+  id      Int      @id @default(autoincrement())
+  Board   Board    @relation(fields: [boardId], references: [id])
+  likedAt DateTime @default(now())
+  userId  Int?
+  User    User?    @relation(fields: [userId], references: [id])
+  boardId Int
+}
+
+model Board {
+  id        Int       @id @default(autoincrement())
+  createdAt DateTime  @default(now())
+   User      User?     @relation(fields: [userId], references: [id])
+  userId    Int?
+  title String?
+  contents String?
+   images String?   
+   likes String?   
+    LikesUser     LikesUser[]
+       }
+
+       model ProductCategory {
+  id        Int       @id @default(autoincrement())
+  createdAt DateTime  @default(now())
+   User      User?     @relation(fields: [userId], references: [id])
+  userId    Int?
+  name String?
+ 
+       }
+
```

