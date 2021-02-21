function tutorialsFilter(c) {
  var x, i;
  x = document.getElementsByClassName("tutorials-filteritem");
  if (c == "all") c = "";
  var filtered = 0;
  for (i = 0; i < x.length; i++) {
    filterRemoveClass(x[i], "tutorials-filter-show");
    if (x[i].className.indexOf(c) > -1){
        filterAddClass(x[i], "tutorials-filter-show");
        filtered++
    }
  }
  var header = document.getElementById("tutorials-header");
  var headerVar = "";
  if (c == '') headerVar = "All";
  else if (c == 'tutorials-filteritem-sp') headerVar = "Setup/Pre-Purchase";
  else if (c == 'tutorials-filteritem-so') headerVar = "Software Only";
  else headerVar = "Software + Hardware";
  header.innerHTML = headerVar+" Tutorials ("+filtered+")";
}

// Show filtered elements
function filterAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function filterRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("tutorials-filter-container");
var btns = btnContainer.getElementsByClassName("tutorials-filter-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("tutorials-filter-btn-active");
    current[0].className = current[0].className.replace(" tutorials-filter-btn-active", "");
    this.className += " tutorials-filter-btn-active";
  });
}


// Add Badges
function hasParentClass(element, classname) {
    if (element.className.split(' ').indexOf(classname)>=0) return true;
    return element.parentNode && hasParentClass(element.parentNode, classname);
}

function addBadges(subClassName,superClassName){
    x = document.getElementsByClassName(subClassName);
    for (var i=0;i < x.length;i++){
        try{
            if (hasParentClass(x[i],superClassName)){
                console.log(x[i])
                x[i].style.display = 'inline-block';
            }
        }
        catch{
            //do nothing
        }
    }
}