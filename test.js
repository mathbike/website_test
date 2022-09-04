$(function() {
    let currentURL = location.href;
    
    if (currentURL.includes('login.html')) {
      $('a[href="login.html"]').addClass('selected');
    } else if (currentURL.includes('settings.html')) {
      $('a[href="settings.html"]').addClass('selected');
    }
});

let currentURL = location.href
console.log(currentURL)
