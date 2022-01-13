studentsarray=[]
function submit(){
    var name1=document.getElementById("name1").value 
    var name2=document.getElementById("name2").value
    var name3=document.getElementById("name3").value
    var name4=document.getElementById("name4").value
    
    studentsarray.push(name1)
    studentsarray.push(name2)
    studentsarray.push(name3)
    studentsarray.push(name4)
    console.log(studentsarray)
    document.getElementById("display_name").innerHTML=studentsarray
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    studentsarray.sort()
    console.log(studentsarray)
    document.getElementById("display_name").innerHTML=studentsarray
}
