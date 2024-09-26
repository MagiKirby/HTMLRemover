            //======____THE ORIGINAL CODE____======\\




      // var config = {};
    
      // config.welcome = {
      //   set lastupdate (val) {app.storage.write("lastupdate", val)},
      //   get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}
      // };
      
      // config.addon = {
      //   set state (val) {app.storage.write("state", val)},
      //   get state () {return app.storage.read("state") !== undefined ? app.storage.read("state") : "ON"}
      // };









        //======____MY CODE____======\\



// Define the configuration object
var config = {};

// Define the welcome object with getter and setter methods for the lastupdate property
config.welcome = 
{

  set lastupdate(val) 
  {
    app.storage.write("lastupdate", val);
  },

  //  : means
  //  ? means
  //If it is undefined, the operator returns 0.
  //get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}


  // Define a getter method for the lastupdate property of the welcome object
  //defines a getter method for the lastupdate
  get lastupdate() 
  {
    if (app.storage.read("lastupdate") !== undefined) 
    {
      return app.storage.read("lastupdate");
    } 
    else 
    {
      return 0;
    }
  }


};



// Define the addon object with getter and setter methods for the state property
config.addon = 
{

  set state(val) 
  {
    app.storage.write("state", val);
  },


  get state() 
  {
    if (app.storage.read("state") !== undefined) 
    {
      return app.storage.read("state");
    } 
    else 
    {
      return "ON";
    }
  }


};