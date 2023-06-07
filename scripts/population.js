function worldPopGrowth() {
	let population = document.getElementById("w_population").valueAsNumber;	
	let rate = document.getElementById("a_growth_rate").valueAsNumber;	
	let years = document.getElementById("n_years").valueAsNumber;
	let growth;
	let now = new Date();
	let thisYear = now.getFullYear();
	let getYear = thisYear + years;
	
	let table = "<table class='table table-striped table-bordered table-hover table-condensed'>";
	table += "<tr>";
	table += "<th>Year</th><th>Population</th><th>Anual  Growth</th><th>Pop. Growth</th>";
	table += "</tr>";
	
	for (let year = 1; year <= years; year++ ) {
		table += "<tr>";
        table += "<td>" + year + "</td>";
        table += "<td>" + population.toLocaleString() + "</td>";
        growth = population * rate / 100;
		growth = parseInt(growth);
        table += "<td>" + growth.toLocaleString() + "</td>";		
        population += parseInt(growth);
        table += "<td>" + population.toLocaleString() + "</td>";
        table += "</tr>";
    }
	table += "</table>";
	
	document.getElementById("pop_growth_text").innerHTML = " From <b>" + thisYear + " </b> up the end of year <b>" + getYear + "</b>, with the growth rate of <b>" + rate + "%</b> per year, world population will growth aproximately to: <strong>" + population.toLocaleString() + "</strong>";
	document.getElementById("w_pop_growth").innerHTML = table; 
};

document.getElementById("calculate").addEventListener("click", worldPopGrowth, false);		   