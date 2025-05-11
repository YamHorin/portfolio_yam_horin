const nav = document.querySelector('.navbar')
fetch('https://yamhorin.github.io/portfolio_yam_horin/menu.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})


