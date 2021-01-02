// This js file for testing any dummy varaibles or under construction items 
//in the main project files

<div style="
			max-width:360px;
			position: fixed;
			height:auto;
			right:70px;
			bottom:0;
			z-index:99;
			display:flex;
			flex-direction:column;
			">

			<div style=" background-color: rgb(104, 76, 165);
						width: 100%; 
						height: 50pt;
						margin-bottom:0;
						display:flex;
				flex-direction:row;">

				<div style="  
							margin: 10px;">
					<img src="https://thumbs.dreamstime.com/z/letter-black-flower-alphabet-beautiful-capital-letters-shadow-185961956.jpg" style="  border-radius: 50%; 																					  width: 35pt; 
										 height: 35pt;" 
						 alt="AlmerceImage"/>
				</div>

					<div style="align-self: center;" >
				<p style="color: white; 
							font-size: 20px; 
							font-weight: 600;
							margin:auto;">
					Almerce
				</p>
				</div>
			<button style="background-color: Transparent;
  							border: none;
 							 color: white;
 							 font-size: 30px;
  							margin-bottom: 10pt;
  							padding-right: 10pt;
  							float: right;">+</button>
			<button style="background-color: Transparent;
  					border: none;
 				    color: white;
  					font-size: 30px;
 					 margin-bottom: 10pt;
 					 padding-right: 10pt;
  float: right;">-</button>
		</div>
	<div id="my-frame" >
		<iframe  style="
					max-width:360px;
					height: 60vh;
					right:50px;
					z-index:99;
					" src="http://localhost:3000">
		</iframe>
	</div>
</div>


<div style="
			position: fixed;
			right:80px;
			bottom:0;" >
	<div style="background-color: rgb(104, 76, 165); ">
		<div style="display: inline-block; padding: 5pt; "  >
			<img src="https://thumbs.dreamstime.com/z/letter-black-flower-alphabet-beautiful-capital-letters-shadow-185961956.jpg" style="
						  border-radius: 50%; 														  width: 35pt; 
						  height: 35pt;"
			alt="AlmerceImage"/>
		</div >
		<div  style="  display: inline-block; color: white;  padding-top: 15pt;  vertical-align: top">    	
				Almerce
		</div>
		<div style="background-color: Transparent;
 							color: white;
  							float: right;
					  		border: none;	 
							font-size: 20px;
							padding: 10pt;	   		
					   		">
			x
		</div>
		<div style="background-color: Transparent;
  							border: none;
 							color: white;
  							float: right;
							font-size: 20px;
							padding: 10pt;		   		
					   		"> -
		</div>
	</div>
<div>
		<iframe  style="
						max-width:360px;
						height: 50vh;"
				        src="http://localhost:3000">
		</iframe>
	</div>
</div>




//////////////// last version

https://cliply.co/wp-content/uploads/2019/05/371905140_MEET_ROBOT_400px.gif
<script>
	var state = 0 ;
	function minimizeMaximize(){	
		if(state===0){
		document.getElementById("iframe").style.display = "none";
		document.getElementById("miniMaxButtonn").innerHTML = "+";
			state=state+1;
		}
		else{
			document.getElementById("iframe").style.display = "unset";
			document.getElementById("miniMaxButtonn").innerHTML = "-";
			state=state-1;
		}
	}
</script>
<div style="
			position: fixed;
			right:70px;
			bottom:0;
			width:320px;
			box-shadow: rgba(0, 0, 0, 0.15) 0px 12px 24px 0px;" >
	<div id="header" style="background-color: rgb(104, 76, 165); border-radius: 10px 10px 0px 0px; ">
		<div style="display: inline-block; padding: 5pt; "  >
			<img src="https://cliply.co/wp-content/uploads/2019/05/371905140_MEET_ROBOT_400px.gif" style="
						  border-radius: 50%; 														  width: 35pt; 
						  height: 35pt;"
			alt="AlmerceImage"/>
		</div >
		<div  style="  display: inline-block; color: white; padding-top: 15pt;  vertical-align: top">    	
				Almerce
		</div>
		<div id="miniMaxButtonn" style="background-color: Transparent;
  							border: none;
 							color: white;
  							float: right;
							font-size: 20px;
					 		padding-right: 15pt ;
 							padding-top:15pt ;
					   		"
			 onclick='minimizeMaximize()'
			 > -
		</div>
	</div>
<div>
		<iframe id="iframe"  style="
					height: 55vh;"
				    src="http://localhost:3000"
				allow="microphone"
				frameBorder="0" >
		</iframe>
	</div>
</div>