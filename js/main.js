// Variaveis globais

// Dados
var ResiduesCount = {};
var PositionsData = [];
var SequencesData = [];
var PositionsClassification = [];
var Species = [];
var ChainType = ["Heavy", "Light"];
var Residues = [];

// Grafico
var Svg;
var Pie;
var Path;
var Filter;
var Arc;
var Details;
var BarGraphHeight;

// Constantes
// Parametros do grafico
const GraphContainer = "#graphic-container";
const FilterContainer = "#filter-container";
const GraphHeight = "940";
const GraphWidth = "700";
const PieRadius = 18;
const Margin = 15;
const DetailHeight = 300; 
const DetailWidth = 450;
const BarWidth = 18;

const Positions = {
	0:{"x":50, "y":380, "label":"1"},
	1:{"x":50, "y":416, "label":"2"},
	2:{"x":50, "y":452, "label":"3"},
	3:{"x":50, "y":488, "label":"4"},
	4:{"x":50, "y":524, "label":"5"},
	5:{"x":50, "y":560, "label":"6"},
	6:{"x":50, "y":596, "label":"7"},
	7:{"x":50, "y":632, "label":"8"},
	8:{"x":50, "y":668, "label":"9"},
	9:{"x":20, "y":686, "label":"10"},
	10:{"x":50, "y":704, "label":"11"},
	11:{"x":50, "y":740, "label":"12"},
	12:{"x":50, "y":776, "label":"13"},
	13:{"x":50, "y":812, "label":"14"},
	14:{"x":50, "y":848, "label":"15"},
	15:{"x":122, "y":848, "label":"16"},
	16:{"x":122, "y":812, "label":"17"},
	17:{"x":122, "y":776, "label":"18"},
	18:{"x":122, "y":740, "label":"19"},
	19:{"x":122, "y":704, "label":"20"},
	20:{"x":122, "y":668, "label":"21"},
	21:{"x":122, "y":632, "label":"22"},
	22:{"x":122, "y":596, "label":"23"},
	23:{"x":122, "y":560, "label":"24"},
	24:{"x":122, "y":524, "label":"25"},
	25:{"x":122, "y":488, "label":"26"},
	26:{"x":122, "y":452, "label":"27"},
	27:{"x":122, "y":416, "label":"28"},
	28:{"x":122, "y":380, "label":"29"},
	29:{"x":122, "y":344, "label":"30"},
	30:{"x":122, "y":308, "label":"31"},
	31:{"x":140, "y":278, "label":"32"},
	32:{"x":176, "y":278, "label":"33"},
	33:{"x":194, "y":308, "label":"34"},
	34:{"x":194, "y":344, "label":"35"},
	35:{"x":194, "y":380, "label":"36"},
	36:{"x":194, "y":416, "label":"37"},
	37:{"x":194, "y":452, "label":"38"},
	38:{"x":194, "y":488, "label":"39"},
	39:{"x":194, "y":524, "label":"40"},
	40:{"x":194, "y":560, "label":"41"},
	41:{"x":194, "y":596, "label":"42"},
	42:{"x":194, "y":632, "label":"43"},
	43:{"x":194, "y":668, "label":"44"},
	44:{"x":194, "y":704, "label":"45"},
	45:{"x":194, "y":740, "label":"46"},
	46:{"x":266, "y":740, "label":"47"},
	47:{"x":266, "y":704, "label":"48"},
	48:{"x":266, "y":668, "label":"49"},
	49:{"x":296, "y":650, "label":"50"},
	50:{"x":266, "y":632, "label":"51"},
	51:{"x":266, "y":596, "label":"52"},
	52:{"x":266, "y":560, "label":"53"},
	53:{"x":266, "y":524, "label":"54"},
	54:{"x":266, "y":488, "label":"55"},
	55:{"x":266, "y":452, "label":"56"},
	56:{"x":266, "y":416, "label":"57"},
	57:{"x":266, "y":380, "label":"58"},
	58:{"x":266, "y":344, "label":"59"},
	59:{"x":286, "y":316, "label":"60"},
	60:{"x":322, "y":316, "label":"61"},
	61:{"x":340, "y":345, "label":"62"},
	62:{"x":340, "y":381, "label":"63"},
	63:{"x":340, "y":417, "label":"64"},
	64:{"x":340, "y":453, "label":"65"},
	65:{"x":340, "y":489, "label":"66"},
	66:{"x":340, "y":525, "label":"67"},
	67:{"x":340, "y":561, "label":"68"},
	68:{"x":340, "y":597, "label":"69"},
	69:{"x":340, "y":633, "label":"70"},
	70:{"x":340, "y":669, "label":"71"},
	71:{"x":340, "y":705, "label":"72"},
	72:{"x":309, "y":723, "label":"73"},
	73:{"x":341, "y":741, "label":"74"},
	74:{"x":413, "y":741, "label":"75"},
	75:{"x":413, "y":705, "label":"76"},
	76:{"x":413, "y":669, "label":"77"},
	77:{"x":413, "y":633, "label":"78"},
	78:{"x":413, "y":597, "label":"79"},
	79:{"x":413, "y":561, "label":"80"},
	80:{"x":445, "y":543, "label":"81"},
	81:{"x":445, "y":507, "label":"82"},
	82:{"x":414, "y":489, "label":"83"},
	83:{"x":414, "y":453, "label":"84"},
	84:{"x":488, "y":453, "label":"85"},
	85:{"x":488, "y":489, "label":"86"},
	86:{"x":488, "y":525, "label":"87"},
	87:{"x":488, "y":561, "label":"88"},
	88:{"x":488, "y":597, "label":"89"},
	89:{"x":488, "y":633, "label":"90"},
	90:{"x":488, "y":669, "label":"91"},
	91:{"x":488, "y":705, "label":"92"},
	92:{"x":488, "y":741, "label":"93"},
	93:{"x":488, "y":777, "label":"94"},
	94:{"x":488, "y":813, "label":"95"},
	95:{"x":506, "y":845, "label":"96"},
	96:{"x":542, "y":845, "label":"97"},
	97:{"x":562, "y":814, "label":"98"},
	98:{"x":562, "y":778, "label":"99"},
	99:{"x":562, "y":742, "label":"100"},
	100:{"x":562, "y":706, "label":"101"},
	101:{"x":562, "y":670, "label":"102"},
	102:{"x":562, "y":634, "label":"103"},
	103:{"x":562, "y":598, "label":"104"},
	104:{"x":562, "y":562, "label":"105"},
	105:{"x":562, "y":526, "label":"106"},
	106:{"x":562, "y":490, "label":"107"},
	107:{"x":562, "y":454, "label":"108"},
	108:{"x":562, "y":418, "label":"109"},
	109:{"x":562, "y":382, "label":"110"},
	110:{"x":562, "y":346, "label":"111"},
	111:{"x":562, "y":310, "label":"111.1"},
	112:{"x":562, "y":274, "label":"111.2"},
	113:{"x":562, "y":238, "label":"111.3"},
	114:{"x":562, "y":202, "label":"111.4"},
	115:{"x":562, "y":166, "label":"111.5"},
	116:{"x":562, "y":130, "label":"111.6"},
	117:{"x":562, "y":94, "label":"111.7"},
	118:{"x":571, "y":61, "label":"111.8"},
	119:{"x":598, "y":37, "label":"112.9"},
	120:{"x":625, "y":61, "label":"112.8"},
	121:{"x":634, "y":94, "label":"112.7"},
	122:{"x":634, "y":130, "label":"112.6"},
	123:{"x":634, "y":166, "label":"112.5"},
	124:{"x":634, "y":202, "label":"112.4"},
	125:{"x":634, "y":238, "label":"112.3"},
	126:{"x":634, "y":274, "label":"112.2"},
	127:{"x":634, "y":310, "label":"112.1"},
	128:{"x":634, "y":346, "label":"112"},
	129:{"x":634, "y":382, "label":"113"},
	130:{"x":634, "y":418, "label":"114"},
	131:{"x":634, "y":454, "label":"115"},
	132:{"x":634, "y":490, "label":"116"},
	133:{"x":634, "y":526, "label":"117"},
	134:{"x":634, "y":562, "label":"118"},
	135:{"x":634, "y":598, "label":"119"},
	136:{"x":634, "y":634, "label":"120"},
	137:{"x":634, "y":670, "label":"121"},
	138:{"x":634, "y":706, "label":"122"},
	139:{"x":634, "y":742, "label":"123"},
	140:{"x":634, "y":778, "label":"124"},
	141:{"x":634, "y":814, "label":"125"},
	142:{"x":634, "y":850, "label":"126"},
	143:{"x":634, "y":886, "label":"127"}

		
};	

