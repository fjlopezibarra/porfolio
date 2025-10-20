import '../../StyleReloj.css'

class MiReloj {
	constructor() {

		document.body.style.backgroundImage = "url(recursosreloj/fondo.jpg)"
		document.body.style.backgroundSize = "cover"
		document.body.onwheel = escalar

		let colo = [255, 255, 255, 255, 0, 0, 0]

		let guardah
		let guardam
		let guardas
		let guardadia
		let hora
		let h
		let m
		let s
		let dia
		let valorescala
		let rmes
		let rreloj
		let miformulario
		let traspa1
		let traspa2
		let traspa3
		let rana
		let etidia
		let aguhs
		let agums
		let aguss
		let aguh
		let agum
		let agus
		let boton
		let pfecha
		let etifecha1
		let etifecha4
		let etifecha3
		let cristalfecha
		let pcolor
		let digito
		let sombra
		let cristal
		let pconfi
		let eti
		let px
		let py
		let c1
		let confi
		let selereloj
		let guarda
		let psele
		let selemes
		let seleano
		let pcale
		let titulorotulo
		let rotulo
		let objdia
		let objdiacristal
		let flecha
		let rano
		let retro = 0
		let angconfi
		let wer
		let controlang
		let controlconfi = 0
		let controlcalendario = 0
		let tcale;
		let tcale1;
		let ang = 0;
		let mueve = 0;
		let bSalir;
		let tiempo


		cargarobjetos()
		inicializarvariables()
		iniciarprograma()

		function cargarobjetos() {
			miformulario = document.createElement("form")
			miformulario.type = "form"
			miformulario.name = "miformulario"
			miformulario.style.position = "absolute"
			miformulario.style.top = "0px"
			miformulario.style.left = "0px"
			miformulario.style.width = "100%"
			miformulario.style.height = "100%"
			document.body.appendChild(miformulario)

			bSalir = document.createElement("button");
			bSalir.type = "button";
			bSalir.id = "bSalir";
			bSalir.className = "bSalir";
			bSalir.textContent = "Salir";
			bSalir.onclick = salirReloj;
			miformulario.appendChild(bSalir);

			traspa1 = document.createElement("form")
			traspa1.type = "form"
			traspa1.className = "traspa"
			traspa1.style.position = "absolute"
			traspa1.style.top = "10px"
			traspa1.style.left = "10px"
			traspa1.style.width = "502px"
			traspa1.style.height = "502px"
			miformulario.appendChild(traspa1)

			traspa2 = document.createElement("form")
			traspa2.type = "form"
			traspa2.className = "traspa"
			traspa2.style.position = "absolute"
			traspa2.style.top = "10px"
			traspa2.style.left = "511px"
			traspa2.style.width = "622px"
			traspa2.style.height = "502px"
			miformulario.appendChild(traspa2)

			traspa3 = document.createElement("form")
			traspa3.type = "form"
			traspa3.className = "traspa"
			traspa3.style.position = "absolute"
			traspa3.style.top = "10px"
			traspa3.style.left = "511px"
			traspa3.style.width = "622px"
			traspa3.style.height = "502px"
			traspa3.style.transform = "rotate3d(1,1,1,121deg)"
			traspa3.style.visibility = "hidden"
			miformulario.appendChild(traspa3)

			// objetos reloj analogico.........................................

			rana = new Image()
			rana.id = "rana"
			rana.style.position = "absolute"
			rana.style.top = "0px"
			rana.style.left = "0px"
			rana.style.width = "500px"
			rana.style.height = "500px"
			traspa1.appendChild(rana)

			etidia = document.createElement("text")
			etidia.id = "etidia"
			etidia.type = "text"
			etidia.style.position = "absolute"
			etidia.style.left = "225px"
			etidia.style.top = "165px"
			etidia.style.width = "45px"
			etidia.style.height = "45px"
			etidia.innerHTML = "00"
			traspa1.appendChild(etidia)

			aguhs = new Image()
			aguhs.className = "sombraaguja"
			aguhs.style.position = "absolute"
			aguhs.style.top = "136px"
			aguhs.style.left = "253px"
			aguhs.style.transformOrigin = "6px 130px"
			aguhs.src = "recursosreloj/aguhs.png"
			traspa1.appendChild(aguhs)

			agums = new Image()
			agums.className = "sombraaguja"
			agums.style.position = "absolute"
			agums.style.top = "119px"
			agums.style.left = "254px"
			agums.style.transformOrigin = "5px 147px"
			agums.src = "recursosreloj/agums.png"
			traspa1.appendChild(agums)

			aguss = new Image()
			aguss.className = "sombraaguja"
			aguss.style.position = "absolute"
			aguss.style.top = "110px"
			aguss.style.left = "255px"
			aguss.style.transformOrigin = "4px 156px"
			aguss.src = "recursosreloj/aguss.png"
			traspa1.appendChild(aguss)

			aguh = new Image()
			aguh.style.position = "absolute"
			aguh.style.top = "126px"
			aguh.style.left = "243px"
			aguh.style.transformOrigin = "6px 130px"
			aguh.src = "recursosreloj/aguh.png"
			traspa1.appendChild(aguh)

			agum = new Image()
			agum.style.position = "absolute"
			agum.style.top = "109px"
			agum.style.left = "244px"
			agum.style.transformOrigin = "5px 147px"
			agum.src = "recursosreloj/agum.png"
			traspa1.appendChild(agum)

			agus = new Image()
			agus.style.position = "absolute"
			agus.style.top = "100px"
			agus.style.left = "245px"
			agus.style.transformOrigin = "4px 156px"
			agus.src = "recursosreloj/agus.png"
			traspa1.appendChild(agus)

			boton = new Image()
			boton.style.position = "absolute"
			boton.style.top = "251px"
			boton.style.left = "243px"
			boton.src = "recursosreloj/boton.png"
			traspa1.appendChild(boton)

			// objetos fecha.....................................................

			pfecha = document.createElement("form")
			pfecha.type = "form"
			pfecha.name = "pfecha"
			pfecha.id = "pfecha"
			pfecha.style.position = "absolute"
			pfecha.style.top = "5px"
			pfecha.style.left = "15px"
			pfecha.style.width = "590px"
			pfecha.style.height = "155px"
			pfecha.style.overflow = "hidden"
			traspa2.appendChild(pfecha)

			etifecha1 = document.createElement("text")
			etifecha1.id = "etifecha1"
			etifecha1.className = "etifecha"
			etifecha1.type = "text"
			etifecha1.style.position = "absolute"
			etifecha1.style.left = "-15px"
			etifecha1.style.top = "-8px"
			etifecha1.style.width = "590px"
			etifecha1.style.height = "60px"
			etifecha1.innerHTML = ""
			pfecha.appendChild(etifecha1)

			etifecha4 = document.createElement("text")
			etifecha4.id = "etifecha4"
			etifecha4.className = "etifechas"
			etifecha4.type = "text"
			etifecha4.style.position = "absolute"
			etifecha4.style.left = "-15px"
			etifecha4.style.top = "93px"
			etifecha4.style.width = "590px"
			etifecha4.style.height = "60px"
			etifecha4.innerHTML = ""
			pfecha.appendChild(etifecha4)

			etifecha3 = document.createElement("text")
			etifecha3.id = "etifecha3"
			etifecha3.className = "etifecha"
			etifecha3.type = "text"
			etifecha3.style.position = "absolute"
			etifecha3.style.left = "-15px"
			etifecha3.style.top = "42px"
			etifecha3.style.width = "590px"
			etifecha3.style.height = "60px"
			etifecha3.innerHTML = ""
			pfecha.appendChild(etifecha3)

			cristalfecha = document.createElement("form")
			cristalfecha.type = "form"
			cristalfecha.onclick = iniciarcalendario
			cristalfecha.name = "cristalfecha"
			cristalfecha.id = "cristalfecha"
			cristalfecha.style.border = "0px solid #000"
			cristalfecha.style.position = "absolute"
			cristalfecha.style.top = "0px"
			cristalfecha.style.left = "0px"
			cristalfecha.style.width = "560px"
			cristalfecha.style.height = "125px"
			pfecha.appendChild(cristalfecha)

			//objetos reloj digital -----------------------------------------

			pcolor = document.createElement("form")
			pcolor.type = "form"
			pcolor.name = "pcolor"
			pcolor.id = "pcolor"
			pcolor.className = "pcolor"
			pcolor.style.position = "absolute"
			pcolor.style.top = "168px"
			pcolor.style.left = "15px"
			pcolor.style.width = "590px"
			pcolor.style.height = "155px"
			traspa2.appendChild(pcolor)

			digito = new Array(10)
			for (let i = 0; i < 10; i++) {
				digito[i] = new Image()
				digito[i].id = "d" + i
				digito[i].style.position = "flex"
				digito[i].style.width = "75px"
				digito[i].style.height = "125px"
				digito[i].src = "recursosreloj/d0.png"
				if (i == 0 || i == 9) {
					digito[i].style.width = "20px"
					digito[i].style.height = "125px"
					digito[i].src = "recursosreloj/d11.png"
				}
				if (i == 3 || i == 6) {
					digito[i].style.width = "35px"
					digito[i].style.height = "125px"
					digito[i].src = "recursosreloj/d10.png"
				}
				pcolor.appendChild(digito[i])
			}

			sombra = document.createElement("form")
			sombra.type = "form"
			sombra.name = "sombra"
			sombra.id = "sombra"
			sombra.style.border = "0px solid #000"
			sombra.style.position = "absolute"
			sombra.style.top = "87px"
			sombra.style.left = "0px"
			sombra.style.width = "560px"
			sombra.style.height = "38px"
			pcolor.appendChild(sombra)

			cristal = document.createElement("form")
			cristal.type = "form"
			cristal.onclick = iniciarcalendario
			cristal.name = "cristal"
			cristal.id = "cristal"
			cristal.style.border = "0px solid #000"
			cristal.style.position = "absolute"
			cristal.style.top = "0px"
			cristal.style.left = "0px"
			cristal.style.width = "560px"
			cristal.style.height = "125px"
			pcolor.appendChild(cristal)

			pconfi = document.createElement("form")
			pconfi.type = "form"
			pconfi.name = "pconfi"
			pconfi.id = "pconfi"
			pconfi.style.transformOrigin = "0px 0px"
			pconfi.style.transform = "rotate3d(1,0,0,-90deg)"
			pconfi.style.visibility = "hidden"
			pconfi.style.position = "absolute"
			pconfi.style.top = "161px"
			pconfi.style.left = "-15px"
			pconfi.style.width = "590px"
			pconfi.style.height = "155px"
			pcolor.appendChild(pconfi)

			eti = new Array(2)
			for (let i = 0; i < 2; i++) {
				eti[i] = document.createElement("text")
				eti[i].type = "text"
				eti[i].className = "eti"
				eti[i].style.position = "absolute"
				eti[i].style.width = "160px"
				eti[i].style.left = "20px"
				eti[i].style.height = "20px"
				if (i == 0) {
					eti[i].innerHTML = "Color digitos (RGB):"
					eti[i].style.top = "18px"
				}
				if (i == 1) {
					eti[i].innerHTML = "Color Ambiente (RGB):"
					eti[i].style.top = "58px"
				}
				pconfi.appendChild(eti[i])
			}

			px = 190
			py = 18
			c1 = new Array(6)
			for (let i = 0; i < 6; i++) {
				c1[i] = document.createElement("input")
				c1[i].type = "text"
				c1[i].onchange = cambiarcolor
				c1[i].className = "c1"
				c1[i].id = "c1" + i
				c1[i].value = ""
				c1[i].style.position = "absolute"
				c1[i].style.width = "40px"
				c1[i].style.left = px + "px"
				c1[i].style.top = py + "px"
				px = px + 60
				if (i == 2) { px = 190; py = 58 }
				pconfi.appendChild(c1[i])
			}

			confi = new Image()
			confi.onclick = abrirconfi
			confi.style.position = "absolute"
			confi.style.top = "125px"
			confi.style.left = "270px"
			confi.style.width = "15px"
			confi.style.height = "15px"
			confi.src = "recursosreloj/confi.png"
			pcolor.appendChild(confi)

			selereloj = document.createElement('select');
			//selereloj.type = 'select';
			selereloj.id = "selereloj"
			selereloj.className = "selereloj"
			selereloj.onchange = cambiarrelojanalogico
			selereloj.selected = "Elige opcion:"
			selereloj.style.width = "170px"
			selereloj.style.position = "absolute"
			selereloj.style.top = "17px"
			selereloj.style.left = "370px"
			pconfi.appendChild(selereloj)

			guarda = new Image()
			guarda.title = "Guardar configuracion"
			guarda.onmousedown = guardarcambioicono
			guarda.onmouseup = guardardatos
			guarda.style.border = "1px solid rgba(100,100,100,1)"
			guarda.style.position = "absolute"
			guarda.style.top = "50px"
			guarda.style.left = "410px"
			guarda.style.width = "48px"
			guarda.style.height = "48px"
			guarda.src = "recursosreloj/guardar.png"
			guarda.style.visibility = "hidden"
			pconfi.appendChild(guarda)




			// incio objetos calendario ----------------------------------------

			psele = document.createElement("form")
			psele.type = "form"
			psele.name = "psele"
			psele.id = "psele"
			psele.style.position = "absolute"
			psele.style.display = "grid"
			psele.style.top = "15px"
			psele.style.left = "25px"
			psele.style.width = "562px"
			psele.style.height = "45px"
			traspa3.appendChild(psele)

			selemes = document.createElement('select');
			//selemes.type = 'select';
			selemes.id = "selemes"
			selemes.className = "sele"
			selemes.onchange = cambiarcale
			selemes.selected = "Elige opcion:"
			selemes.style.width = "170px"
			selemes.style.position = "absolute"
			selemes.style.top = "10px"
			selemes.style.left = "60px"
			psele.appendChild(selemes)

			seleano = document.createElement('select');
			//seleano.type = 'select';
			seleano.id = "seleano"
			seleano.className = "sele"
			seleano.onchange = cambiarcale
			seleano.selected = "Elige opcion:"
			seleano.style.width = "98px"
			seleano.style.position = "absolute"
			seleano.style.top = "10px"
			seleano.style.left = "245px"
			psele.appendChild(seleano)

			pcale = document.createElement("form")
			pcale.type = "form"
			pcale.name = "pcale"
			pcale.id = "pcale"
			pcale.onclick = quitarcalendario
			pcale.style.position = "absolute"
			pcale.style.display = "grid"
			pcale.style.gridTemplateColumns = "repeat(7,80px)"
			pcale.style.gridTemplateRows = "repeat(6,60px)"
			pcale.style.top = "60px"
			pcale.style.left = "25px"
			pcale.style.width = "562px"
			pcale.style.height = "420px"
			traspa3.appendChild(pcale)

			titulorotulo = "L,M,X,J,V,S,D".split(",")
			rotulo = new Array(7)
			for (let i = 0; i < 7; i++) {
				rotulo[i] = document.createElement("text")
				rotulo[i].type = "text"
				rotulo[i].className = "rotulo"
				rotulo[i].id = "rotulo" + i
				rotulo[i].innerHTML = titulorotulo[i]
				rotulo[i].style.width = "80px"
				rotulo[i].style.height = "60px"
				pcale.appendChild(rotulo[i])
			}

			objdia = new Array(42)
			for (let i = 0; i < 42; i++) {
				objdia[i] = document.createElement("text")
				objdia[i].type = "text"
				objdia[i].className = "etifecha"
				objdia[i].id = "objdia" + i
				objdia[i].innerHTML = ""
				objdia[i].style.width = "80px"
				objdia[i].style.height = "60px"
				pcale.appendChild(objdia[i])
			}

			objdiacristal = document.createElement("form")
			objdiacristal.type = "text"
			objdiacristal.id = "objdiacristal"
			objdiacristal.style.position = "absolute"
			objdiacristal.style.left = "0px"
			objdiacristal.style.top = "0px"
			objdiacristal.style.width = "80px"
			objdiacristal.style.height = "60px"
			pcale.appendChild(objdiacristal)

			flecha = new Array(5)
			for (let i = 0; i < 5; i++) {
				flecha[i] = new Image()
				flecha[i].src = "recursosreloj/f" + i + ".png"
				flecha[i].id = "flecha" + i
				flecha[i].ico = i
				flecha[i].onmousedown = flechacambioicono
				flecha[i].onmouseup = flechacalendario
				flecha[i].style.border = "1px solid rgba(100,100,100,1)"
				flecha[i].style.position = "absolute"
				flecha[i].style.top = "1px"
				flecha[i].style.width = "40px"
				flecha[i].style.height = "40px"
				psele.appendChild(flecha[i])
			}
		}

		function inicializarvariables() {
			guardah = 0
			guardam = 0
			guardas = 0
			guardadia = 0
			valorescala = 1
			rmes = "enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre".split(",")
			rreloj = "standar,blanco-noche,azul-noche,amarillo-noche,verde-noche,morado-noche,rojo-noche,naranja-noche,azul-intenso,inverso,al agua,piedra".split(",")

			flecha[0].style.left = "360px"
			flecha[1].style.left = "401px"
			flecha[2].style.left = "460px"
			flecha[3].style.left = "501px"
			flecha[4].style.left = "1"
			flecha[0].title = "Retroceder 1 mes"
			flecha[1].title = "Avanzar 1 mes"
			flecha[2].title = "Retroceder 1 año"
			flecha[3].title = "Avanzar 1 año"
			flecha[4].title = "Volver a la fecha actual"

			for (let i = 0; i < 12; i++) {
				selereloj.options[i] = new Option(rreloj[i], i)
				selereloj.options[i].style.background = "rgba(0,0,0,.8)"
			}
			for (let i = 0; i < 12; i++) {
				selemes.options[i] = new Option(rmes[i], i)
				selemes.options[i].style.background = "rgba(0,0,0,.8)"
			}
			rano = 1900
			for (let i = 0; i < 201; i++) {
				seleano.options[i] = new Option(rano, i)
				seleano.options[i].style.background = "rgba(0,0,0,.8)"
				rano++
			}

			selemes.focus()
			selemes.value = 0
			seleano.value = 0
			selereloj.value = colo[6]
			cambiarrelojanalogico()
			pcolor.style.backgroundColor = "rgba(" + colo[0] + "," + colo[1] + "," + colo[2] + ",1)"
			etifecha1.style.color = "rgba(" + colo[0] + "," + colo[1] + "," + colo[2] + ",1)"
			etifecha3.style.color = "rgba(" + colo[0] + "," + colo[1] + "," + colo[2] + ",1)"
			etifecha4.style.color = "rgba(" + colo[0] + "," + colo[1] + "," + colo[2] + ",.8)"
			cristalfecha.style.background = "linear-gradient(to bottom ,rgba(" + colo[3] + "," + colo[4] + "," + colo[5] + ",.5),rgba(0,0,0,.5),rgba(" + colo[3] + "," + colo[4] + "," + colo[5] + ",0.8))"
			cristal.style.background = "linear-gradient(to bottom ,rgba(" + colo[3] + "," + colo[4] + "," + colo[5] + ",.5),rgba(0,0,0,.5),rgba(" + colo[3] + "," + colo[4] + "," + colo[5] + ",0.8))"
			let tt1 = 0; let tt2 = 0; let tt3 = 0;
			if (colo[3] >= 50) { tt1 = 50 } else { tt1 = 0 }
			if (colo[4] >= 50) { tt2 = 50 } else { tt2 = 0 }
			if (colo[5] >= 50) { tt3 = 50 } else { tt3 = 0 }
			pconfi.style.background = "radial-gradient(rgba(" + colo[3] + "," + colo[4] + "," + colo[5] + ",.5),rgba(" + tt1 + "," + tt2 + "," + tt3 + ",.5))"
		}

		function iniciarprograma() {
			tiempo = setInterval(inicio, 4)
		}


		// inicio programacion relojes .....................................


		function inicio() {
			hora = new Date()
			dia = hora.getDate()
			s = hora.getSeconds()
			if (s == guardas) { return }
			ponerelojdigital()
			ponerelojanalogico()
			if (dia != guardadia) {
				etidia.innerHTML = dia
				guardadia = dia
				ponefecha()
			}
		}

		function ponefecha() {
			let ds = hora.getDay()
			ds = diasemana(ds)
			etifecha1.innerHTML = ds
			let mes11 = hora.getMonth()
			let mes = mesactual(mes11)
			let ano = hora.getFullYear()
			let printfecha = dia + " de " + mes + " de " + ano
			etifecha3.innerHTML = printfecha
			etifecha4.innerHTML = printfecha
			calcularcalendario(hora, 1, colo)
		}

		function mesactual(uu) {
			return rmes[uu]
		}

		function diasemana(u) {
			let rdias = "domingo,lunes,martes,miércoles,jueves,viernes,sabado".split(",")
			return rdias[u]
		}

		function ponerelojanalogico() {
			h = hora.getHours()
			if (h * 1 > 12) { h = h - 12 }
			let anguloh = h * 360 / 12
			m = hora.getMinutes()
			let angulom = m * 360 / 60
			let angulos = s * 360 / 60
			angulom = angulom + angulos / 60
			anguloh = anguloh + angulom / 12

			aguhs.style.transform = "rotate(" + anguloh + "deg)"
			aguh.style.transform = "rotate(" + anguloh + "deg)"

			agums.style.transform = "rotate(" + angulom + "deg)"
			agum.style.transform = "rotate(" + angulom + "deg)"

			aguss.style.transform = "rotate(" + angulos + "deg)"
			agus.style.transform = "rotate(" + angulos + "deg)"
		}

		function ponerelojdigital() {
			let s1; let s2; let m1; let m2; let h1; let h2;
			guardas = s
			s = s.toString()
			if (s.length == 1) { s1 = "0"; s2 = s }
			else { s1 = s.slice(0, 1); s2 = s.slice(1, 2) }
			digito[7].src = "recursosreloj/d" + s1 + ".png"
			digito[8].src = "recursosreloj/d" + s2 + ".png"

			m = hora.getMinutes()
			if (m == guardam) { return }
			guardam = m
			m = m.toString()
			if (m.length == 1) { m1 = "0"; m2 = m }
			else { m1 = m.slice(0, 1); m2 = m.slice(1, 2) }
			digito[4].src = "recursosreloj/d" + m1 + ".png"
			digito[5].src = "recursosreloj/d" + m2 + ".png"

			h = hora.getHours()
			if (h == guardah) { return }
			guardah = h
			h = h.toString()
			if (h.length == 1) { h1 = "0"; h2 = h }
			else { h1 = h.slice(0, 1); h2 = h.slice(1, 2) }
			digito[1].src = "recursosreloj/d" + h1 + ".png"
			digito[2].src = "recursosreloj/d" + h2 + ".png"
		}

		function abrirconfi() {
			if (retro == 1) { return }
			retro = 1
			if (controlconfi == 0) {
				for (let i = 0; i < 6; i++) {
					c1[i].value = colo[i]
				}
				controlconfi = 1
				confi.style.left = "255px"
				confi.style.width = "50px"
				confi.style.height = "50px"
				pconfi.style.visibility = "visible"
				angconfi = -90
				controlang = 1
				wer = setInterval(girarpconfi, 1)
				return
			}
			if (controlconfi == 1) {
				controlconfi = 0
				angconfi = 0
				controlang = -1
				wer = setInterval(girarpconfi, 1)
				return
			}
		}

		function girarpconfi() {
			pconfi.style.transform = "rotate3d(1,0,0," + angconfi + "deg)"
			angconfi = angconfi + controlang
			if (angconfi >= 0 && controlang == 1) {
				clearInterval(wer)
				retro = 0
			}
			if (angconfi <= -90 && controlang == -1) {
				pconfi.style.visibility = "hidden"
				confi.style.width = "15px"
				confi.style.height = "15px"
				confi.style.left = "270px"
				clearInterval(wer)
				retro = 0
			}
		}

		function cambiarcolor() {
			let tt1 = 0; let tt2 = 0; let tt3 = 0;
			let a = this.id.slice(2)
			if (!Number.isInteger(c1[a].value * 1)) { return }
			if (c1[a].value * 1 < 0 || c1[a].value * 1 > 255) { return }
			colo[a] = c1[a].value * 1
			let controlcolor = 1
			pcolor.style.backgroundColor = "rgba(" + colo[0] + "," + colo[1] + "," + colo[2] + ",1)"
			etifecha1.style.color = "rgba(" + colo[0] + "," + colo[1] + "," + colo[2] + ",1)"
			etifecha3.style.color = "rgba(" + colo[0] + "," + colo[1] + "," + colo[2] + ",1)"
			etifecha4.style.color = "rgba(" + colo[0] + "," + colo[1] + "," + colo[2] + ",.8)"
			cristalfecha.style.background = "linear-gradient(to bottom ,rgba(" + colo[3] + "," + colo[4] + "," + colo[5] + ",.5),rgba(0,0,0,.5),rgba(" + colo[3] + "," + colo[4] + "," + colo[5] + ",0.8))"
			cristal.style.background = "linear-gradient(to bottom ,rgba(" + colo[3] + "," + colo[4] + "," + colo[5] + ",.5),rgba(0,0,0,.5),rgba(" + colo[3] + "," + colo[4] + "," + colo[5] + ",0.8))"
			calcularcalendario(hora, 1, colo)
			if (colo[3] >= 50) { tt1 = 50 } else { tt1 = 0 }
			if (colo[4] >= 50) { tt2 = 50 } else { tt2 = 0 }
			if (colo[5] >= 50) { tt3 = 50 } else { tt3 = 0 }
			pconfi.style.background = "radial-gradient(rgba(" + colo[3] + "," + colo[4] + "," + colo[5] + ",.5),rgba(" + tt1 + "," + tt2 + "," + tt3 + ",.5))"
		}

		function escalar(e) {
			miformulario.style.left = "0px"
			miformulario.style.top = "0px"
			let mr = e.deltaY / 100
			valorescala = valorescala + 0.1 * mr
			if (valorescala < 0.1) { valorescala = 0.1 }
			if (valorescala > 1) { valorescala = 1 }
			miformulario.style.transform = "scale(" + valorescala + ")"
			let ax = miformulario.getBoundingClientRect().left
			let ay = miformulario.getBoundingClientRect().top
			miformulario.style.left = (0 - ax) + "px"
			miformulario.style.top = (0 - ay) + "px"
		}



		// iniciar calendario ----------------------------------------------


		function iniciarcalendario() {
			if (controlcalendario == 1) { return }
			controlcalendario = 1
			tcale = setInterval(ponercalendario, 1)
		}

		function quitarcalendario() {
			if (controlcalendario == 1) { return }
			controlcalendario = 1
			tcale1 = setInterval(quitacalendario, 1)
		}

		function ponercalendario() {
			if (mueve == 0) { traspa2.style.transform = "rotate3d(1,1,1," + ang + "deg)" }
			ang++
			if (ang == 121) {
				mueve = 1
				traspa2.style.visibility = "hidden"
				pconfi.style.visibility = "hidden"
				traspa3.style.visibility = "visible"
				traspa2.style.transform = "rotate3d(1,1,1,0deg)"
			}
			if (mueve == 1) { traspa3.style.transform = "rotate3d(1,1,1," + ang + "deg)" }
			if (ang == 360) {
				ang = 0
				mueve = 0
				clearInterval(tcale)
				controlcalendario = 0
			}
		}

		function quitacalendario() {
			if (mueve == 0) { traspa3.style.transform = "rotate3d(1,1,1," + ang + "deg)" }
			ang++
			if (ang == 121) {
				mueve = 1
				traspa3.style.visibility = "hidden"
				traspa2.style.visibility = "visible"
				if (controlconfi == 1) { pconfi.style.visibility = "visible" }
				traspa3.style.transform = "rotate3d(1,1,1,0deg)"
			}
			if (mueve == 1) { traspa2.style.transform = "rotate3d(1,1,1," + ang + "deg)" }
			if (ang == 360) {
				ang = 0
				mueve = 0
				clearInterval(tcale1)
				controlcalendario = 0
			}
		}

		function calcularcalendario(ffecha, cambio, col) {
			let fds = ffecha.getDay()
			let fd = ffecha.getDate()
			let fm = ffecha.getMonth()
			let fa = ffecha.getFullYear()
			if (cambio == 1) {
				selemes.value = fm
				seleano.value = fa - 1900
			}
			let fmreal = fm * 1 + 1
			let hh = new Date(fa + "/" + fmreal + "/01 12:00:00")
			let dia1 = hh.getDay()
			let ndiames = new Date(fa, fmreal, 0).getDate()
			let zz = 0; let zano = 0;
			if (fmreal == 1) { zz = 12; zano = fa - 1 }
			else { zz = fmreal - 1; zano = fa }
			let ndiamesant = new Date(zano, zz, 0).getDate()
			if (dia1 == 0) { dia1 = 6 }
			else { dia1 = dia1 - 1 }
			let trp = .5
			let con = 0

			let w = ndiamesant * 1 - dia1 * 1 + 1

			for (let i = 0; i < 42; i++) {
				if (w == ndiamesant + 1 && con == 0) { w = 1; con = 1; trp = 1 }
				if (w == ndiames + 1 && con == 1) { w = 1; trp = .5 }
				if (w == fd && con == 1 && trp == 1) {
					let xx = objdia[i].offsetLeft
					let yy = objdia[i].offsetTop
					objdiacristal.style.left = xx + "px"
					objdiacristal.style.top = yy + "px"
					objdia[i].style.fontSize = "65"
					objdia[i].style.lineHeight = "60px"
					objdia[i].style.background = "radial-gradient(rgba(" + col[3] + "," + col[4] + "," + col[5] + ",.5),rgba(0,0,0,.5),rgba(255,255,255,0.8))"
				}
				else {
					objdia[i].style.fontSize = "50"
					objdia[i].style.lineHeight = "60px"
					objdia[i].style.background = "linear-gradient(to bottom ,rgba(" + col[3] + "," + col[4] + "," + col[5] + ",.5),rgba(0,0,0,.5),rgba(" + col[3] + "," + col[4] + "," + col[5] + ",0.8))"
				}
				objdia[i].style.borderImageSource = "radial-gradient(rgba(255,255,255,1),rgba(50,50,50,1))"
				objdia[i].style.borderWidth = "1px"
				objdia[i].style.borderStyle = "solid"
				objdia[i].style.borderImageSlice = "1"
				objdia[i].style.boxShadow = "10px 10px 10px rgba(0,0,0,.7)"
				objdia[i].innerHTML = w
				objdia[i].style.color = "rgba(" + col[0] + "," + col[1] + "," + col[2] + "," + trp + ")"
				w++
			}
		}

		function cambiarcale() {
			let cca = seleano.value * 1 + 1900
			let ccm = selemes.value * 1 + 1
			let ccd = dia
			let mirar = new Date(cca, ccm, 0).getDate()
			if (dia > mirar) { ccd = mirar * 1 }
			let ccc = cca + "/" + ccm + "/" + ccd + " 12:00:00"
			let cambiofecha = new Date(ccc)
			calcularcalendario(cambiofecha, 0, colo)
		}

		function flechacambioicono() {
			let ic = this.ico * 1 + 10
			this.src = "recursosreloj/f" + ic + ".png"
		}

		function flechacalendario() {
			let a = this.id
			let ic = this.ico * 1
			this.src = "recursosreloj/f" + ic + ".png"
			let ames = selemes.value
			let aano = seleano.value

			if (a == "flecha0") {
				ames--
				if (ames == -1) {
					ames = 11
					aano--
					if (aano == -1) { aano = 200 }
					seleano.value = aano
				}
				selemes.value = ames
				cambiarcale()
				return
			}

			if (a == "flecha1") {
				ames++
				if (ames == 12) {
					ames = 0
					aano++
					if (aano == 201) { aano = 0 }
					seleano.value = aano
				}
				selemes.value = ames
				cambiarcale()
				return
			}

			if (a == "flecha2") {
				aano--
				if (aano == -1) { aano = 200 }
				seleano.value = aano
				cambiarcale()
				return
			}

			if (a == "flecha3") {
				aano++
				if (aano == 201) { aano = 0 }
				seleano.value = aano
				cambiarcale()
				return
			}

			if (a == "flecha4") {
				calcularcalendario(hora, 1, colo)
				return
			}
		}

		function cambiarrelojanalogico() {
			let a = selereloj.value
			rana.src = "recursosreloj/r" + a + ".png"
			colo[6] = a
		}

		function guardarcambioicono() {
			guarda.src = "recursosreloj/guardar1.png"
		}

		function guardardatos() {
			let info = 0
			guarda.src = "recursosreloj/guardar.png"
			for (let i = 0; i < 6; i++) {
				if (!Number.isInteger(c1[i].value * 1)) { info = 1 }
				if (c1[i].value * 1 < 0 || c1[i].value * 1 > 255) { info = 1 }
			}
			if (info == 1) { alert("Introduzca valores entre 0 y 255"); return }
			socket.emit("mensaje del cliente", { verbo: "1", palabra: colo });
		}

		window.addEventListener('popstate', eliminar);

		function eliminar() {
			clearInterval(tiempo);
			clearInterval(wer);
			clearInterval(tcale);
			clearInterval(tcale1);
			window.removeEventListener('popstate', eliminar);
			miformulario.remove();
			document.body.style.backgroundImage=null
			document.body.removeEventListener('onwheel', escalar);			
		}

		function salirReloj() {
			window.history.back()
		}

	}




}



export default MiReloj









