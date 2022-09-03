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

// highlight selected page
function addSelected() {
    $(".icon-links").click(function(event){
        $(".icons-box").removeClass("icons-box");
        $(".icons-box").addClass(".icons-box-selected");
    })
}
