let form = document.querySelector("form .row");

let number = document.querySelector("[data-type=number]");

let numberValue = document.querySelector(".numbervalue");

let name = document.querySelector("[data-type=name]");

let nameValue = document.querySelector(".namevalue");

let mounth = document.querySelector("[data-type=mounth]");

let years = document.querySelector("[data-type=years]");

let dateMounth = document.querySelector(".datevalue .mounth");

let dateYear = document.querySelector(".datevalue .year");

let cvc = document.querySelector("[data-type=cvc]");

let cvcValue = document.querySelector(".cvcvalue");

let row = document.querySelector(".parent .container .row");

let parentForm = document.querySelector(".form");

let btn = document.querySelector("[value=Confirm]");

//cardname

name.addEventListener("blur", function () {
  var hasNumbers = /\d/g.test(name.value);
  let space = /\w \w/g.test(name.value);
  if (name.value === "") {
    let delError = document.querySelector("[data=numbers]");
    let delError2 = document.querySelector("[data=namespace]");
    if (document.body.contains(delError)) {
      delError.remove();
    }
    if (document.body.contains(delError2)) {
      delError2.remove();
    }
    let errorWhite = document.createElement("span");
    name.style.cssText = "border-color: hsl(0, 100%, 66%);";
    errorWhite.appendChild(document.createTextNode("Can't be blank"));
    errorWhite.classList.add("wrong");
    errorWhite.classList.add("position-1");
    errorWhite.setAttribute("data", "namespace");
    form.appendChild(errorWhite);
  } else {
    if (hasNumbers || !space) {
      let delError = document.querySelector("[data=namespace]");
      let delError2 = document.querySelector("[data=numbers]");
      if (document.body.contains(delError2)) {
        delError2.remove();
      }
      if (document.body.contains(delError)) {
        delError.remove();
      }
      name.style.cssText = "border-color: hsl(0, 100%, 66%);";
      let errorNumbers = document.createElement("span");
      errorNumbers.appendChild(
        document.createTextNode("Letters and spaces only")
      );
      errorNumbers.classList.add("wrong");
      errorNumbers.classList.add("position-1");
      errorNumbers.setAttribute("data", "numbers");
      form.appendChild(errorNumbers);
      nameValue.innerHTML = nameValue.textContent;
    } else {
      let delError = document.querySelector("[data=namespace]");
      let delError2 = document.querySelector("[data=numbers]");
      if (document.body.contains(delError2)) {
        delError2.remove();
      }
      if (document.body.contains(delError)) {
        delError.remove();
      }
      nameValue.innerHTML = name.value;
      name.style.cssText =
        "border-color: hsl(278, 94%, 30%) hsl(249, 99%, 64%);";
    }
  }
});

//cardnumber

