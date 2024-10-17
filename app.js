function handleInternalNavigation() {
  document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A' && event.target.href.startsWith(window.location.origin)) {
      event.preventDefault();
      const path = new URL(event.target.href).pathname;
      fetch(path)
        .then(response => response.text())
        .then(html => {
          document.body.innerHTML = html;
          const scripts = document.body.getElementsByTagName('script');
          for (let script of scripts) {
            eval(script.innerHTML);
          }
        });
    }
  });
}

// Call this function when the app initializes
document.addEventListener('DOMContentLoaded', function() {
  handleInternalNavigation();
  // Other initialization code...
});
