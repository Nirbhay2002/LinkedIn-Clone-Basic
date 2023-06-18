let dots = document.getElementById('dots');
let readMoreText = document.getElementById('read-more-text');
let moreText = document.getElementById('more-text');
let button = document.getElementById('read-more-button');

const toggleRead = () =>{
    if(button.innerText === "Read More")
    {
        moreText.style.display = 'inline';
        dots.style.display = 'none';
        button.innerText = "Read Less";
    }
    else{
        moreText.style.display = 'none';
        dots.style.display = 'inline';
        button.innerText = "Read More";
    }
}

const toggleProfiles = () =>{

    let hiddenProfiles = document.querySelector('.list-profiles');
    let arrowButton = document.querySelector('.expand-button');

    if(hiddenProfiles.style.display === 'none')
    {
        hiddenProfiles.style.display = 'block';
        arrowButton.style.transform = "rotate(90deg)";
    }
    else{
        hiddenProfiles.style.display = 'none';
        arrowButton.style.transform = "rotate(-90deg)";
    }

    
}

//FADING ANIMATION

$(document).ready(function() {
    $('.profile-left').fadeIn(2000);
    $('.profile-body .left-sidebar').fadeIn(2000);
  });

