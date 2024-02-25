import conf from "../conf.js";
import { Client, Account, ID } from "appwrite";

// this is the method how to create the client and account in the appweite
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  //   method for creating the account
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        return this.login;
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  //   method for creating the login session
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  //   method for getting the current user
  async getCurrentUser() {
    try {
      // account.get is used for getting the user
      await this.account.get();
    } catch (error) {
      throw error;
    }
    // rerurning null value is we do not get the account
    return null;
  }

  //   method for log out
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;



