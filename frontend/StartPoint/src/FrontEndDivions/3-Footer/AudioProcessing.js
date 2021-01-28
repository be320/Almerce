
export function audioProcessor (file) {
    return new Promise((resolve, reject) => {
   
        let reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        //reader.readAsArrayBuffer(file);
        reader.readAsDataURL(file);
	  })
	  .catch(function (error) {
		console.log(error.message);
	  });

    }

