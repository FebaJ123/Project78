var images =[ "https://i.postimg.cc/MKdhy06Z/family.jpg", "https://i.pinimg.com/736x/53/96/1b/53961be3388cf244743657d5401edeef.jpg", "https://image.shutterstock.com/image-vector/young-cheerful-woman-long-hair-260nw-1354276241.jpg", "https://i.pinimg.com/474x/bc/6e/32/bc6e32f93764cac5e072b43aa0cd2aa8.jpg", "https://i.pinimg.com/originals/fd/4b/8d/fd4b8ddc2d945f7f600af4a85eaf9d26.jpg", "https://i.pinimg.com/originals/56/71/16/567116a3c5f6dd5c47faed631e4751b2.png"]
var names = ["Family Book", "Alex Trin", "Helen Trin", "Jane Trin", "Jamie Trin", "Julie Trin"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
