'use server'

import { S3Client } from '@aws-sdk/client-s3';
import { PrismaClient } from '@prisma/client';
import * as path from 'path';
import multer from 'multer'
import multerS3 from 'multer-s3' 

//initializing s3 client
const s3 = new S3Client({
    region: 'us-east-1', 
    credentials: { 
        accessKeyId: process.env.ACCESS_KEY as string, 
        secretAccessKey: process.env.SECRET_KEY as string
    },
    endpoint: process.env.END_POINT
})

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.BUCKET as string,
    })
});