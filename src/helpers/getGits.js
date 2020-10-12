

export const  getGift = async ( category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=5&api_key=DIMpf0hjnFzWymqN3Q7fanL45xn8GY5W&`
    const gif = await fetch(url);
    const {data} = await gif.json();

    

    // console.log(data)

    // console.log(imagenes)

    const gift = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gift;

}