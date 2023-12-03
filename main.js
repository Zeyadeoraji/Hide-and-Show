let Password = document.getElementById("Password");
      let eyeicon = document.getElementById("eyeicon");
      // eyeicon.onclick = function () {
      //   if (Password.type == "Password") {
      //     Password.type = "text";
      //   } else {
      //     Password.type = "Password";
      //   }
      // };
      // function eyeicon() {
      //   if (Password.type == Password) {
      //     Password.type = "text";
      //   } else {
      //     Password.type = "Password";
      //   }
      // }
      eyeicon.onclick = function () {
        console.log(Password.type);
        if (Password.type === "password") {
          Password.type = "text";
          eyeicon.src = "images/eye-open.png";
        } else {
          Password.type = "Password";
          eyeicon.src = "images/eye-close.png";
        }
      };git