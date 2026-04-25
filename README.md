
🛒 AWS Cloud Shop SPA – Task 2
This project involves deploying a Single Page Application (SPA) to AWS using S3 and CloudFront provisioned via AWS CDK.

🔗 Live Application Links
CloudFront URL: https://d2gtnorsanlq4.cloudfront.net

S3 Bucket Direct Link (Access Verification): http://alanshopbucket0d4b6e5e.s3-website.eu-central-1.amazonaws.com

Note: As per requirements, direct S3 access returns a 403 Access Denied status. The application is only accessible through the CloudFront distribution.

🛠️ Implemented Features (Evaluation Criteria)
[x] S3 Bucket Hosting: Created a private S3 bucket to store static assets.

[x] CloudFront Distribution: Configured a global CDN to serve the SPA over HTTPS.

[x] Infrastructure as Code (IaC): Used AWS CDK (TypeScript) for resource provisioning.

[x] Automated Deployment: Implemented BucketDeployment to automatically sync the /dist folder to S3.

[x] Cache Invalidation: Configured the stack to automatically invalidate CloudFront cache on every deployment.

[x] Security: Enabled BlockPublicAccess for the S3 bucket to ensure origin security.

🚀 Local Development & Deployment
Prerequisites
AWS CLI configured with appropriate credentials.

Node.js and NPM installed.

Installation
Clone the repository and enter the project folder:

Bash
cd nodejs-aws-shop-react
Install dependencies:

Bash
npm install --legacy-peer-deps
Build and Deploy
Generate the production build:

Bash
npm run build
Navigate to the infrastructure folder and deploy to AWS:

Bash
cd cdk
npx cdk deploy
📂 Repository Structure
Plaintext
.
├── cdk/                   # AWS CDK Infrastructure code
│   └── lib/
│       └── cdk-stack.ts   # Main Stack definition (S3 + CloudFront)
├── dist/                  # Compiled production files (after build)
├── src/                   # React application source code
└── README.md
📓 Obsidian Documentation Entry
[!SUCCESS] Deployment Finalized

Stack Name: CdkStack

Region: eu-central-1

Deployment Result: 15 resources successfully created via CloudFormation.

Verification: Manual check of CloudFront URL confirms SPA functionality. S3 direct access check confirms 403 Forbidden as intended.

Next Steps:

Save this as README.md in your root directory.

Commit and push:

PowerShell
git add README.md
git commit -m "docs: add technical documentation for Task 2"
git push origin task-2
---

# React-shop-cloudfront

This is frontend starter project for nodejs-aws mentoring program. It uses the following technologies:

- [Vite](https://vitejs.dev/) as a project bundler
- [React](https://beta.reactjs.org/) as a frontend framework
- [React-router-dom](https://reactrouterdotcom.fly.dev/) as a routing library
- [MUI](https://mui.com/) as a UI framework
- [React-query](https://react-query-v3.tanstack.com/) as a data fetching library
- [Formik](https://formik.org/) as a form library
- [Yup](https://github.com/jquense/yup) as a validation schema
- [Vitest](https://vitest.dev/) as a test runner
- [MSW](https://mswjs.io/) as an API mocking library
- [Eslint](https://eslint.org/) as a code linting tool
- [Prettier](https://prettier.io/) as a code formatting tool
- [TypeScript](https://www.typescriptlang.org/) as a type checking tool

## Available Scripts

### `start`

Starts the project in dev mode with mocked API on local environment.

### `build`

Builds the project for production in `dist` folder.

### `preview`

Starts the project in production mode on local environment.

### `test`, `test:ui`, `test:coverage`

Runs tests in console, in browser or with coverage.

### `lint`, `prettier`

Runs linting and formatting for all files in `src` folder.
