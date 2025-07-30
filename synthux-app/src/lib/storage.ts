import * as Minio from 'minio';

const minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT,
  port: parseInt(process.env.MINIO_PORT),
  useSSL: process.env.MINIO_USE_SSL === 'true',
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY,
});

export async function uploadFile(bucketName: string, objectName: string, filePath: string) {
  return new Promise((resolve, reject) => {
    minioClient.fPutObject(bucketName, objectName, filePath, (err, etag) => {
      if (err) {
        return reject(err);
      }
      resolve(etag);
    });
  });
}
