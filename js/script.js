// Aquí tu código

 //notes for myself because this is confusing
    // document.getElementById('agregar') is the button
    // document.getElementById('lista') is the list
    // press is the button
    // add is the list


 // cmd + option + i on mac in chrome with the html file to see the console
 const press = document.getElementById('agregar');
 const add = document.getElementById('lista');
 
 
 press.addEventListener('click', function() {
     const addElement = prompt ('¿Qué deseas agregar a tu lista?'); // once the button is clicked, a prompt will appear
     const newElement = document.createElement('li'); // a new element will be created which is part of the list
     newElement.textContent = addElement; // the new element will have the text that the user wrote in the prompt
     add.appendChild(newElement); // the new element will be added to the list as a child of the list
 });