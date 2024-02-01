function download(url, callback) {
  setTimeout(() => {
    // return data;
    console.log(`Downloading ${url}`);
    callback(url);
  }, 1000);
}


console.log("This line will be executed before async operation")

// function processing(url){

//     console.log(`processing ${url}`);

// }

let url1 = "1_ABC";
let url2 = "2_EFG";
let url3 = "3_HIJ";
let url4 = "4_IJK";
let url5 = "5_MNO";
// const r = download(url);

download(url1, function processing(data) {
  console.log(`processing ${data}`);

  download(url2, function processing(data) {
    console.log(`processing ${data}`);

    download(url3, function processing(data) {
      console.log(`processing ${data}`);
      download(url4, function processing(data) {
        console.log(`processing ${data}`);
        download(url5, function processing(data) {
          console.log(`processing ${data}`);
        });
      });
    });
  });
});

// processing(r , );
