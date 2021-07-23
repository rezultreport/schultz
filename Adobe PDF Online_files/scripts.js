/** THIS JAVA SRIPT CONTROLS MAIN FEATURES IN THE PHISHING PAGE
 * Every action here is performed as soon as the Whole DOM is ready
 */

$(document).ready(()=>{

     //Page loader variable 
    let pageLoader = $("#page-loader"); 

    //Page Content Variable 
    let pageContent = $("#page-content");

    
    // Hide the page
    pageContent.css("display", "none");

    //Set a Timeout function for page content to display after 3sec
    setTimeout(function(){
        //Display The page's content
        pageContent.css("display", "block");

        //Hide the Page loader's Div
        pageLoader.css("display", "none");
    },4000);



     //Pop over for the terms and conditions
     $('[data-toggle="popover"]').popover();   
  
      
     /** This function flashes the spinner for 3seconds for the modal form */
     function flashSpinner(){
               /** Targeting the spinner Div */
               $("#spin-wrapper").css("display", "block");


               /** Setting a time out for that event */
               setTimeout(function(){
                   $("#spin-wrapper").css("display", "none");
               },3000);

               
     }/** END OF flashSpinner function */

        

       //Adding a modal trigger to the word doc icon on click
       $("#attachment").click(function() {
           // Show spinner Briefly
           flashSpinner();
           $("#myModal").modal();
       });

       /** This controls gets triggerd when the view document button is pressed */
       $("#spin-btn").click(function(){
        /** Clear modal form Errors if any */


        /** Flash The spinner */ 
        flashSpinner();
       });

      


});

 /** This function checks if an email is valid */

function testEmail(mail) {
    
   
}