//21.01.21
//https://javascript.info/file
//https://www.youtube.com/watch?v=-AR-6X_98rM

const input = document.querySelector('input[type="file"]')

input.addEventListener('change', function (e) {
    console.log(input.files);
    const reader = new FileReader();

    reader.onload = function() {
        console.log(reader.result)
          const lines = reader.result.split('\n').map(function(line){
              return line.split(',')    //How to Parse by new lines(\n) and map by "," the CSV FIle
          }) 
         console.log(lines);

        const img = new Image()
        //const img = new File()
        img.src = reader.result


        //Manipulate with image Make him BlackWhite-I Didindo
        //
        //const csvfile = new Blob(['one,twothree'], { type: 'test/csv'})

         document.body.appendChild(img)
         //document.body.appendChild(src)
        // document.body.appendChild(reader)
        //document.body.innerHTML(lines)
    }
    reader.readAsText(input.files[0]);
    //reader.readAsDataURL(input.files[0]);
    //reader.readAsJSON()
    

},false)



////CheckIT///
////https://stackoverflow.com/questions/1199180/read-xml-file-using-javascript
