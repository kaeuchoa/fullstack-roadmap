class GithubService {
  static url = "https://api.github.com/users";

  static async getByUserName(userName) {
    return fetch(GithubService.url + `/${userName}`);
  }
}

export default GithubService;
