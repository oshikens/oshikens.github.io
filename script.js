function addListChild(id, url, index) {
		document.getElementById(id).innerHTML = `
      <div class="ml-4 flex flex-row items-center gap-2 hover:underline">
     	  <li><a href="` + url + `">` + index + `</a></li>
      </div>
`;
}

function addListParent(id, url, index) {
		document.getElementById(id).innerHTML = `
   	  <div class="flex flex-row items-baseline gap-2 hover:underline">
				<li><a href="` + url + `">` + index + `</a></li>
      </div>
`;
}

function showCareerTable(data) {
		let text = `
              <table class="w-full lg:w-1/2 border-y border-y-teal-500 text-center">
                <thead class="bg-teal-50 border-b border-b-teal-500">
                <tr>
                  <th></th>
                  <th>就職</th>
                  <th>進学</th>
                  <th>その他</th>
                  <th>合計</th>
                </tr>
              </thead>
              <tbody>`;

		for(let i=0; i<data.length; i++) {
				text += "<tr><th>" + data[i][0] + "年度</th><td>" + data[i][1] + "名</td><td>" + data[i][2] + "名</td><td>" + data[i][3] + "名</td><td>" + data[i][4] + "名</td></tr>";
		}
		text += `
                </tbody>
              </table>`;

		document.getElementById("careerTable").innerHTML = text;
}

function showFooter() {
		var year = new Date().getFullYear();
		document.getElementById("footer").innerHTML = `
		<footer>
		  <div class="bg-gray-100 p-5 text-gray-500 text-center">
	      <p>〒432-8011</p>
	      <p>静岡大学情報学部</p>
	      <p>静岡県浜松市中区城北3-5-1</p>
				<br>
	      <p>学生部屋: 情報学部2号館6階J2601号室</p>
	      <p>教員部屋: 情報学部2号館3階J2311号室</p>
				<br>
				<p>©` + year + ` 金鎭赫研究室</p>
		  </div>
		</footer>
`;
}

function showHeader() {
		document.getElementById("header").innerHTML = `
		<header class="bg-gray-100 text-gray-600">
		  <div class="flex flex-col flex-wrap md:flex-row items-center p-5">
		    <a class="flex items-center mb-4 md:mb-0 text-center" href="/index.html">
					<p>静岡大学情報学部行動情報学科</p>
					<br>
		      <span class="ml-3 text-xl">金鎭赫研究室</span>
		    </a>
	  	  <nav class="md:ml-auto flex flex-wrap justify-center text-gray-900">
		      <a class="mr-5 hover:text-teal-500" href="/about.html">About</a>
		      <a class="mr-5 hover:text-teal-500" href="/news.html">News</a>
		      <a class="mr-5 hover:text-teal-500" href="/laboratory.html">Laboratory</a>
		      <a class="mr-5 hover:text-teal-500" href="/publication.html">Publication</a>
		    </nav>
		  </div>
		</header>
`;
}

function showHeading(id, title) {
		document.getElementById(id).innerHTML = `
      <h3 class="my-6 text-xl lg:text-3xl font-bold">` + title + `</h3>`;
}

function showHeadingLarge(id, title) {
		document.getElementById(id).innerHTML = `
      <h3 class="my-6 text-2xl lg:text-4xl font-bold">` + title + `</h3>`;
}

function showImgAndSentence(id, rowOrder, title, explanation, imgName) {
		document.getElementById(id).innerHTML = `
      <h2 class="py-6 text-2xl lg:text-4xl font-bold">` + title + `</h2>
      <div class="flex flex-col lg:` + rowOrder + `">
        <img src="img/` + imgName + `" class="h-auto lg:h-64 lg:mx-6 object-contain lg:object-cover rounded">
        <p class="my-6">` + explanation + `</p>
      </div>
`;
}

function showNewsHeading(title, date, contents) {
		document.getElementById("news").innerHTML = `
    <div class="lg:px-64 p-6">
      <div class="mb-4 flex flex-row space-x-4 items-center text-sm lg:text-base">
        <a href="../news.html">News</a>
        <span>/</span>
        <span class="text-slate-300">` + title + `</span>
      </div>
      <div>
        <div class="flex flex-col space-y-2 mb-6 lg:mb-12">
          <h1 class="text-3xl lg:text-5xl font-bold tracking-wide">` + title + `</h1>
          <span class="flex flex-row items-center gap-2 ml-auto text-xs">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12h5v5h-5v-5m7-9h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v2H5V5h14M5 19V9h14v10H5Z"/></svg>
` + date + `</span>
        </div>

        <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-20">
          <div class="lg:col-start-1 lg:col-end-9">
						` + contents + `
	        </div>
        </div>
      </div>
    </div>
`;
}

