const title = document.getElementsByClassName('table-dark')


fetch('https://fakestoreapi.com/products').then ((data)=> {   //Fetch data 
        return data.json();                        //json data
}).then((objectData) =>{                            
        console.log(objectData[0].title);          //object data 
        let tableData = "";
        objectData.map((values)=>{
                //tableData+=`<h1>${values.title}</h1>`;
                tableData+=`<tr>
                <td>${values.title}</td>
                <td>${values.description}</td>
                <td>${values.price}</td>
                <td><img src="${values.image}"/></td>
              </tr>`;
        });
        document.getElementById("table-body").innerHTML=tableData;
        }).catch((err)=>{
           console.log(error);     
        })

document.addEventListener("click", function(){          
  document.body.style.backgroundColor = "orange";
})
           