class UI {

    constructor() {
        this.profile = document.getElementById('profile');
    }
    // display profile
    showProfile(user) {
        console.log(user);
        this.profile.innerHTML = `
            <div class="card card-body mb-3"> 
              <div class="row">
              <div class="col-md-3"> 
               <div>
                <h3 class="page-heading mb-3">${user.name}</h3>
                </div>
              <img class="img-fluid mb-2" src="${user.avatar_url}">
              <a href="${user.html_url}" target="_blank" class="btn btn-success btn-block mb-4">View Profile</a>
              </div>
                    
                <div class="col-md-9">
                <span class="badge badge-pill badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-pill badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-pill badge-success">Public Followers: ${user.followers}</span>
                <span class="badge badge-pill badge-warning">Public Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">Company : ${user.company}  </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">Website/Blog : ${user.blog}  </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">Location : ${user.location}  </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">Member Since : ${user.created_at}  </li>

                </ul>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
          
                </div>
              </div>
            </div>
   
   `;
    }

    // show user repos

    showRepos(repos) {
        let output = '';
        repos.forEach(function (repo) {
            output += `
         <div class="card card-body mb-3"> 
         <div class="row">
              
               <div class="col-md-3">
                <a href="${repo.html_url} " target="_blank">${repo.name}<a/>
                </div>
            
                <div class="col-md-12">
                <span class="badge  badge-secondary">Stars: ${repo.stargazers_count}</span>
                <span class="badge  badge-primary">Watchers: ${repo.watchers_count}</span>
                <span class="badge  badge-success">Forks: ${repo.forks_count}</span>
                </div>
            </div>
        </div>
        `;
        })

      // output repos
      document.getElementById('repos').innerHTML = output;  


    }


    // clear profie

    clearProfile() {
        this.profile.innerHTML = '';
    }
    // show alert 
    showAlert(massage, className) {
        // clear any removing alert 
        this.clearAlert();

        // creat div
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(massage));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');

        // insert alert
        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // clear alert massage

    clearAlert() {
        const currenttAlert = document.querySelector('.alert');
        if (currenttAlert) {
            currenttAlert.remove();
        }

    }


}