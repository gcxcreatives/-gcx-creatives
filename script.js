const menu=document.querySelector(".menu"),nav=document.querySelector(".nav");
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"Close menu":"Open menu")});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu?.setAttribute("aria-expanded","false")}));
document.getElementById("year").textContent=new Date().getFullYear();
document.querySelectorAll(".package").forEach(a=>a.addEventListener("click",()=>{document.getElementById("plan").value=a.dataset.plan}));
const form=document.getElementById("bookingForm");
form?.addEventListener("submit",e=>{
 e.preventDefault();
 if(!form.reportValidity()) return;
 const d=new FormData(form);
 const message=[
  "GCX CREATIVES — NEW PROJECT ENQUIRY",
  `Name: ${d.get("name")}`,
  `Business / Brand: ${d.get("brand")||"Not provided"}`,
  `Email: ${d.get("email")}`,
  `WhatsApp: ${d.get("phone")}`,
  `Industry: ${d.get("industry")}`,
  `Interested in: ${d.get("plan")}`,
  `Project details: ${d.get("message")}`
 ].join("\\n");
 const subject=encodeURIComponent("New GCX Creatives Project Enquiry");
 const body=encodeURIComponent(message);
 document.getElementById("emailAction").href=`mailto:gcxcreatives@gmail.com?subject=${subject}&body=${body}`;
 document.getElementById("whatsappAction").href=`https://wa.me/917670878399?text=${body}`;
 document.getElementById("preparedMessage").textContent=message;
 document.getElementById("contactOptions").hidden=false;
 document.getElementById("contactOptions").scrollIntoView({behavior:"smooth",block:"nearest"});
});