number.addEventListener("blur", function () {
  var hasStrings = /[a-zA-Z]/g.test(number.value);
  let space = /\d{4} \d{4} \d{4} \d{4}/g.test(number.value);
  if (number.value === "") {
    let delError = document.querySelector("[data=strings]");
    let delError2 = document.querySelector("[data=numberspace]");
    let delError3 = document.querySelector("[data=smallorbig]");
    if (document.body.contains(delError)) {
      delError.remove();
    }
    if (document.body.contains(delError2)) {
      delError2.remove();
    }
    if (document.body.contains(delError3)) {
      delError3.remove();
    }
    number.style.cssText = "border-color: hsl(0, 100%, 66%);";
    let errorWhite = document.createElement("span");
    errorWhite.appendChild(document.createTextNode("Can't be blank"));
    errorWhite.classList.add("wrong");
    errorWhite.classList.add("position-2");
    errorWhite.setAttribute("data", "numberspace");
    form.appendChild(errorWhite);
  } else {
    if (hasStrings || !space) {
      let delError = document.querySelector("[data=strings]");
      let delError2 = document.querySelector("[data=numberspace]");
      let delError3 = document.querySelector("[data=smallorbig]");
      if (document.body.contains(delError)) {
        delError.remove();
      }
      if (document.body.contains(delError2)) {
        delError2.remove();
      }
      if (document.body.contains(delError3)) {
        delError3.remove();
      }
      number.style.cssText = "border-color: hsl(0, 100%, 66%);";
      numberValue.innerHTML = numberValue.textContent;
      let errorStrings = document.createElement("span");
      errorStrings.appendChild(
        document.createTextNode("Numbers and spaces only")
      );
      errorStrings.classList.add("wrong");
      errorStrings.classList.add("position-2");
      errorStrings.setAttribute("data", "strings");
      form.appendChild(errorStrings);
    } else {
      if (number.value.split("").length !== 19) {
        let delError = document.querySelector("[data=strings]");
        let delError2 = document.querySelector("[data=numberspace]");
        let delError3 = document.querySelector("[data=smallorbig]");
        if (document.body.contains(delError)) {
          delError.remove();
        }
        if (document.body.contains(delError2)) {
          delError2.remove();
        }
        if (document.body.contains(delError3)) {
          delError3.remove();
        }
        let errorSmBg = document.createElement("span");
        errorSmBg.appendChild(
          document.createTextNode("cardnumber must be 16 numbers")
        );
        errorSmBg.classList.add("wrong");
        errorSmBg.classList.add("position-2");
        errorSmBg.setAttribute("data", "smallorbig");
        form.appendChild(errorSmBg);
        number.style.cssText = "border-color: hsl(0, 100%, 66%);";
        numberValue.innerHTML = numberValue.textContent;
      } else {
        let delError = document.querySelector("[data=strings]");
        let delError2 = document.querySelector("[data=numberspace]");
        let delError3 = document.querySelector("[data=smallorbig]");
        if (document.body.contains(delError)) {
          delError.remove();
        }
        if (document.body.contains(delError2)) {
          delError2.remove();
        }
        if (document.body.contains(delError3)) {
          delError3.remove();
        }
        numberValue.innerHTML = number.value;
        number.style.cssText =
          "border-color: hsl(278, 94%, 30%) hsl(249, 99%, 64%);";
      }
    }
  }
});

//date mounth

