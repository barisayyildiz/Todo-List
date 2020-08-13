
//toggeling
const myFunction = (element) => {
	//element.style.color = "blue"
	let property = element.style.textDecoration;

	if(element.style.textDecoration == "line-through")
	{
		element.style.textDecoration = "none";
		element.style.fontStyle = "initial";
		element.style.color = "initial";

		let flag = 1;
		let listItems = document.querySelectorAll('span');

		for(let item of listItems)
		{
			console.log(item.style.textDecoration);
			if(item.style.textDecoration == "line-through")
			{
				let btn = document.getElementById("add");
				btn.content = "Delete All";
				//btn.className = "delete";
				btn.style.backgroundColor = "#f52c39"
				flag = 0;
				break;
			}
		}

		if(flag)
		{
			let btn = document.getElementById("add");
			btn.innerText = "Add";
			//btn.className = "";
			btn.style.backgroundColor = "#12e049"
		}


	}
	else
	{
		element.style.textDecoration = "line-through";
		element.style.fontStyle = "italic";
		element.style.color = "grey";

		let btn = document.getElementById("add");
		btn.innerText = "Delete All";
		//btn.className = "delete";
		btn.style.backgroundColor = "#f52c39"
	}

}


const addButton = function()
{
	let btn = document.getElementById("add");
	let string = document.getElementById("userInput").value;

	if(btn.innerText == "Add" && string != "")
	{
		//ekleme işlemi yapılmalı

		const list = document.getElementById("list");
		const button = document.createElement("button");
		button.innerText = "Delete";
		button.className += "delete";

		button.onclick = () => {
			button.parentNode.remove();
		}

		const newTask = document.createElement("li");
		//newTask.innerText = string;

		const spanElement = document.createElement("span");
		spanElement.className += "element";
		spanElement.textContent = string;



		spanElement.setAttribute("onclick","myFunction(this)");



		newTask.appendChild(spanElement);
		newTask.appendChild(button);

		list.appendChild(newTask);


		document.getElementById("userInput").value = "";

		console.log("done");


	}else
	{
		//işaretli liste elemanları listeden çıkarılmalı
		let items = document.querySelectorAll("span");
		console.log(items);

		items.forEach((item) => {

			if(item.style.textDecoration == "line-through")
			{
				item.parentNode.remove();
				let btn = document.getElementById("add");
				btn.innerText = "Add";
				btn.style.backgroundColor = "#12e049";
				//btn.className = "";

			}
		})

	}

}