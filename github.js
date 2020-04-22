class GitHub{
    constructor(){
        this.client_id = '1d37e09fc8407028cc9a';
        this.client_secret = '5feacb40fe88f6941bdd037196e4a8094d75add1';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }


async getUser(user){
  const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

const profile = await profileResponse.json();
const repos= await reposResponse.json();
return{profile, repos}

}

}