mounth.addEventListener("blur", function () {
  if (mounth.value === "") {
    let delError = document.querySelector("[data=mounthspace]");
    let delError2 = document.querySelector("[data=mounthStrings]");
    let delError3 = document.querySelector("[data=mounthsmallorbig]");
    let delError4 = document.querySelector("[data=mounths12]");
    if (document.body.contains(delError)) {
      delError.remove();
    }
    if (document.body.contains(delError2)) {
      delError2.remove();
    }
    if (document.body.contains(delError3)) {
      delError3.remove();
    }
    if (document.body.contains(delError4)) {
      delError4.remove();
    }
    mounth.style.cssText = "border-color: hsl(0, 100%, 66%);";
    let errorWhite = document.createElement("span");
    errorWhite.appendChild(document.createTextNode("Can't be blank"));
    errorWhite.classList.add("wrong");
    errorWhite.classList.add("position-3");
    errorWhite.setAttribute("data", "mounthspace");
    form.appendChild(errorWhite);
  } else {
    var hasStrings = /[a-zA-Z]/g.test(mounth.value);
    if (hasStrings) {
      let delError = document.querySelector("[data=mounthspace]");
      let delError2 = document.querySelector("[data=mounthStrings]");
      let delError3 = document.querySelector("[data=mounthsmallorbig]");
      let delError4 = document.querySelector("[data=mounths12]");
      if (document.body.contains(delError)) {
        delError.remove();
      }
      if (document.body.contains(delError2)) {
        delError2.remove();
      }
      if (document.body.contains(delError3)) {
        delError3.remove();
      }
      if (document.body.contains(delError4)) {
        delError4.remove();
      }
      mounth.style.cssText = "border-color: hsl(0, 100%, 66%);";
      dateMounth.innerHTML = dateMounth.textContent;
      let errorStrings = document.createElement("span");
      errorStrings.appendChild(document.createTextNode("Numbers only"));
      errorStrings.classList.add("wrong");
      errorStrings.classList.add("position-3");
      errorStrings.setAttribute("data", "mounthStrings");
      form.appendChild(errorStrings);
    } else {
      if (mounth.value.split("").length !== 2) {
        let delError = document.querySelector("[data=mounthspace]");
        let delError2 = document.querySelector("[data=mounthStrings]");
        let delError3 = document.querySelector("[data=mounthsmallorbig]");
        let delError4 = document.querySelector("[data=mounths12]");
        if (document.body.contains(delError)) {
          delError.remove();
        }
        if (document.body.contains(delError2)) {
          delError2.remove();
        }
        if (document.body.contains(delError3)) {
          delError3.remove();
        }
        if (document.body.contains(delError4)) {
          delError4.remove();
        }
        let errorSmBg = document.createElement("span");
        errorSmBg.appendChild(document.createTextNode("2 numbers"));
        errorSmBg.classList.add("wrong");
        errorSmBg.classList.add("position-3");
        errorSmBg.setAttribute("data", "mounthsmallorbig");
        form.appendChild(errorSmBg);
        mounth.style.cssText = "border-color: hsl(0, 100%, 66%);";
        dateMounth.innerHTML = dateMounth.textContent;
      } else {
        if (mounth.value.split(" ") >= 13) {
          let delError = document.querySelector("[data=mounthspace]");
          let delError2 = document.querySelector("[data=mounthStrings]");
          let delError3 = document.querySelector("[data=mounthsmallorbig]");
          let delError4 = document.querySelector("[data=mounths12]");
          if (document.body.contains(delError)) {
            delError.remove();
          }
          if (document.body.contains(delError2)) {
            delError2.remove();
          }
          if (document.body.contains(delError3)) {
            delError3.remove();
          }
          if (document.body.contains(delError4)) {
            delError4.remove();
          }
          let errorSmBg = document.createElement("span");
          errorSmBg.appendChild(document.createTextNode("from 01 to 12"));
          errorSmBg.classList.add("wrong");
          errorSmBg.classList.add("position-3");
          errorSmBg.setAttribute("data", "mounths12");
          form.appendChild(errorSmBg);
          mounth.style.cssText = "border-color: hsl(0, 100%, 66%);";
        } else {
          let delError = document.querySelector("[data=mounthspace]");
          let delError2 = document.querySelector("[data=mounthStrings]");
          let delError3 = document.querySelector("[data=mounthsmallorbig]");
          let delError4 = document.querySelector("[data=mounths12]");
          if (document.body.contains(delError)) {
            delError.remove();
          }
          if (document.body.contains(delError2)) {
            delError2.remove();
          }
          if (document.body.contains(delError3)) {
            delError3.remove();
          }
          if (document.body.contains(delError4)) {
            delError4.remove();
          }
          dateMounth.innerHTML = mounth.value;
          mounth.style.cssText =
            "border-color: hsl(278, 94%, 30%) hsl(249, 99%, 64%);";
        }
      }
    }
  }
});

//date years

