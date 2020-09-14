function getData() {
  return new Promise(function (resolve, reject) {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=Kpq1c9rLycTIrLpKJHTn79IyGdrfG38Wkof5Z3Rf"
    ).then(function (response) {
      if (response) {
        resolve(response.json());
      } else {
        reject(Error("Error"));
      }
    });
  });
}

function displayData(obj) {
  var objlist = document.getElementById("data");
  var item = document.createElement("h2");
  var hdimage = document.createElement("IMG");
  hdimage.src = obj.hdurl;
  hdimage.width = 600;
  item.innerHTML = obj.title;
  objlist.appendChild(item);
  objlist.appendChild(hdimage);
}

function doPromise() {
  getData()
    .then(function (result) {
      console.log(result);
      displayData(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function displayLoader() {
  var loader = document.getElementById("loader");
  loader.style.display = "block";
}

function hideLoader() {
  var loader = document.getElementById("loader");
  loader.style.display = "none";
}

displayLoader();
setTimeout(function () {
  doPromise();
  hideLoader();
}, 3000);
