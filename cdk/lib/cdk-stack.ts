import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 1. Tworzenie Bucketa S3 (Prywatny - wymóg Task 2.2)
    const bucket = new s3.Bucket(this, 'AlanShopBucket', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // 2. CloudFront Distribution (Publiczny dostęp do SPA)
    const distribution = new cloudfront.Distribution(this, 'AlanShopDist', {
      defaultBehavior: {
        origin: new origins.S3Origin(bucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
      ],
    });

    // 3. Automatyczny Deploy plików z folderu /dist (który już zbudowałeś)
    new s3deploy.BucketDeployment(this, 'DeployShop', {
      sources: [s3deploy.Source.asset('../dist')], 
      destinationBucket: bucket,
      distribution,
      distributionPaths: ['/*'], // Automatyczne czyszczenie cache'u
    });

    // Output adresu strony
    new cdk.CfnOutput(this, 'CloudFrontURL', {
      value: distribution.domainName,
      description: 'Adres URL Twojego sklepu',
    });
  }
}