const changeType = () => {
    const password = document.getElementById("password");
    const box = document.getElementById(`box`);
    box.checked ? (password.type = `text`) : (password.type = `password`);
  };
  
 