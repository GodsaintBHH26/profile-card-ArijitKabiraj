import "./style.css";

document.querySelector("#app").innerHTML = `
<div class="bg-white w-80 h-2/3 flex text-black  justify-center align-center m-20 rounded-3xl overflow-hidden flex-col ">

<div class="bg-[url('/img/wave.png')] w-full h-60 bg-cover flex bg-top justify-center items-center -translate-y-8">

<img src="/img/Profile-pic.jpg" class="h-24 w-24 rounded-full shadow-normal">
</div>

<div class="-translate-y-20 flex flex-col">
<h2 class="font-semibold text-2xl tracking-widest text-center">Arijit Kabiraj</h2>
<p class="text-slate-500 text-xs font-semibold justify-center flex">@godsaintbhh26</p>

<div class="translate-y-6">

<div class="flex gap-2 justify-center"> 
<a href="https://www.facebook.com/arijit.kabiraj.129/" target=blank><i class="ri-facebook-circle-fill text-xl"></i><a/>

<a href="https://www.linkedin.com/in/arijit-kabiraj-2b7230255/" target=blank><i class="ri-linkedin-box-fill text-xl"></i><a/>

<a href="https://x.com/GamingBhh"><i class="ri-twitter-fill text-xl" target=blank></i><a/>

<a href="https://www.instagram.com/godsaintbhh265/" target=blank><i class="ri-instagram-fill text-xl"></i><a/>

<a href="https://www.youtube.com/@godsaintbhh265" target=blank><i class="ri-youtube-fill text-xl"></i><a/>
</div>

<div class="flex justify-center translate-y-4">
<p class="text-center w-60 text-sm font-semibold text-slate-700">Creating and enovating the new me by going through all these challenges everyday. Gaming enthusiast.</p>
</div>

<div class="translate-y-14 flex gap-10">
<a class="border-slate-400 border-2 rounded-2xl px-6 py-0.5 hover:bg-pink-500 hover:text-white hover:border-pink-500 font-medium text-slate-500">Follow</a>
<a class="border-slate-400 border-2 rounded-2xl px-6 py-0.5  hover:bg-pink-500 hover:text-white hover:border-pink-500 font-medium text-slate-500">Message</a>
</div>

</div>

</div>

`;
