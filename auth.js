async function signup(){
  await fetch("http://localhost:4000/signup",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({email:email.value,password:password.value})
  });
  alert("Signup complete");
}
async function login(){
  const r = await fetch("http://localhost:4000/login",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({email:email.value,password:password.value})
  });
  const d = await r.json();
  if(d.token){
    localStorage.setItem("token",d.token);
    location.href="dashboard.html";
  } else alert("Login failed");
}