function showNewsHref(id, url, title, date, description) {
		document.getElementById(id).innerHTML = `
		  <a href="news/` + url + `.html" class="flex flex-col md:flex-row md:h-28 gap-4 rounded hover:bg-slate-300 hover:bg-opacity-50 transition-all ease-in-out duration-150">
 			<img class="w-full md:w-40 h-28 md:h-auto object-cover rounded-t md:rounded-tr-none md:rounded-l" src="img/lab.jpg">
	    <div class="px-4 pb-4 md:p-4 w-full">
	      <div class="flex flex-col-reverse">
	        <div class="text-lg lg:text-2xl font-bold">` + title + `</div>
		        <span class="text-sm text-slate-600">` + date + `</span>
			      </div>
			      <p class="pt-2">` + description + `</p>
			    </div>
				  </a>
`;
}

function showProfile(id, students) {
		let text = `
			<div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4 gap-y-4 lg:gap-y-8">`;

		for(let i=0; i<students.length; i++) {
				text +=	`
			  <div class="lg:h-28 flex flex-col lg:flex-row gap-4 items-center odd:bg-teal-50 lg:odd:bg-inherit p-4 lg:p-0 rounded">
					<img src="img/member/` + students[i][0] + `.jpg" onerror="this.src='https://placehold.jp/eeeeee/000000/150x150.png?text=Image'"  class="w-24 lg:w-28 h-24 lg:h-28 object-cover rounded-full rounded">
			    <div class="flex flex-col gap-2 items-center lg:items-start">
      			<div class="flex flex-col items-center lg:flex-row gap-2">
			        <p class="text-xl font-semibold">` + students[i][1] + `</p>
      			  <p class="lg:self-end">` + students[i][2] + `</p>
			      </div>
      			<p>研究テーマ: <b>` + students[i][3] + `</b></p>
			      <p class="text-sm">趣味: ` + students[i][4] + `</p>
			    </div>
	       </div>`;
		}

		document.getElementById(id).innerHTML = text;
}

function showResearch(id, imgName, title, description) {
		document.getElementById(id).innerHTML = `
      <div class="flex flex-col bg-white rounded shadow">
	      <img class="w-full h-32 object-cover rounded-t" src="img/` + imgName + `">
    	  <div class="flex flex-col p-4 w-full h-full lg:h-80">
      	  <h3 class="text-xl lg:text-3xl font-bold">` + title + `</h3>
        	<p class="pt-4 mt-auto">` + description + `</p>
	      </div>
      </div>
		`;
}

function showScheduleTable(id, duration, contents) {
		let text = `
        <div class="space-y-4">
	        <h4 class="my-4 text-lg lg:text-2xl font-bold">` + duration + `の予定</h4>
          <table class="w-full lg:w-1/2 border-y border-y-teal-500 text-center">
            <tbody>`;

		for(let i=0; i<contents.length; i++) {
				text += "<tr><th class=\"w-1/4\">" + contents[i][0] + "</th><td class=\"w-auto\">" + contents[i][1] + "</td></tr>";
		}
		text +=`
                </tbody>
            </table>
        </div>`;

		document.getElementById(id).innerHTML = text;
}

function showTextContent(id, title, sentence) {
		document.getElementById(id).innerHTML = `
      <h3 class="my-6 text-xl lg:text-3xl font-bold">` + title + `</h3>
      <div class="mb-3">
        <p>` + sentence + `</p>
      </div>
`;
}

function showThesisTable(year, profile) {
		let text = `
                <h5 class="my-3 text-base lg:text-xl font-bold">` + year + `年度卒業（第` + (year - 2020) + `期生）</h5>
                <table class="w-full border-y border-y-teal-500 text-center">
                  <thead class="bg-teal-50 border-b border-b-teal-500">
                    <tr>
                      <th class="lg:w-1/4">名前</th>
                      <th class="lg:w-1/6">学位</th>
                      <th class="lg:w-auto">研究テーマ</th>
                    </tr>
                  </thead>
                  <tbody>`;

		for(let i=0; i<profile.length; i++) {
				text += "<tr><th class=\"w-1/4\">" + profile[i][0] + "</th><td class=\"w-1/6\">" + profile[i][1] + "</td><td class=\"w-auto\">" + profile[i][2] + "</td></tr>";
		}
		text += `
                  </tbody>
                </table>`;
		document.getElementById(year).innerHTML = text;
}

function showTitle(title, explanation, imgName) {
		document.getElementById("title").innerHTML = `
 		  <div class="relative w-full">
				<div class="lg:px-60 mx-6">
	     	  <p class="absolute md:font-bold text-2xl lg:text-5xl capitalize top-1/3 -translate-y-1/2">` + title + `</p>
  	     	<p class="absolute lg:text-xl top-2/3 -translate-y-1/2">` + explanation + `</p>
				</div>		
				<img alt="content" class="object-cover opacity-25 lg:h-80 h-48 w-full" src="img/` + imgName + `">
  	  </div>
`;
}
