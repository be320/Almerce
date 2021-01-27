import imageCompression from 'browser-image-compression';

export function imageProcessor (file) {
    return new Promise((resolve, reject) => {
    var imageFile = file;
	console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

	var options = {
	  maxSizeMB: 1,
	  maxWidthOrHeight: 1920,
	  minWidthAndHeight: 130,
	  useWebWorker: true
	}
	imageCompression(imageFile, options)
	  .then(function (compressedFile) {
		console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
		console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
   
        console.log(compressedFile)
        let reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        //reader.readAsArrayBuffer(file);
        reader.readAsDataURL(compressedFile);
	  })
	  .catch(function (error) {
		console.log(error.message);
	  });

    })
}
