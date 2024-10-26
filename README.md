# ElectroKart ⚡

### An Online E-commerce App built with React and Node.js.

## 🚀Featured In

<table>

   <tr>
      <th>Event Logo</th>
      <th>Event Name</th>
      <th>Event Description</th>
   </tr>
   <tr>
      <td><img src="gssoc.jpg" width="200" height="auto" loading="lazy" alt="GSSoC 24"/></td>
      <td>GirlScript Summer of Code 2024</td>
      <td>GirlScript Summer of Code is a three-month-long Open Source Program conducted every summer by GirlScript Foundation. It is an initiative to bring more beginners to Open-Source Software Development.</td>
   </tr>
    <tr>
      <td><img src="hacktober.jpg" width="200" height="auto" loading="lazy" alt="Hacktoberfest 2024"/></td>
      <td>Hacktoberfest 2024</td>
      <td>Hacktoberfest is a month-long celebration of open source software run by DigitalOcean, GitHub, and Twilio. It encourages contributions to open source projects and promotes a global community of developers.</td>
   </tr>

</table>

<br />

## Statistics 📊  

| Statistic               | Count | Link                             |  
|-------------------------|-------|----------------------------------|  
| ![Stars](https://img.shields.io/github/stars/soham0005/ElectroKart?style=social) | ![Stars Count](https://img.shields.io/badge/stars-1234-yellow) | [View Stars](https://github.com/YOUR_USERNAME/ElectroKart/stargazers) |  
| ![Forks](https://img.shields.io/github/forks/soham0005/ElectroKart?style=social) | ![Forks Count](https://img.shields.io/badge/forks-5678-blue) | [View Forks](https://github.com/YOUR_USERNAME/ElectroKart/network) |  
| ![Open Issues](https://img.shields.io/github/issues/soham0005/ElectroKart) | ![Open Issues Count](https://img.shields.io/badge/issues-90-red) | [View Issues](https://github.com/YOUR_USERNAME/ElectroKart/issues) |  
| ![Open Pull Requests](https://img.shields.io/github/issues-pr/soham0005/ElectroKart) | ![Open PRs Count](https://img.shields.io/badge/pull%20requests-10-orange) | [View PRs](https://github.com/YOUR_USERNAME/ElectroKart/pulls) |  
| ![Closed Pull Requests](https://img.shields.io/github/issues-pr-closed/soham0005/ElectroKart) | ![Closed PRs Count](https://img.shields.io/badge/closed%20pr-50-green) | [View Closed PRs](https://github.com/YOUR_USERNAME/ElectroKart/pulls?q=is%3Apr+is%3Aclosed) |

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Features](#2-features)
3. [Tech Stack](#3-tech-stack)
4. [Installation](#4-installation)
5. [Usage](#5-usage)
6. [Contributing](#6-contributing-)
7. [Pull Request Guidelines](#7-pull-request-review-criteria-)
8. [Code of Conduct](#8-code-of-conduct-)


## 1. Project Overview

ElectroKart is an online e-commerce application designed to offer a seamless shopping experience. Built with React for the frontend and Node.js for the backend, ElectroKart enables users to browse and purchase products with ease.

## 2. Features

- **Product Browsing**: View and filter products by category, price, and popularity.
- **User Authentication**: Secure login and signup functionality with JWT authentication.
- **Shopping Cart**: Add items to a cart, view cart summary, and proceed to checkout.
- **Payment Gateway**: Integrated payment options using Stripe (or any preferred payment gateway).
- **Order Tracking**: Keep track of placed orders with status updates.
- **Responsive Design**: Optimized for both mobile and desktop experiences.

## 3. Tech Stack

- **Frontend**:

  - ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
  - ![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white)
  - ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
  - ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

- **Backend**:

  - ![Node.js](https://img.shields.io/badge/Node.js-8CC84B?style=flat-square&logo=node.js&logoColor=white)
  - ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat-square&logo=express&logoColor=white)

- **Database**:

  - ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)

- **Authentication**:
  - ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white)

## 4. Installation

Follow these steps to set up ElectroKart locally:

### Prerequisites

- **Node.js** (version >= 14.x)
- **npm** (version >= 6.x)

You can check if Node.js and npm are installed by running:

```bash
node -v
npm -v
```

## Steps to Install ElectroKart

### 1. Clone the repository:

```bash
git clone https://github.com/<your-github-username>/ElectroKart.git
```

### 2. Navigate to the project directory

```bash
cd ElectroKart
```

### 3. Install the dependencies:

- For Frontend:

```bash
cd frontend
npm install
npm start
```

- For Backend:

```bash
cd backend
npm install
node index.js
MONGO_URL = ""
email = ""
password = ""
OAUTH_CLIENTID  = ""
OAUTH_CLIENT_SECRET  = ""
OAUTH_REFRESH_TOKEN = ""
# Paste your MongoDB URL here for local testing
```

### 4. How to get Oauth Credentials

#### Step 1: Create a Project in Google Cloud Console
1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Click on **Create Project**.
3. Enter a project name (e.g., "Nodemailer Setup") and click **Create**.
4. Once created, select your project from the project dropdown menu in the top-left corner.

#### Step 2: Enable Gmail API

1. In the Google Cloud Console, navigate to **APIs & Services > Library**.
2. Search for **Gmail API** in the search bar.
3. Click on **Enable** to activate the Gmail API for your project.

#### Step 3: Configure OAuth Consent Screen

1. Navigate to **APIs & Services > OAuth Consent Screen**.
2. Under **User Type**, choose **External** (this is the only option if you're not part of G-Suite).
3. Fill in the required fields:
    - **App Name**: Choose a name for your app.
    - **User Support Email**: Enter your email.
    - **Developer Contact Information**: Enter your email again.
4. Click **Save and Continue**.
5. On the Scopes page, click **Save and Continue** (you can skip adding scopes for now).
6. On the Test Users page, add your own email address as a test user. Click **Save and Continue**.
7. It is important to add the test users as these will actually allow to send mail from the emails you are using.

#### Step 4: Create OAuth Credentials

1. Go to the **Credentials** tab in the sidebar.
2. Click the **+ Create Credentials** button and select **OAuth Client ID**. 
3. Choose **Web Application** as the application type.
4. Under **Authorized redirect URIs**, add the following URL:
```bash
https://developers.google.com/oauthplayground
```
5. Click **Create**. You will now see your **Client ID** and **Client Secret**. Save these as you will need them later.
6. Note: These will act as your Oauth_Client_Id and Oauth_Client_secret.

#### Step 5: Generate a Refresh Token

1. Go to [OAuth 2.0 Playground](https://developers.google.com/oauthplayground).
2. In the top-right corner, click the **Settings** icon.
3. Check the box labeled **Use your own OAuth credentials**.
4. Enter your **Client ID** and **Client Secret** obtained in Step 4. 
5. In the OAuth Playground, under **Select & Authorize APIs**, search for **Gmail API v1**.
6. Select the following scope:
```bash
https://mail.google.com/
```

7. Click **Authorize APIs** and sign in with your Google account.
8. After authorization, click **Exchange authorization code for tokens**.
9. Copy the **Refresh Token** from the output and paste it in OAUTH_REFRESH_TOKEN.


### 5.Start the application:

```bash
npm start
```

## 6. Usage

Once you have set up the project, you can:

- Run the development server: The app will run at http://localhost:3000/ for the frontend.
- Explore app features: Browse products, add items to the cart, and proceed to checkout.
- Test with sample data: Use provided sample data or mock APIs for testing the functionality.

## 7. Contributing 🤝

We welcome contributions from everyone! If you would like to contribute to ElectroKart, please follow these steps:

1. **Fork the repository**: Click the 'Fork' button at the top right of the page to create a copy of this repository in your account.
2. **Clone your fork**: Use the command below to clone your forked repository to your local machine.

```bash
   git clone https://github.com/<your-github-username>/ElectroKart.git
```

For more detailed guidelines, please refer to our [full Contributing.md](https://github.com/soham0005/ElectroKart/blob/master/contributing.md).

## 8. Pull Request Review Criteria 🧲

1. Please fill out the PR template properly when creating a pull request.
2. Assign yourself to the issue you’re working on to help us track progress.
3. Never commit to the main branch.
4. Your work must be original and adhere to the project's coding standards.
5. Comment your code where necessary for clarity.
6. Always ensure all tests pass before pushing your changes by running:

```bash
npm run test
```

## 9. Code of Conduct 😇

We strive to create a welcoming and inclusive environment for all contributors and users. By participating in this project, you agree to abide by our Code of Conduct.

### Our Standards

1. **Respect**: Treat everyone with respect, regardless of their background or opinions.
2. **Inclusivity**: Encourage and support diverse perspectives and contributions.
3. **Collaboration**: Be open to constructive feedback and collaboration.
4. **Professionalism**: Maintain professionalism in all interactions, online and offline.

## Contributors

A heartfelt thank you to the following individuals for their valuable contributions to this project. Your support and dedication are greatly appreciated:

<a href="https://github.com/soham0005/ElectroKart/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=soham0005/ElectroKart" />
</a>

<br>

## Stargazers

<div align='center'>

[![Stargazers repo roster for @soham0005/ElectroKart](https://reporoster.com/stars/soham0005/ElectroKart)](https://github.com/soham0005/ElectroKart/stargazers)

</div>

## Forkers
<div align='center'>

[![Forkers repo roster for @soham0005/ElectroKart](https://reporoster.com/forks/soham0005/ElectroKart)](https://github.com/soham0005/ElectroKart/network/members)

</div>

### Reporting Issues

If you experience or witness any behavior that violates this Code of Conduct, please report it by contacting the project maintainers.

For more detailed guidelines, please refer to our [full Code of Conduct](https://github.com/soham0005/ElectroKart/blob/master/Code_Of_Conduct.md).



## Our Contributors

We extend our heartfelt gratitude for your invaluable contribution to our project! Your efforts play a pivotal role in elevating this project to greater heights.

<div align="center">

 <a href="https://github.com/soham0005/ElectroKart/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=soham0005/ElectroKart" />
</a>

</div>

<div align="center">
    <a href="#top">
        <img src="https://img.shields.io/badge/Back%20to%20Top-000000?style=for-the-badge&logo=github&logoColor=white" alt="Back to Top">
    </a>
</div>

---