const AminoAcids = {
	R: {"logoClass": "Basic", "name": "Arginine", "short": "Ala"},
	H: {"logoClass": "Basic", "name": "Histidine", "short": "His"},
	K: {"logoClass": "Basic", "name": "Lysine", "short": "Lys"},
	D: {"logoClass": "Acid", "name": "Aspartic acid", "short": "Asp"},
	E: {"logoClass": "Acid", "name": "Glutamic acid", "short": "Glu"},
	C: {"logoClass": "Polar", "name": "Cysteine", "short": "Cys"},
	S: {"logoClass": "Polar", "name": "Serine", "short": "Ser"},
	G: {"logoClass": "Polar", "name": "Glycine", "short": "Cys"},
	Y: {"logoClass": "Polar", "name": "Tyrosine", "short": "Tyr"},
	T: {"logoClass": "Polar", "name": "Threonine", "short": "Thr"},
	P: {"logoClass": "Hydrophobic", "name": "Proline", "short": "Pro"},
	F: {"logoClass": "Hydrophobic", "name": "Phenylalanine", "short": "Phe"},
	V: {"logoClass": "Hydrophobic", "name": "Valine", "short": "Val"},
	L: {"logoClass": "Hydrophobic", "name": "Leucine", "short": "Leu"},
	I: {"logoClass": "Hydrophobic", "name": "Isoleucine", "short": "Ili"},
	A: {"logoClass": "Hydrophobic", "name": "Alanine", "short": "Ala"},
	M: {"logoClass": "Hydrophobic", "name": "Methionine", "short": "Met"},
	W: {"logoClass": "Hydrophobic", "name": "Tryptophan", "short": "Trp"},
	N: {"logoClass": "Neutral", "name": "Asparagine", "short": "Asn"},
	Q: {"logoClass": "Neutral", "name": "Glutamine", "short": "Pro"},
	X: {"logoClass": "Gap", "name": "Gap", "short": "X"}	
};

