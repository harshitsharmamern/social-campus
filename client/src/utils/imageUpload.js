export const checkImage = (file) => {
    let err = "";
    if(!file){
        return err = "File does not exist.";
    }
//?1 mb
    if(file.size > 1024 * 1024){
         return (err = "File size must be less than 1 Mb.");
    }

    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      return (err = "Image must be jpeg or png.");
    }

    return err;
}

export const imageUpload = async (images) => {
    let imgArr = [];
    for(const item of images){
        const formData = new FormData();

        if(item.camera){
            formData.append("file", item.camera);
        }else{
            formData.append("file", item);  
        }

        // CLOUDINARY_URL=cloudinary://136561979793976:gwDnqaEYHpFrtamkyR-DJJAV5_M@instalnctbhau
        const url = "https://api.cloudinary.com/v1_1/instalnctbhau/image/upload";

        formData.append("upload_preset", "insta-clone");
        formData.append("cloud_name", "instalnctbhau");
        // const url = '/api/posts'
        const res = await fetch(url, {
            method: "POST",
            body: formData
        })

        const data = await res.json();
        imgArr.push({ public_id: data.public_id, url: data.secure_url });
        
      
    }
    console.log({imgArr});
    return imgArr;
}