var m=Object.defineProperty;var u=(i,t,e)=>t in i?m(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var o=(i,t,e)=>(u(i,typeof t!="symbol"?t+"":t,e),e);import"./modulepreload-polyfill.c7c6310f.js";import{E as c}from"./entidade.model.11441dea.js";import{C as d}from"./contato.repository.ls.d2738a02.js";import"./guid.model.a7d4f54b.js";class f extends c{constructor(e,r,s,l,n,a){super();o(this,"nome");o(this,"email");o(this,"telefone");o(this,"empresa");o(this,"cargo");a&&(this.id=a),this.nome=e,this.email=r,this.telefone=s,this.empresa=l,this.cargo=n}}class h{constructor(t,e){o(this,"txtNome");o(this,"txtEmail");o(this,"txtTelefone");o(this,"txtEmpresa");o(this,"txtCargo");o(this,"btnSalvar");o(this,"idSelecionado");if(this.repositorioContato=t,this.configurarElementos(),e){this.idSelecionado=e;const r=this.repositorioContato.selecionarPorId(e);r&&this.preencherFormulario(r)}}gravarRegistros(){const t=this.obterDadosFormularios();if(this.validarNomeContato(t.nome)){alert("O campo nome n\xE3o pode ficar vazio!");return}if(this.validarEmailContato(t.email)){alert("E-mail inv\xE1lido ou campo em branco!");return}if(this.validarTelefoneContato(t.telefone)){alert("Telefone inv\xE1lido ou em branco!");return}if(this.validarEmpresaContato(t.empresa)){alert("O campo empresa n\xE3o pode ficar em branco!");return}if(this.validarCargoContato(t.cargo)){alert("O campo cargo n\xE3o pode ficar vazio!");return}if(this.contatoExistente(t)){alert("Contato existente!");return}t.id?this.repositorioContato.editar(t.id,t):this.repositorioContato.inserir(t),window.location.href="contato.list.html"}preencherFormulario(t){this.txtNome.value=t.nome,this.txtEmail.value=t.email,this.txtTelefone.value=t.telefone,this.txtEmpresa.value=t.empresa,this.txtCargo.value=t.cargo}obterDadosFormularios(){const t=this.txtNome.value,e=this.txtEmail.value,r=this.txtTelefone.value,s=this.txtEmpresa.value,l=this.txtCargo.value,n=new f(t,e,r,s,l);return n.id=this.idSelecionado,n}configurarElementos(){this.txtNome=document.getElementById("txtNome"),this.txtEmail=document.getElementById("txtEmail"),this.txtTelefone=document.getElementById("txtTelefone"),this.txtEmpresa=document.getElementById("txtEmpresa"),this.txtCargo=document.getElementById("txtCargo"),this.btnSalvar=document.getElementById("btnSalvar"),this.btnSalvar.addEventListener("click",t=>this.gravarRegistros())}contatoExistente(t){const e=this.repositorioContato.selecionarTodos();let r="",s="",l="",n=!1;return e.forEach(a=>{r=a.nome,s=a.email,l=a.telefone,(a.id!==t.id&&r===t.nome||a.id!==t.id&&s===t.email||a.id!==t.id&&l===t.telefone)&&(n=!0)}),n}validarNomeContato(t){return t===""}validarEmailContato(t){return t===""||!t.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}validarTelefoneContato(t){return t===""||!t.match(/\d+/g)}validarEmpresaContato(t){return t===""}validarCargoContato(t){return t===""}}const x=new URLSearchParams(window.location.search),E=x.get("id");new h(new d,E);