const CdrBasePositions = [25,38,54,65,103,134];
const NotLabelIt = [8,10,15,32,46,49,60,71,73,74,80,81,84,85,87,96,119,120];


const logoClassColor = d3.scale.ordinal()
	.domain(["Acid", "Basic", "Hydrophobic", "Neutral", "Polar", "Gap"])
	.range(["#D75032", "#1FAABD", "#4B3E4D", "#92278F", "#64AD59", "#CCCCCC"]);


console.log("Processando arquivo");	

/* Carregar o arquivo, ler as sequências e calcular o numero de residuos em cada posicao */
d3.tsv("data/CollierComEspecie.csv", function (error, sequenceData) {	
	if (error) 
		throw error;

	ResiduesCount = {"numberOfSequences": sequenceData.length, "numberOfPositions":144, "positions": {}};
	Species.push("all");
	
	sequenceData.forEach(function(d){
		SequencesData.push(d);
		
		// obter o especie
        if(Species.indexOf(d.Species)==-1)
        {
        	Species.push(d.Species); 
        }
				
		// Percorrer toda a sequencia
		for (var positionIndex = 0; positionIndex < ResiduesCount["numberOfPositions"]; positionIndex++) {
			// se a posicao ainda nao existe na lista de posicoes, adicione-a com uma lista vazia
            if (!(positionIndex in ResiduesCount["positions"])) {
                ResiduesCount["positions"][positionIndex] = {};
            }

			// obter o residuo
            var letter = d.Seq[positionIndex];

			// se o residuo nao estiver presente na lista de residuos na posicao corrente, adiciona-lo com contador em 0
            if (!(letter in ResiduesCount["positions"][positionIndex])) {
                ResiduesCount["positions"][positionIndex][letter] = 0;
            }

			// Incremendar o contador de residuo do tipo e posicao especificos
            ResiduesCount["positions"][positionIndex][letter]++;                    
        }        				
	});    

	// Gerar vetor com os dados por posicao. Em cada posicao, os residuos devem ser ordenados de acordo com o numero de
	// ocorrencias na posicao (com excecao de X, que sempre deve ficar no final da sequencia)				
	for (var positionIndex = 0; positionIndex < ResiduesCount["numberOfPositions"]; positionIndex++) {
		var positionInfo = {"id":positionIndex, "residues":[], "conservation":0};
		
		var sorted = sortByValue(ResiduesCount["positions"][positionIndex]); // ordena os residuos de uma posicao
		yAcc = 0;
		positionInfo["conservation"] = ResiduesCount["positions"][positionIndex][sorted[0]]/sequenceData.length; // info de uma posicao
		for (var r in sorted) {
			residue = sorted[r];
			positionInfo["residues"].push({"id":residue, "qty": ResiduesCount["positions"][positionIndex][residue], "yAcc": yAcc});
			yAcc += ResiduesCount["positions"][positionIndex][residue];	
		}				
		PositionsData.push(positionInfo);
	}

	Species.sort();
	
	// executar o restante da logica
	main();
});

