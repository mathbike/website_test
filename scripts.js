///// COLOR THEME /////

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})()
// function to set the theme and save selection to local storage
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between themes
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

///// LOAD PAGES /////

function loadNav() {
    $("#nav").load('nav.html')
}
function loadLogin() {
    $("#main").load('login.html')
}


function addSelected() {
    $(".icons-links").click(function(event){
        $(".icons-box").removeClass("selected");
        $(this.parentNode).addClass("selected");
        return false;
    });
}

$(function() {
    let currentURL = location.href;
    
    if (currentURL.includes('login.html')) {
      $('a[href="login.html"]').addClass('selected');
    } else if (currentURL.includes('settings.html')) {
      $('a[href="settings.html"]').addClass('selected');
    }
});
