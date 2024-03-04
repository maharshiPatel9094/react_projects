import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  Databases;
  bucket; // storage

  //   constructor
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //  method for creating the post
  // parameters same as written in the appwrite
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug, // document id can also be written as id.unique
        // all things that we want to store are written in the object
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  // method for updating the post
  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {}
  }

  //   method for deleting the post
  async deletePost({ slug }) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  // method for selecting one post
  async getPost({ slug }) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  // selecting all the post whose status is active
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      throw error;
    }
  }

  // file upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  //   delete file service
  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      );
      return true
    } catch (error) {
        throw error;
        return false;
    }
  }

//   method for file preview
getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId,
    )
}
}
const service = new Service();
export default service;