function sortByValue(dict) {
	// retorna uma lista de residuos de uma posicao ordenada de acordo com o numero de ocorrencias de cada tipo de residuo 
    var sortable = [];
    for (var letter in dict) {
        if (letter != "metrics") {
            sortable.push([letter, dict[letter]]);
        }
    }
    sortable.sort(function (a, b) {
        if (a[0]=='X') {	// sempre colocar residuos indeterminados ou gaps no final
        	return 1;
        }
        else
        {
            if (b[0]=='X') {	// sempre colocar residuos indeterminados ou gaps no final
            	return -1;
            }
            else {            	
            	return b[1] - a[1];
            }
        }
    });
    var sortedLetters = [];
    for (var index = 0; index < sortable.length; index++) {
        sortedLetters.push(sortable[index][0]);
    }
	
    return sortedLetters;
}
function createGraph(){
	console.log("Criando Gráfico");
	Svg = d3.select(GraphContainer)
				  .append("svg")
				  .attr("width", GraphWidth)
				  .attr("height", GraphHeight);     				  
}

function drawGraphStructure(){
	var aligmentInformation = Svg.append("g")
	   .attr("class", "aligmentInformation")
	   .attr("transform", "translate(" +(Margin+18)+", "+(Margin+20)+")");
	   
	aligmentInformation.append("text")
//	   .attr('x', Margin+18)
//	   .attr('y', Margin+20)
	   .text("Alignment from " + ResiduesCount.numberOfSequences + " sequences")
	   ;

	var legendRectSize = 15;
	var legendSpacing = 4;
	var hOffset = Margin+50;
	var vOffset = 150;

	Svg.append("text")
	   .attr('x', hOffset - 32)
	   .attr('y', vOffset-70)
	   .text("Residue classes:")
	   .attr("class", "legendHeader");

	var legend = Svg.selectAll('.legend')
					.data(logoClassColor.domain())
	  				.enter()
	  				.append('g')
	  				.attr('class', 'legend')
	  				.attr('transform', function(d, i) {
						var height = legendRectSize + legendSpacing;
						var offset =  height * logoClassColor.domain().length / 2;
						var horz = -2 * legendRectSize;
						var vert = i * height - offset;
						return 'translate(' + (hOffset+horz) + ',' + (vOffset+vert) + ')';
	  				});
	  
	legend.append('rect')
		  .attr('width', legendRectSize)
		  .attr('height', legendRectSize)
		  .style('fill', logoClassColor)
		  .style('stroke', logoClassColor);
		  
	legend.append('text')
		  .attr('x', legendRectSize + legendSpacing)
		  .attr('y', legendRectSize - legendSpacing)
		  .text(function(d) { return d; });

	// Draw CDR base squares	
	Svg.selectAll(".CdrSquare")
	   .data(CdrBasePositions)
	   .enter().append("g")
	   .attr("class", "CdrSquare")
	   .attr("transform", function(d) { return "translate(" + (Margin+Positions[d]['x']) + ","+ (Positions[d]['y']) + ")"; })
	   .append("rect")
	   .attr("x", -PieRadius)
	   .attr("y", -PieRadius)
	   .attr("height", 2*PieRadius)
	   .attr("width", 2*PieRadius)
	   .style("stroke", "black")
	   .style("fill", "none")
	   .style("stroke-width", 1);
	   
	// Draw lines	   
	var lines = Svg.append("g")
				   .attr("class", "lines");
				   
	lines.append("path")
	   .attr("d","M " + (Positions[14]["x"]+PieRadius+Margin) + " " + (Positions[14]["y"]) + 
	             " L " + (Positions[15]["x"]) + " " + (Positions[15]["y"]))
	   .style("stroke-width", 2)
	   .style("stroke", "black");	   

	lines.append("path")
	   .attr("d","M " +  (Positions[73]["x"]+PieRadius+Margin) + " " + (Positions[73]["y"]) +
	             " L " + (Positions[74]["x"]) + " " + (Positions[74]["y"]))
	   .style("stroke-width", 2)
	   .style("stroke", "black");	   
	   
	lines.append("path")
	   .attr("d","M " +  (Positions[83]["x"]+PieRadius+Margin) + " " + (Positions[83]["y"]) +
	             " L " + (Positions[84]["x"]) + " " + (Positions[84]["y"]))
	   .style("stroke-width", 2)
	   .style("stroke", "black");	   

	Filter = d3.select(FilterContainer)
			   .append('select')
			   .attr("class", "species");
			   
	Filter.on("change", change);
	   			    	
	var options = Filter.selectAll('option')
						.data(Species).enter()
						.append('option')
						.text(function (d) { return d; });

	Filter.property("value", "all");
						

/*						
	filter = d3.select(FilterContainer).select(".Species")
		  	   .selectAll('option')
						.data(Species).enter()
						.append('option')
						.text(function (d) { return d; });		             	   
*/								             	   
}