years.addEventListener("blur", function () {
  if (years.value === "") {
    let delError = document.querySelector("[data=yearspace]");
    let delError2 = document.querySelector("[data=yearStrings]");
    let delError3 = document.querySelector("[data=yearsmallorbig]");
    let delError4 = document.querySelector("[data=year23]");
    if (document.body.contains(delError)) {
      delError.remove();
    }
    if (document.body.contains(delError2)) {
      delError2.remove();
    }
    if (document.body.contains(delError3)) {
      delError3.remove();
    }
    if (document.body.contains(delError4)) {
      delError4.remove();
    }
    years.style.cssText = "border-color: hsl(0, 100%, 66%);";
    let errorWhite = document.createElement("span");
    errorWhite.appendChild(document.createTextNode("Can't be blank"));
    errorWhite.classList.add("wrong");
    errorWhite.classList.add("position-4");
    errorWhite.setAttribute("data", "yearspace");
    form.appendChild(errorWhite);
  } else {
    var hasStrings = /[a-zA-Z]/g.test(years.value);
    if (hasStrings) {
      let delError = document.querySelector("[data=yearspace]");
      let delError2 = document.querySelector("[data=yearStrings]");
      let delError3 = document.querySelector("[data=yearsmallorbig]");
      let delError4 = document.querySelector("[data=year23]");
      if (document.body.contains(delError)) {
        delError.remove();
      }
      if (document.body.contains(delError2)) {
        delError2.remove();
      }
      if (document.body.contains(delError3)) {
        delError3.remove();
      }
      if (document.body.contains(delError4)) {
        delError4.remove();
      }
      years.style.cssText = "border-color: hsl(0, 100%, 66%);";
      dateYear.innerHTML = dateYear.textContent;
      let errorStrings = document.createElement("span");
      errorStrings.appendChild(document.createTextNode("Numbers only"));
      errorStrings.classList.add("wrong");
      errorStrings.classList.add("position-4");
      errorStrings.setAttribute("data", "yearStrings");
      form.appendChild(errorStrings);
    } else {
      if (years.value.split("").length !== 2) {
        let delError = document.querySelector("[data=yearspace]");
        let delError2 = document.querySelector("[data=yearStrings]");
        let delError3 = document.querySelector("[data=yearsmallorbig]");
        let delError4 = document.querySelector("[data=year23]");
        if (document.body.contains(delError)) {
          delError.remove();
        }
        if (document.body.contains(delError2)) {
          delError2.remove();
        }
        if (document.body.contains(delError3)) {
          delError3.remove();
        }
        if (document.body.contains(delError4)) {
          delError4.remove();
        }
        let errorSmBg = document.createElement("span");
        errorSmBg.appendChild(document.createTextNode("2 numbers"));
        errorSmBg.classList.add("wrong");
        errorSmBg.classList.add("position-4");
        errorSmBg.setAttribute("data", "yearsmallorbig");
        form.appendChild(errorSmBg);
        years.style.cssText = "border-color: hsl(0, 100%, 66%);";
        dateYear.innerHTML = dateYear.textContent;
      } else {
        if (years.value.split(" ") <= 23) {
          let delError = document.querySelector("[data=yearspace]");
          let delError2 = document.querySelector("[data=yearStrings]");
          let delError3 = document.querySelector("[data=yearsmallorbig]");
          let delError4 = document.querySelector("[data=year23]");
          if (document.body.contains(delError)) {
            delError.remove();
          }
          if (document.body.contains(delError2)) {
            delError2.remove();
          }
          if (document.body.contains(delError3)) {
            delError3.remove();
          }
          if (document.body.contains(delError4)) {
            delError4.remove();
          }
          let errorSmBg = document.createElement("span");
          errorSmBg.appendChild(document.createTextNode("this card expired"));
          errorSmBg.classList.add("wrong");
          errorSmBg.classList.add("position-4");
          errorSmBg.setAttribute("data", "year23");
          form.appendChild(errorSmBg);
          years.style.cssText = "border-color: hsl(0, 100%, 66%);";
        } else {
          let delError = document.querySelector("[data=yearspace]");
          let delError2 = document.querySelector("[data=yearStrings]");
          let delError3 = document.querySelector("[data=yearsmallorbig]");
          let delError4 = document.querySelector("[data=year23]");
          if (document.body.contains(delError)) {
            delError.remove();
          }
          if (document.body.contains(delError2)) {
            delError2.remove();
          }
          if (document.body.contains(delError3)) {
            delError3.remove();
          }
          if (document.body.contains(delError4)) {
            delError4.remove();
          }
          dateYear.innerHTML = years.value;
          years.style.cssText =
            "border-color: hsl(278, 94%, 30%) hsl(249, 99%, 64%);";
        }
      }
    }
  }
});

