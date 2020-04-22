 // init github
 const github = new GitHub;
const ui =new UI;
// search input

const searchUser =document.getElementById('searchUser');

// search user event listner
searchUser.addEventListener('keyup',(e)=>{
    // get input text 
    const inputText = e.target.value;

    if(inputText !== ''){
       // console.log(inputText);

       // make hhtp call
       github.getUser(inputText)
       .then(data => {
           console.log(data);
           if(data.profile.message ==='Not Found'){
               // show alert
               ui.showAlert('User not found','alert alert-danger');
           }else{
               // show profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
           }
       })
    }else{
        // clear profile
        ui.clearProfile();
    }
});