function filterBy(species){
	ResiduesCount = {"numberOfSequences": 0, "numberOfPositions":144, "positions": {}};
	PositionsData = [];

//	console.log(SequencesData);
	for(i in SequencesData){
		if(species=="all" || SequencesData[i]["Species"]==species){
			ResiduesCount["numberOfSequences"]++;			
			// Percorrer toda a sequencia
			for (var positionIndex = 0; positionIndex < ResiduesCount["numberOfPositions"]; positionIndex++) {
				// se a posicao ainda nao existe na lista de posicoes, adicione-a com uma lista vazia
	            if (!(positionIndex in ResiduesCount["positions"])) {
	                ResiduesCount["positions"][positionIndex] = {};
	            }
	
				// obter o residuo
	            var letter = SequencesData[i].Seq[positionIndex];
	
				// se o residuo nao estiver presente na lista de residuos na posicao corrente, adiciona-lo com contador em 0
	            if (!(letter in ResiduesCount["positions"][positionIndex])) {
	                ResiduesCount["positions"][positionIndex][letter] = 0;
	            }
	
				// Incremendar o contador de residuo do tipo e posicao especificos
	            ResiduesCount["positions"][positionIndex][letter]++;                    
	        }        				
		}		
	}
	
	// Gerar vetor com os dados por posicao. Em cada posicao, os residuos devem ser ordenados de acordo com o numero de
	// ocorrencias na posicao (com excecao de X, que sempre deve ficar no final da sequencia)				
	for (var positionIndex = 0; positionIndex < ResiduesCount["numberOfPositions"]; positionIndex++) {
		var positionInfo = {"id":positionIndex, "residues":[], "conservation":0};
		
		var sorted = sortByValue(ResiduesCount["positions"][positionIndex]); // ordena os residuos de uma posicao
		yAcc = 0;
		positionInfo["conservation"] = ResiduesCount["positions"][positionIndex][sorted[0]]/ResiduesCount["numberOfSequences"]; // info de uma posicao
		for (var r in sorted) {
			residue = sorted[r];
			positionInfo["residues"].push({"id":residue, "qty": ResiduesCount["positions"][positionIndex][residue], "yAcc": yAcc});
			yAcc += ResiduesCount["positions"][positionIndex][residue];	
		}				
		PositionsData.push(positionInfo);
	}			
}


function compareListOfResiduesAlpha(a,b) {
	if (a.id=='X') {	// sempre colocar residuos indeterminados ou gaps no final
		return 1;
	}
	else
	{
	    if (b.id=='X') {	// sempre colocar residuos indeterminados ou gaps no final
	    	return -1;
	    }
	    else {
	    	if (a.id < b.id) {
	    		return -1;
	    	}
	    	else {
	    		return 1;
	    	}	    	
	    }
	}
}

