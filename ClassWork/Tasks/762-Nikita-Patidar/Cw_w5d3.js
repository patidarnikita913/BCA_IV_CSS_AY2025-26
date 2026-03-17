// file operation 
const commonFiles = [
  {
    type: "Code Files",
    extensions: [".js", ".html", ".css", ".json", ".py", ".java", ".cpp", ".ts"]
  },
  {
    type: "Document Files",
    extensions: [".txt", ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx"]
  },
  {
    type: "Image Files",
    extensions: [".jpg", ".jpeg", ".png", ".gif", ".svg"]
  },
  {
    type: "Audio Files",
    extensions: [".mp3", ".wav", ".aac"]
  },
  {
    type: "Video Files",
    extensions: [".mp4", ".mkv", ".avi"]
  },
  {
    type: "Compressed Files",
    extensions: [".zip", ".rar", ".7z"]
  },
  {
    type: "Executable/System Files",
    extensions: [".exe", ".apk", ".bat"]
  },
  {
    type: "Web Files",
    extensions: [".php", ".xml", ".env"]
  }
];
// getting file extension
const filename = "images.png";
let x = filename.split(".");
let extension =  `.${x[x.length - 1]}`;

//function to find file type wiht extension
function type(ext){
    for(let i = 0;i<commonFiles.length;i++){
        for(let j = 0;j<commonFiles[i].extensions.length;j++){
            if(ext==commonFiles[i].extensions[j]){
                console.log("find : " + commonFiles[i].extensions[j]);
                return commonFiles[i].type;
            }
        }
    }   
    return "Not found";
}

console.log(type(extension));

//instance of operator 
class hello{
    print (){
        console.log("hello");
    }
    
}
greet = new hello();
greet.print();
console.log(greet instanceof hello);