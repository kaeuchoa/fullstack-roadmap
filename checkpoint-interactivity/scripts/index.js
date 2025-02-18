import MainController from "./MainController.mjs";
import GithubService from "../services/GithubService.mjs";

export const main = () => {
  const controller = new MainController();
  GithubService.getByUserName("kaeuchoa")
};