function closeDetail(){
	details = d3.select("#graphic-detail").selectAll("svg").remove();
	d3.select("#graphic-detail").classed("detailHidden", true).classed("detailVisible", false);
}

function sortByFrequencyOrAlpha(){
		// gera uma nova escala com o dominio ordenado de acordo com a opcao selecionada no checkbox
		
    var x0 = XScale.domain(Residues.sort(this.textContent=="Sort by frequency"
        ? function(a, b) { return b.qty - a.qty; }
        : function(a, b) { return compareListOfResiduesAlpha(a,b); })
        .map(function(d) { if(d.id=='X') return 'Gap'; else return d.id; }))
        .copy();

	if(this.textContent=="Sort by frequency")
		this.textContent="Sort by residue name";
	else
		this.textContent="Sort by frequency";

	// transicao (efeito)
    var transition = Details.transition().duration(750),
        delay = function(d, i) { return i * 5; };

	Details.selectAll(".xaxis").remove();

	var xAxis = d3.svg.axis()
			    .scale(x0)
			    .orient("bottom");			    

	Details.append("g")
	    .attr("class", "xaxis")
	    .attr("transform", "translate( 50,"+(BarGraphHeight+2*Margin)+")")
	    .call(xAxis);

	// Aplicar o movimento as barras
	transition.selectAll(".bar")	
		.delay(delay)
		.attr("transform", function(d) { if(d.id=='X') return "translate(" + (50+x0('Gap')) + ","+2*Margin+")"; else return "translate(" + (50+x0(d.id)) + ","+2*Margin+")"; });	     	
}

function showDetail(d, i){	
	var residues = PositionsData[d.id].residues;
	residues.sort(compareListOfResiduesAlpha);

	Residues = residues;

	var residuesId = [];
	
	for(i in residues){
		if(residues[i].id=='X')
			residuesId.push('Gap');
		else
			residuesId.push(residues[i].id);
	}	

	var height = (DetailHeight-2*Margin);
	BarGraphHeight = height;
	
	var tooltip = d3.select("#graphic-tooltip")
			.style("opacity", 0);
	
// Escalas do grafico de barras

	YScale = d3.scale.linear()
			 .domain([0, d3.max(PositionsData[d.id].residues, function(d) { return d.qty;})])
			 .range([height,0]);
							     						 						     						 
	XScale = d3.scale.ordinal()
			 .domain(residuesId)
			 .rangeBands([0, residues.length*BarWidth]);

    d3.select("#graphic-detail").classed("detailHidden", false).classed("detailVisible", true);
	
	Details = d3.select("#graphic-detail").selectAll("svg").remove();
	
	Details = d3.select("#graphic-detail").append("svg")
				  .attr("width", DetailWidth+35)
				  .attr("height", DetailHeight+2*Margin);	
    
    // Colocar eixo de frequencia				    		 
	var yAxis = d3.svg.axis()
				    .scale(YScale)
				    .orient("left")
				    .tickFormat(d3.format(".0"));
				    
	var xAxis = d3.svg.axis()
			    .scale(XScale)
			    .orient("bottom");			    
		    
	Details.append("g")
	    .attr("class", "xaxis")
	    .attr("transform", "translate( 50,"+(height+2*Margin)+")")
	    .call(xAxis);

	// sort by option		    
	Details.append("text")
		    .attr("transform", "translate(50," + Margin + ")")
		    .attr("class", "sort")		    
		    .text("Sort by frequency")
		    .on("click", sortByFrequencyOrAlpha);		    


	// close "button"		    
	Details.append("text")
		    .attr("transform", "translate("+ (DetailWidth+35) + "," + Margin + ")")
		    .attr("class", "close")
		    .style("text-anchor", "end")
		    .text("Close X")
		    .on("click", closeDetail);		    
	
	Details.selectAll(".bar")
		   .data(residues)
		   .enter()
		   .append("g")
		   .attr("class", "bar")
		   .attr("transform", function(d) { return "translate(" + (50+1+(d.id=='X' ? XScale('Gap') : XScale(d.id))) + ","+2*Margin+")";}) 
		   .append("rect")			
			.attr("class", "barRect")
	  		.attr("width", XScale.rangeBand()-2)
	  		.attr("y", function(d) { return YScale(d["qty"]); }) 
	  		.attr("height", function(d) { return height-YScale(d["qty"]); })
	  		.style("fill", function(d) { return logoClassColor(AminoAcids[d["id"]].logoClass);})
	  		.on("mouseover", function(d) { // // Exibir tooltip										
				tooltip.transition()		
    			   .duration(200)		
				   .style("opacity", .9)
				   .attr("height", 10);
				tooltip.html(d["qty"] + " " + AminoAcids[d.id].name + "s")	
                  .style("left", (d3.event.pageX) + "px")		
                  .style("top", (d3.event.pageY) + "px");	
        })					
    	.on("mouseout", function(d) {		
            tooltip.transition()		
                .duration(500)		
                .style("opacity", 0);	
		});		        				        		
	  		
	// Y axis label
	Details.append("g")
		    .attr("class", "yaxis")
		    .attr("transform", "translate( 50," + 2*Margin + ")")
		    .call(yAxis)
		    .append("text")
		    .attr("transform", "rotate(-90)")
		    .attr("y", 6)
		    .attr("dy", ".71em")
		    .style("text-anchor", "end")
		    .style("fill", "gray")
		    .text("Frequency in position " + d.label);

console.log("rangeBand");
console.log(XScale.rangeBand());

}

