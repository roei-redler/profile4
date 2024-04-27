const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const linkId = elem.id;
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    allTabs.forEach((tab) => {
      const id = tab.id;
      if (id.includes(linkId)) {
        tab.classList.add("tab-content--active");
      } else {
        tab.classList.remove("tab-content--active");
      }
    });
  });
});

var textElements = document.querySelectorAll('.typing');

textElements.forEach(function(textElement) {
    var originalText = textElement.textContent;
    textElement.textContent = ''; // Clear the text content

    var cursor = document.createElement('span');
    cursor.classList.add('cursor');
    textElement.parentNode.insertBefore(cursor, textElement.nextSibling); // Insert cursor after the text element

    var i = 0;
    var interval = setInterval(function () {
        var char = originalText[i];
        if (char === undefined) {
            clearInterval(interval);
            var twinkle = setInterval(function () {
                cursor.style.visibility = (cursor.style.visibility === 'hidden') ? 'visible' : 'hidden';
            }, 500);
        } else {
            clearInterval(twinkle);
            typing(char);
            ++i;
        }
    }, 100);

    function typing(char) {
        textElement.textContent += char;
    }
});


