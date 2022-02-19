
export async function makeAPICall(url){
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        console.error (error);
    }
}

export function appendPictures(data, parent){
    data.forEach(el=>{
        let div = document.createElement("div");
        div.className = "image"
        let img = document.createElement("img");
        img.src = el.urls.small;
        let h = document.createElement("h3");
        h.innerText = el.user.name;
        div.append(img, h);
        parent.append(div);
    })
}