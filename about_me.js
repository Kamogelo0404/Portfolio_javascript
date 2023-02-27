window.onload= function() {
    let name= "Kamogelo Precious Nkadimeng";
    let gender= 'Female'
    let birth= '04/04/2000'
    let nationality= 'South African'
    let race= 'Black'

    //display personal details
    document.getElementById("name").innerHTML= "FULLNAME:   " + name ;
    document.getElementById("gender").innerHTML= "GENDER:   " + gender ;
    document.getElementById("birth").innerHTML= "DateOfBirth:   " + birth ;
    document.getElementById("national").innerHTML= "NATIONALITY:   " + nationality ;
    document.getElementById("race").innerHTML= "RACE:   " + race ;



    let eduList= new Array(
      {item:"Kubela Secondary School: 2017"},
      {item: "University of Limpopo: 2022"}
    );

        let ListEl= "<ul>";
        for(let l=0; l<eduList.length; l++) {
        ListEl+= "<li>"+ eduList[l].item +"</li>";
    }
         ListEl+="</ul>";
         //output all the items listed
         document.getElementById("education").innerHTML= ListEl;



    
   let highqualification=  "Bachelor's Degree"  
   let namequalification=  "Bsc in Mathematical and Computer Sciences"
   let yearof="2022"

   document.getElementById("high").innerHTML= "Highest Qualification Obtained:   " + highqualification ;
   document.getElementById("nameof").innerHTML= "Name of Qualification:   " + namequalification;
   document.getElementById("complete").innerHTML= "Year of Completion:    " + yearof;
   

    
    

    

    //Array containing all my projects done during my undergraduate
    let projectList= new Array(
      {item:"Web Development(Hair-Salon)- 2018"},
      {item:"Mobile Application(COSC300)- 2022"},
      {item:"Database Development System- 2022"},
      {item:"Network Development System-2022"},
    );

         let ListOl= "<ol>";
         for(let i=0; i<projectList.length; i++) {
         ListOl+= "<li>"+ projectList[i].item +"</li>";
    }
     ListOl+="</ol>";
    //output all the items listed
    document.getElementById("project").innerHTML= ListOl;



   
     //Array containing all the programming languages done and personal skills
    let skillList= new Array(
      {item:"C++"},
      {item:"JAVA"},
      {item:"SQL"},
      {item:"ICT"},
      {item:"Microsoft Excel"},
      {item:"Problem Solving"},
      {item:"Communicating and Multitasking"},
    );
        let ListUl= "<ul>";
        for(let j=0; j<skillList.length; j++) {
        ListUl+= "<li>"+ skillList[j].item +"</li>";
    }
   //output all skills in unordered list
    ListUl+="</ul>";
    document.getElementById("skills").innerHTML= ListUl;
    


    let experienceList= new Array(
      {item:"Providing technival support to students"},
      {item:"Software installation"},
      {item:"Microsoft Office"},
      {item:"Real-time screen monitoring"},
      {item:"Troubleshooting"},
      {item:"Signing in to universities online facilities"},
    );
         let ListDl= "<ul>";
         for(let k=0; k<experienceList.length; k++) {
         ListDl+=  "<li>"+ experienceList[k].item +"</li>" ;
    }
   //output all skills in unordered list
    ListDl+="</ul>";
    document.getElementById("expe").innerHTML="Computer Science Lab Assistant(Volunteer)" + ListDl;
}