function change(){
	filterBy(Filter.property("value"));	
	classifyBy("logoClass");
	
// TODO por um g para isso e somente remover o texto, o g se mantem
	aligmentInformation = Svg.selectAll(".aligmentInformation");
	aligmentInformation.selectAll("text").remove();
	
	aligmentInformation.append("text")
				   	   .text("Alignment from " + ResiduesCount.numberOfSequences + " sequences");

	
	
	var position = Svg.selectAll(".positionContainer");

	position.remove();

	var position = Svg.selectAll(".positionContainer")
					  .data(PositionsClassification)
					  .enter()					  
					  .append("g")
					  .attr("class", "positionContainer")
					  .attr("transform", function(d) { return "translate(" + (Margin+Positions[d.id]['x']) + ","+ (Positions[d.id]['y']) + ")"; });

	Arc = d3.svg.arc()
  					.outerRadius(PieRadius);

	Pie = d3.layout.pie()
    			.value(function(d) { return d.count; });

	Path = position.selectAll('path')
					   .data(function(d){return Pie(d["classes"]);})
					   .enter()
					   .append('path')
					   .attr('d', Arc)
					   .attr('fill', function(d) {return logoClassColor(d.data.classId);});

	Svg.selectAll(".sequenceContainer")
  	   .moveToFront();							        		      	

	Svg.selectAll(".positionInvisibleCircle")
  	   .moveToFront();
				   
}

d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

function classifyBy(method) {
	var classification;
	var id;

	PositionsClassification = [];

	for(var pos in PositionsData) {			
		id = PositionsData[pos]["id"];
		var posClassification = {"id": id, "label": Positions[id]["label"], "classes":[]};
		var classes = {};

		residues = PositionsData[id]["residues"];

		for(var res in residues){
			classification = AminoAcids[residues[res]["id"]][method];
			if(!(classification in classes)){
				classes[classification] = 0;
			}
			
			classes[classification] += residues[res]["qty"];									
		}
				
		for(var i in classes){
			posClassification["classes"].push({"classId": i, "count": classes[i]});
		}			

		PositionsClassification.push(posClassification);
	}
}