//cvc

cvc.addEventListener("blur", function () {
  if (cvc.value === "") {
    let delError = document.querySelector("[data=cvcspace]");
    let delError2 = document.querySelector("[data=cvcStrings]");
    let delError3 = document.querySelector("[data=cvcsmallorbig]");
    if (document.body.contains(delError)) {
      delError.remove();
    }
    if (document.body.contains(delError2)) {
      delError2.remove();
    }
    if (document.body.contains(delError3)) {
      delError3.remove();
    }
    cvc.style.cssText = "border-color: hsl(0, 100%, 66%);";
    let errorWhite = document.createElement("span");
    errorWhite.appendChild(document.createTextNode("Can't be blank"));
    errorWhite.classList.add("wrong");
    errorWhite.classList.add("position-5");
    errorWhite.setAttribute("data", "cvcspace");
    form.appendChild(errorWhite);
  } else {
    var hasStrings = /[a-zA-Z]/g.test(cvc.value);
    if (hasStrings) {
      let delError = document.querySelector("[data=cvcspace]");
      let delError2 = document.querySelector("[data=cvcStrings]");
      let delError3 = document.querySelector("[data=cvcsmallorbig]");
      if (document.body.contains(delError)) {
        delError.remove();
      }
      if (document.body.contains(delError2)) {
        delError2.remove();
      }
      if (document.body.contains(delError3)) {
        delError3.remove();
      }
      cvc.style.cssText = "border-color: hsl(0, 100%, 66%);";
      cvcValue.innerHTML = cvcValue.textContent;
      let errorStrings = document.createElement("span");
      errorStrings.appendChild(document.createTextNode("Numbers only"));
      errorStrings.classList.add("wrong");
      errorStrings.classList.add("position-5");
      errorStrings.setAttribute("data", "cvcStrings");
      form.appendChild(errorStrings);
    } else {
      if (cvc.value.split("").length !== 3) {
        let delError = document.querySelector("[data=cvcspace]");
        let delError2 = document.querySelector("[data=cvcStrings]");
        let delError3 = document.querySelector("[data=cvcsmallorbig]");
        if (document.body.contains(delError)) {
          delError.remove();
        }
        if (document.body.contains(delError2)) {
          delError2.remove();
        }
        if (document.body.contains(delError3)) {
          delError3.remove();
        }
        let errorSmBg = document.createElement("span");
        errorSmBg.appendChild(document.createTextNode("3 numbers"));
        errorSmBg.classList.add("wrong");
        errorSmBg.classList.add("position-5");
        errorSmBg.setAttribute("data", "cvcsmallorbig");
        form.appendChild(errorSmBg);
        cvc.style.cssText = "border-color: hsl(0, 100%, 66%);";
        cvcValue.innerHTML = cvcValue.textContent;
      } else {
        let delError = document.querySelector("[data=cvcspace]");
        let delError2 = document.querySelector("[data=cvcStrings]");
        let delError3 = document.querySelector("[data=cvcsmallorbig]");
        if (document.body.contains(delError)) {
          delError.remove();
        }
        if (document.body.contains(delError2)) {
          delError2.remove();
        }
        if (document.body.contains(delError3)) {
          delError3.remove();
        }
        cvcValue.innerHTML = cvc.value;
        cvc.style.cssText =
          "border-color: hsl(278, 94%, 30%) hsl(249, 99%, 64%);";
      }
    }
  }
});

