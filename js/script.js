const paginas=[["index.html","Início"],["conteudos.html","Conteúdos"],["exercicios.html","Exercícios"]];
const atual=location.pathname.split("/").pop()||"index.html";
document.getElementById("nav").innerHTML=`<nav class="navbar navbar-expand-md navbar-dark"><div class="container">
<a class="navbar-brand" href="index.html"><i class="bi bi-file-earmark-text"></i> Pacote Office</a>
<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu" aria-label="Abrir menu"><span class="navbar-toggler-icon"></span></button>
<div class="collapse navbar-collapse" id="menu"><ul class="navbar-nav ms-auto">${paginas.map(p=>`<li class="nav-item"><a class="nav-link ${p[0]==atual?"active":""}" href="${p[0]}">${p[1]}</a></li>`).join("")}</ul></div></div></nav>`;
document.getElementById("rodape").innerHTML=`<footer class="py-4 mt-5"><div class="container">Curso básico de Excel, Word e PowerPoint</div></footer>`;
const f=document.getElementById("quiz");
if(f){f.addEventListener("submit",e=>{e.preventDefault();let n=0;const qs=f.querySelectorAll("[data-gab]");
qs.forEach(q=>{const r=q.querySelector("input:checked"),fb=q.querySelector(".fb");
if(r&&r.value===q.dataset.gab){n++;fb.className="fb mt-2 fb-ok";fb.textContent="Correto!"}
else{fb.className="fb mt-2 fb-erro";fb.textContent=(r?"Incorreto.":"Sem resposta.")+" Resposta: "+q.dataset.gab.toUpperCase()}});
const res=document.getElementById("resultado");res.className="alert alert-"+(n>=3?"success":"warning")+" mt-3";
res.textContent=`Você acertou ${n} de ${qs.length} questões.`});
f.addEventListener("reset",()=>{f.querySelectorAll(".fb").forEach(x=>x.textContent="");document.getElementById("resultado").className="d-none"})}
