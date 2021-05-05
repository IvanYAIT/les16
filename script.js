window.addEventListener("load", () =>{
    let content = document.createElement("div");
    content.className = "miniatures";
    document.body.appendChild(content);

    let html = images.map(img => `
        <div class="mini" data-src=${img} style="background-image:url(${img})"></div>
    `);
    console.log(html);

    content.innerHTML= html.join("");
})
