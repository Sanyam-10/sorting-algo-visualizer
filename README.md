# AWS S3 Static Website Deployment

## 📌 Project Overview
This project demonstrates how to deploy a static website using **Amazon S3**. 
It includes enabling static website hosting, configuring bucket policies, and deploying the site using CI/CD.

---

## 🚀 Features
- Static website hosting on Amazon S3  
- Public access via S3 bucket policy  
- Fast, scalable, serverless hosting  
- Optional CloudFront CDN integration  
- CI/CD pipeline using GitHub Actions  

---

## 🛠 Technologies Used
- AWS S3  
- AWS IAM  
- Git & GitHub  
- HTML, CSS, JavaScript  
- GitHub Actions (CI/CD)  

---

## 📂 Folder Structure
project/
│-- index.html
│-- styles.css
│-- script.js
│-- assets/


## 📌 Steps to Deploy on AWS S3

### **1. Create an S3 Bucket**
- Go to AWS S3 → Create bucket  
- Uncheck **Block all public access**  
- Create the bucket  

### **2. Enable Static Website Hosting**
- Open **Properties**  
- Enable **Static website hosting**  
- Set:  
  - Index document → `index.html`  
  - Error document → `error.html` (optional)

### **3. Upload  Website Files**
- Go to **Objects → Upload**  
- Upload HTML, CSS, JS, and assets  

### **4. Add Bucket Policy (Make Public)**
 *sorting-algo-visualize *:
```json
{
"Version": "2012-10-17",
"Statement": [
{
"Effect": "Allow",
"Principal": "",
"Action": "s3:GetObject",
"Resource": "arn:aws:s3:::sorting-algo-visualize/"
}
]
}
```
5. Access  Website
Open the S3 website endpoint:
http://sorting-algo-visualize.s3-website.ap-south-1.amazonaws.com

📌 Advanced Enhancements
Added CloudFront for HTTPS + CDN
Added CI/CD deployment using GitHub Actions

CI/CD Pipeline Setup (GitHub Actions → S3)
1. Create IAM User for CI/CD

Go to IAM → Users → Create User

Select Programmatic Access

Attach policy: AmazonS3FullAccess (or a custom S3-only deploy policy)

Save the Access Key ID and Secret Access Key

2. Add Secrets in GitHub

Go to:
GitHub → Repository → Settings → Secrets → Actions → New Secret

Add these:

AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
S3_BUCKET


Example values:

AWS_REGION = ap-south-1
S3_BUCKET = sorting-algo-visualize

3. Add GitHub Actions Workflow

Create the file:

.github/workflows/deploy.yml


Paste this:

name: Deploy to S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout source code
        uses: actions/checkout@v3

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Sync files to S3
        run: |
          aws s3 sync . s3://${{ secrets.S3_BUCKET }} --delete

4. Push Code to GitHub

Run:

git add .
git commit -m "Setup CI/CD pipeline"
git push


Summary

This project explains how to deploy a fully functional static website using AWS S3. We learned how to create a bucket, enable static website hosting, upload files, set bucket policies, and access your live site through the S3 endpoint. Advanced enhancements like CloudFront (for HTTPS & CDN) allows to scale this simple setup into a production-ready deployment. The guide also provides GitHub steps so you can manage your project with version control and keep everything organized.
