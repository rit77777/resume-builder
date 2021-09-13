module.exports = ({
  name,
  email,
  phone,
  linkedin,
  github,
  skills,
  // experience

  experienceOrganization1,
  experiencePosition1,
  experienceDescription1,
  experienceDuration1,
  experienceOrganization2,
  experiencePosition2,
  experienceDescription2,
  experienceDuration2,

  //

  projectTitle1,
  projectLink1,
  projectDescription1,
  projectTitle2,
  projectLink2,
  projectDescription2,
  //
  college,
  collegeQualification,
  collegeYear,
  collegeDescription,
  school,
  schoolQualification,
  schoolYear,
  schoolDescription,
  //
  extras1,
  extras2,
  extras3,
  extras4,
  extras5,
}) => {
  return `
    <!doctype html>
    <html>
        <head>
            <!-- Font Awesome -->
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
            <!-- Bootstrap core CSS -->
            <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
            <!-- Material Design Bootstrap -->
            <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">

            <style>
              html{
                  zoom: 0.55;
              }    
              .rule{
                border-bottom: 1px solid black;
                width:80%;
              }
              .mobile{
                margin-top:-10px;
              }
              .email{
                margin-bottom: 0;    
              }
              body{
                font-family: 'Garamond';
              }
            </style>
        
        </head>
        <body>

        <div class="col-lg-8 mx-auto">
        <br/><br/>
        <div class="row text-center">
            <div class="col-lg-6">
                <h1><b>${name}</b></h1>
                <p class="lead email"><strong>Email:</strong> ${email}</p>
                <p class="lead"><strong>Contact:</strong> (+91)${phone}</p>
                <p class="lead"><strong>LinkedIn:</strong> ${linkedin}</p>
                <p class="lead"><strong>Github:</strong> ${github}</p>
            </div>    
        </div>
      
        <hr/>
        <div class="col-lg-8 mx-auto bg-light">
              <h3><b>Skills</b></h3>
        </div>
        <div class="col-lg-8 row mx-auto">
            <p class="lead"> ${skills}</p>
        </div>

        
        <div class="col-lg-8 mx-auto bg-light">
              <h3><b>Experience</b></h3>
        </div>
        <div class="col-lg-8 mx-auto">
              <p class="lead"><b>${experienceOrganization1}, ${experiencePosition1}</b> (${experienceDescription1})</p>
              <p class="mt-0">${experienceDuration1}</p>
        </div>
        <div class="col-lg-8 mx-auto">
              <p class="lead"><b>${experienceOrganization2}, ${experiencePosition2}</b> (${experienceDescription2})</p>
              <p class="mt-0">${experienceDuration2}</p>
        </div>

        
        <div class="col-lg-8 mx-auto bg-light">
              <h3><b>Projects</b></h3>
        </div>
        <div class="col-lg-8 mx-auto">
              <p class="lead"><b>${projectTitle1}</b>(${projectLink1})</p>
              <p class="mt-0">${projectDescription1}</p>
        </div>
        <div class="col-lg-8 mx-auto">
              <p class="lead"><b>${projectTitle2}</b> (${projectLink2})</p>
              <p class="mt-0">${projectDescription2}</p>
        </div>


        <div class="col-lg-8 mx-auto bg-light">
              <h3><b>Education</b></h3>
        </div>
        <div class="col-lg-8 mx-auto">
              <p class="lead"><b>${college}</b> (${collegeQualification}, ${collegeYear})</p>
              <p class="mt-0">${collegeDescription}</p>
        </div>
        <div class="col-lg-8 mx-auto">
              <p class="lead"><b>${school}</b> (${schoolQualification}, ${schoolYear})</p>
              <p class="mt-0">${schoolDescription}</p>
        </div>

        <div class="col-lg-8 mx-auto bg-light">
              <h3><b>Extra-Curriculars/Activities</b></h3>
        </div>
        <div class="col-lg-8 mx-auto">
              <ul>
                <li><p class="lead"><b>Languages: </b>${extras1} </p></li>
                <li><p class="lead"><b>Hobbies: </b>${extras2} </p></li>
                <li><p class="lead">${extras3} </p></li>
                <li><p class="lead">${extras4} </p></li>
                <li><p class="lead">${extras5} </p></li>
              </ul>
              
        </div>
        
            <!-- JQuery -->
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <!-- Bootstrap tooltips -->
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
            <!-- Bootstrap core JavaScript -->
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <!-- MDB core JavaScript -->
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
        </body>
    </html> 
  `;
};
