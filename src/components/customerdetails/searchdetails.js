

function searchingFor(term)  //searches for Name,DOB or Email
{
  return function(x){
    var cname=x.Firstname+" "+x.Lastname;
    var cdob=x.DOB;
    var cemail=x.Email;
    return (cname.toLowerCase().includes(term.toLowerCase())) ||
     (cdob.toLowerCase().includes(term.toLowerCase())) ||
     (cemail.toLowerCase().includes(term.toLowerCase()))  || !term;
    
  }
}
export default searchingFor;