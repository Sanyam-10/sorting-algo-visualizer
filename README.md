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

### **3. Upload Your Website Files**
- Go to **Objects → Upload**  
- Upload HTML, CSS, JS, and assets  

### **4. Add Bucket Policy (Make Public)**
 *sorting-algo-visualize *:

json 
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}

5. Access  Website
Open the S3 website endpoint:
http://sorting-algo-visualize.s3-website.ap-south-1.amazonaws.com

📌 Advanced Enhancements
Added CloudFront for HTTPS + CDN
Added CI/CD deployment using GitHub Actions

This project is open for learning and practice.
