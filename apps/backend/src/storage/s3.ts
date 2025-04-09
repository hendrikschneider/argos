import { Client as MinioClient } from "minio";
import config from "@/config/index.js";

let minioClient: MinioClient;

export type { Client as MinioClient } from "minio";

export const getS3Client = () => {
  if (!minioClient) {
    minioClient = new MinioClient({
      endPoint: config.get("minio.endpoint"),
      accessKey: config.get("minio.accessKey"),
      secretKey: config.get("minio.secretKey"),
    });
  }
  return minioClient;
};
