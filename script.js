const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".navigation");
menuButton?.addEventListener("click",()=>{const isOpen=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(isOpen));menuButton.setAttribute("aria-label",isOpen?"Close navigation":"Open navigation")});
nav?.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuButton?.setAttribute("aria-expanded","false")}));
document.getElementById("year").textContent=new Date().getFullYear();

document.querySelectorAll(".package-link").forEach(link=>link.addEventListener("click",()=>{const plan=document.getElementById("plan");if(plan)plan.value=link.dataset.plan}));

const form=document.getElementById("bookingForm");
form?.addEventListener("submit",event=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  const data=new FormData(form);
  const text=[
    "GCX CREATIVES — PROJECT ENQUIRY",
    `Name: ${data.get("name")}`,
    `Business / Brand: ${data.get("brand")||"Not provided"}`,
    `Email: ${data.get("email")}`,
    `WhatsApp: ${data.get("phone")}`,
    `Industry / Niche: ${data.get("industry")}`,
    `Interested Service: ${data.get("plan")}`,
    `Project Details: ${data.get("message")}`
  ].join("\\n");
  const encoded=encodeURIComponent(text);
  document.getElementById("sendEmail").href=`mailto:gcxcreatives@gmail.com?subject=${encodeURIComponent("New GCX Creatives Project Enquiry")}&body=${encoded}`;
  document.getElementById("sendWhatsapp").href=`https://wa.me/917670878399?text=${encoded}`;
  document.getElementById("enquiryPreview").textContent=text;
  document.getElementById("sendOptions").hidden=false;
  document.getElementById("sendOptions").scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"nearest"});
});
