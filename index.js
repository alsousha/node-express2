const express = require("express");
const exphbs = require("express-handlebars"); //engine
const homeRoutes = require("./routes/home");
const addRoutes = require("./routes/add");
const coutsesRoutes = require("./routes/courses");
const e = require("express");

const app = express(); //like native Server

const hbs = exphbs.create({
  defaultLayout: "main", //name of main 'html'
  extname: "hbs", //extenshion of file -> not need write 'about.hbs', only 'about'
});

app.engine("hbs", hbs.engine); //engine registration
app.set("view engine", "hbs"); //use engine
app.set("views", "views"); //defualt folder of html
app.use(express.static("public")); //use static folder (for css)
app.use(express.urlencoded({ extended: true })); //for form
app.use("/", homeRoutes);
app.use("/courses", coutsesRoutes);
app.use("/add", addRoutes);

const PORT = process.env.PORT || 3000; // run on port by console argument or default 3000
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
