const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

var totalNames = [];
var totalMob = [];
var totalVt = [];
var totalVn = [];
var totalHour = [];
var totalFare = [];
var totalReg=[];

app.post("/", function (req, res) {
  var total = 0;
  var reg = "";

  var name = req.body.name;
  var mob = req.body.mob;
  var vt = req.body.vt;
  var vn = req.body.vn;
  var hour = req.body.hour;

  totalNames.push(name);
  totalMob.push(mob);
  if(vt==2)
  {totalVt.push("2 Wheeler");vt="2 Wheeler"}
  else
  {totalVt.push("4 Wheeler");vt="4 Wheeler"}
  totalHour.push(hour);
  

  if (vt == 2) var base = 30 * hour;
  else var base = 50 * hour;

  switch (vn) {
    case "Activa":
      total = base + 20;
      reg = "KA6222";
      totalReg.push(reg);
      totalFare.push(total);
      totalVn.push("Activa");
      break;

    case "Yamaha":
      total = base + 30;
      reg = "KA6224";
      totalReg.push(reg);
      totalFare.push(total);
      totalVn.push("Yamaha");
      break;

    case "Rajdoot":
      total = base + 40;
      reg = "KA6272";
      totalReg.push(reg);
      totalFare.push(total);
      totalVn.push("Rajdoot");
      break;

    case "Suzuki Access":
      total = base + 30;
      reg = "KA6268";
      totalReg.push(reg);
      totalFare.push(total);
      totalVn.push("Suzuki Access");
      break;

    case "Jupiter":
      total = base + 35;
      reg = "KA6294";
      totalReg.push(reg);
      totalFare.push(total);
      totalVn.push("Jupiter");
      break;

    case "Swift Dezire":
      total = base + 50;
      reg = "KA6248";
      totalReg.push(reg);
      totalFare.push(total);
      totalVn.push("Swift Dezire");
      break;

    case "Duster":
      total = base + 80;
      reg = "KA6220";
      totalReg.push(reg);
      totalFare.push(total);
      totalVn.push("Duster");
      break;

    case "Maruti 800":
      total = base + 40;
      reg = "KA6228";
      totalReg.push(reg);
      totalFare.push(total);
      totalVn.push("Maruti 800");
      break;

    case "Wagon R":
      total = base + 45;
      reg = "KA6235";
      totalReg.push(reg);
      totalFare.push(total);
      totalVn.push("Wagon R");
      break;

    case "Audi":
      total = base + 100;
      reg = "KA6242";
      totalReg.push(reg);
      totalFare.push(total);
      totalVn.push("Audi");
      break;
  }

  res.render("fare",{
    name:name,
    mob:mob,
    vt:vt,
    reg:reg,
    vn:vn,
    hour:hour,
    total:total
  });
});

app.post("/admin", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(totalVn);

  if (username == "admin" && password == "adminx")
    res.render("admin", {
      n: totalNames.length,
      totalNames: totalNames,
      totalMob: totalMob,
      totalReg: totalReg,
      totalVt: totalVt,
      totalVn: totalVn,
      totalHour: totalHour,
      totalFare: totalFare,
    });
  else res.render("incorrect");
});

app.listen(3000);
