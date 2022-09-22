const filterLog = (lines) => {
    
    const length = lines.shift();
    const target = lines.shift();
    const res = lines.filter((line) => {
        return line.indexOf(target) > -1 ? line : false;
    })
    if (res.length) {
        res.map((val) => {
            console.log(val);
        })
    } else {
        console.log("None");
    }
}