function drawCollier(){
	classifyBy("logoClass");
	
	var position = Svg.selectAll(".positionContainer")
					  .data(PositionsClassification)
					  .enter().append("g")
					  .attr("class", "positionContainer")
					  .attr("transform", function(d) { return "translate(" + (Margin+Positions[d.id]['x']) + ","+ (Positions[d.id]['y']) + ")"; });
					  
	
	Arc = d3.svg.arc()
  					.outerRadius(PieRadius);

	Pie = d3.layout.pie()
    			.value(function(d) { return d.count; });

	Path = position.selectAll('path')
					   .data(function(d){return Pie(d["classes"]);})
					   .enter()
					   .append('path')
					   .attr('d', Arc)
					   .attr("class", "pie")
					   .attr('fill', function(d) {return logoClassColor(d.data.classId);})
					   .on("click", showDetail);

	var positionL = Svg.selectAll(".positionLabel")
					  .data(PositionsClassification)
					  .enter().append("g")
					  .attr("class", "positionLabel")
					  .attr("transform", function(d) { return "translate(" + (Margin+Positions[d.id]['x']) + ","+ (Positions[d.id]['y']) + ")"; });
						   
	positionL.append("text")
			.text(function(d) { if(NotLabelIt.indexOf(d.id)==-1) { return d.label;}})
			.attr("class","residue")
			.attr("x",-(PieRadius+1))
			.attr("y",4)
			.style("fill","gray")
			.style("text-anchor","end"); 
			
	Svg.selectAll(".positionInvisibleCircle")
  	   .moveToFront();			        		      		
}

function drawInvisible(){
	var positionI = Svg.selectAll(".positionInvisibleCircle")
					  .data(PositionsClassification)
					  .enter().append("g")
					  .attr("class", "positionInvisibleCircle")
					  .attr("transform", function(d) { return "translate(" + (Margin+Positions[d.id]['x']) + ","+ (Positions[d.id]['y']) + ")"; });					  

	positionI.append("circle")
			 .attr("r", PieRadius)
			 .style("fill", "white")
			 .style("opacity", .0) 	
			 .on("click", showDetail);	
}

function formatSequence(sequence) {
	var sequenceData = [];
	
	for(var i in sequence) {
		sequenceData.push({"index":i, "residue":sequence[i]});	
	}
	
	return sequenceData;
}

function clearComparationSequence() {
	Svg.selectAll(".sequenceContainer").remove();	
}

function sequenceOK(sequence) {
	var aas = /^[ACDEFGHIKLMNPQRSTVWYX]+$/i;
	if (aas.test(sequence)) {
		return true;
	}
	else {
		return false;	
	}	
}

function drawComparationSequence(sequence) {
	if(!sequenceOK(sequence)){
		confirm("Invalid sequence");
	}
	else {	
		clearComparationSequence();
		
		var position = Svg.selectAll(".sequenceContainer")
						  .data(formatSequence(sequence))
						  .enter().append("g")
						  .attr("class", "sequenceContainer")
						  .attr("transform", function(d) { return "translate(" + (Margin+Positions[d.index]['x']) + ","+ (Positions[d.index]['y']) + ")"; });
	
		position.selectAll("circle").remove();
	
		position.append("circle")
				.attr("r", PieRadius/2)
				.attr('fill', function(d) {return logoClassColor(AminoAcids[d.residue]["logoClass"]);});
				
		position.append("text")
				.text(function(d) {if(d.residue!='X') return d.residue;})
				.attr("y", 4)
				.style("text-anchor", "middle")
				.style("fill", "white")
				.style("font-weight", "bold") 
				.attr("class", "residue");
				
		Svg.selectAll(".positionInvisibleCircle")
	  	   .moveToFront();
	}			
}

function main(){		
	createGraph();
	console.log("Gráfico criado");
	drawGraphStructure();
	drawCollier();
	drawInvisible();

}

function example(num) {
	
	input = document.getElementById("sequence");
	if(num==1)	
		input.value = "RITLKESGPXPLVKPTQTLTLTCSFSGFSLSXXDFGVGVGWIRQPPGKALEWLAIIYSDXXXDDKRYSPSLNXTRLTITKDTSKNQVVLVMTRVSPVDTATYFCAHRRGPTTLFGVXXXXXXPIARGPVNAMDVWGQGITVTIS";
	else
		if(num==2)
			input.value = "DIQVTQTTSSLSASLGDRVTISCRASQDIXXXXXXSNYLNWYQQKPDGTVKLLIYYTXXXXXXXSRLHSGVPXSRFSGSGXXSGTDYSLTISNLEQEDIATYFCQQGNTXXXXXXXXXXXXXXXXXXXXXLPYTFGGGTKLEIX";
		else
			input.value = "EVQLVESGGXGLVQPGGSLRLSCAASGFTFXXXXSRYTMSWVRQAPGKGLEWVATISGGXXXGHTYYLDSVKXGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCTRGFGDXXXXXXXXXXXXXXXXXXGGYFDVWGQGTLVTVS";
}
