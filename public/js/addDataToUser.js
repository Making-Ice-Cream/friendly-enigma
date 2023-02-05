const addData = async() =>{

    const url = "http://localhost:80/login"

    
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          phoneNumber: "9306008049",
          userSecureString: "Hello"
    })
   });

   const parsedResponse   = await response.json();

   let responseArray = parsedResponse.registeredEvents;

   let Events = `<table class="table table-responsive table-hover" style = "color: black;">
   <thead>
       <tr>
       <th scope="col">#</th>
       <th scope="col">Event Name</th>
       <th scope="col">Event Date</th>
       <th scope="col">Team Name</th>
       </tr>
   </thead>
   <tbody>
       `;

       responseArray.forEach((element , index)=>{
                             
        Events  +=`<tr>
             <th scope="row">${index+1}</th>
             <td>${element.eventName}</td>
             <td>${element.eventDate}</td>
             <td>Daddy h tumhre</td>
             </tr>`
             
         
 })

 Events += `</tbody>
         </table>`;

         const USERHTML = `<div class="card-body" id = "user_id">
                                          <h1 class="card-title text-center">Dashboard</h1>
                                          <div class="row">

                                          
                                          <div class="container text-center">
                                          <p class="text-center">Deepak Yadav</p>
                                          
                                        <button onclick="signOut()" class="btn align-item-center btn-outline-dark ">Sign Out</button>
                                          </div>
                                          </div>
                                          <div class="row justify-content-center m-2">
                                          <h5 style="color: #000000" class="text-center">Events Registered</h5>
                                          </div>
                                          <div>${Events} </div>
                                            
                                           </div>

                                    `;

         document.getElementById("loader").style = "display : none;";
         document.getElementById("user_container").innerHTML = USERHTML;

}

$(document).ready(addData());