btn.addEventListener("click", function () {
  if (name.value === "") {
    let delError = document.querySelector("[data=namespace]");
    let delError2 = document.querySelector("[data=numbers]");
    if (document.body.contains(delError2)) {
      delError2.remove();
    }
    if (document.body.contains(delError)) {
      delError.remove();
    }
    let errorWhite = document.createElement("span");
    name.style.cssText = "border-color: hsl(0, 100%, 66%);";
    errorWhite.appendChild(document.createTextNode("Can't be blank"));
    errorWhite.classList.add("wrong");
    errorWhite.classList.add("position-1");
    errorWhite.setAttribute("data", "namespace");
    form.appendChild(errorWhite);
  } else if (number.value === "") {
    let delError = document.querySelector("[data=strings]");
    let delError2 = document.querySelector("[data=numberspace]");
    let delError3 = document.querySelector("[data=smallorbig]");
    if (document.body.contains(delError)) {
      delError.remove();
    }
    if (document.body.contains(delError2)) {
      delError2.remove();
    }
    if (document.body.contains(delError3)) {
      delError3.remove();
    }
    number.style.cssText = "border-color: hsl(0, 100%, 66%);";
    let errorWhite = document.createElement("span");
    errorWhite.appendChild(document.createTextNode("Can't be blank"));
    errorWhite.classList.add("wrong");
    errorWhite.classList.add("position-2");
    errorWhite.setAttribute("data", "numberspace");
    form.appendChild(errorWhite);
  } else if (mounth.value === "") {
    let delError = document.querySelector("[data=mounthspace]");
    let delError2 = document.querySelector("[data=mounthStrings]");
    let delError3 = document.querySelector("[data=mounthsmallorbig]");
    let delError4 = document.querySelector("[data=mounths12]");
    if (document.body.contains(delError)) {
      delError.remove();
    }
    if (document.body.contains(delError2)) {
      delError2.remove();
    }
    if (document.body.contains(delError3)) {
      delError3.remove();
    }
    if (document.body.contains(delError4)) {
      delError4.remove();
    }
    mounth.style.cssText = "border-color: hsl(0, 100%, 66%);";
    let errorWhite = document.createElement("span");
    errorWhite.appendChild(document.createTextNode("Can't be blank"));
    errorWhite.classList.add("wrong");
    errorWhite.classList.add("position-3");
    errorWhite.setAttribute("data", "mounthspace");
    form.appendChild(errorWhite);
  } else if (years.value === "") {
    let delError = document.querySelector("[data=yearspace]");
    let delError2 = document.querySelector("[data=yearStrings]");
    let delError3 = document.querySelector("[data=yearsmallorbig]");
    let delError4 = document.querySelector("[data=year23]");
    if (document.body.contains(delError)) {
      delError.remove();
    }
    if (document.body.contains(delError2)) {
      delError2.remove();
    }
    if (document.body.contains(delError3)) {
      delError3.remove();
    }
    if (document.body.contains(delError4)) {
      delError4.remove();
    }
    years.style.cssText = "border-color: hsl(0, 100%, 66%);";
    let errorWhite = document.createElement("span");
    errorWhite.appendChild(document.createTextNode("Can't be blank"));
    errorWhite.classList.add("wrong");
    errorWhite.classList.add("position-4");
    errorWhite.setAttribute("data", "yearspace");
    form.appendChild(errorWhite);
  } else if (cvc.value === "") {
    let delError = document.querySelector("[data=cvcspace]");
    let delError2 = document.querySelector("[data=cvcStrings]");
    let delError3 = document.querySelector("[data=cvcsmallorbig]");
    if (document.body.contains(delError)) {
      delError.remove();
    }
    if (document.body.contains(delError2)) {
      delError2.remove();
    }
    if (document.body.contains(delError3)) {
      delError3.remove();
    }
    cvc.style.cssText = "border-color: hsl(0, 100%, 66%);";
    let errorWhite = document.createElement("span");
    errorWhite.appendChild(document.createTextNode("Can't be blank"));
    errorWhite.classList.add("wrong");
    errorWhite.classList.add("position-5");
    errorWhite.setAttribute("data", "cvcspace");
    form.appendChild(errorWhite);
  } else if (form.contains(document.querySelector(".wrong"))) {
    return false;
  } else {
    let formDis = document.querySelector("form");
    formDis.style.cssText = "display: none;";
    let confirm = document.querySelector(".confirm");
    confirm.style.cssText = "display: flex";
  }
});
