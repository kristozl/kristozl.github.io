function downloadURI(uri, name) {
	console.log("Descargando. Esta operación puede tardar varios segundos...");
    fetch(uri)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            console.log("end");
        })
        .catch(function(){
        	console.log("error");
        });
}

downloadURI("script.php","excelname.xls");
