const cloudinary = require('cloudinary').v2;


cloudinary.config({ 
    cloud_name: 'dt4znhljb', 
    api_key: '672828423866472', 
    api_secret: 'bYdDHl_xZejCtqMTvvf8qIb9_pk' 
  });
  
async function uploadFile (file){
    try 
    {
        const result = await cloudinary.uploader.upload(file);
        return result.secure_url;
    } 
    catch (error)
    {
        console.log(error);
        return error;
    }
}


module.exports = uploadFile;