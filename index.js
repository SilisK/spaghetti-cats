import { createImgElmnt } from "./modules/hlpr.mjs";

(function () {
	document.addEventListener("DOMContentLoaded", function () {
		let catURLs = [],catData = []

		document.getElementById("fetchButton").onclick = function () {
			if (document.getElementById('catContainer').getElementsByTagName('img').length > 0) {
				for (let i = 0; i < document.getElementById('catContainer').getElementsByTagName('img').length; i++) {
					catURLs = []
					document.getElementById('catContainer').getElementsByTagName('img')[i].remove()
				}
			}
			else {
				for (let i = 0; i < document.getElementById("numImagesInput").value; i++) {
					fetch("https://api.thecatapi.com/v1/images/search")
						.then((res) => {
							return res.json();
						})
						.then((json) => {
							if (json[0]) {
								catData.push(json[0])
								if (json[0].url) {
									catURLs.push(json[0].url);
								} else {
									console.log("We couldn't find cat # " + i);
								}
							} else {
								console.log("We couldn't find cat # " + i);
							}
						})
						.catch((e) => {
							console.error(`Error fetching cat #${index}:`, e);
						});
				}
				let cats = []
				for (let i = 0; i < catURLs.length; i++) {
					let cat = document.createElement('img');
					cat.src = catURLs[i];
					let imgOvly = createImgElmnt(catData[i])
					cat.append(imgOvly)
					cats.push(cat);
				}
				for (let i = 0; i < catURLs.length; i++) {
					document.getElementById('catContainer').append(cats[i]);
				}
				console.log('reached end')
			}
		};
	});
})();
