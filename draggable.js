(function(){
  var selected           = null, // Object of the element to be moved
      x_pos              = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
      x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element
  function draggable(elem){
    // Store the object of the element which needs to be moved
    selected = elem;
    x_elem   = x_pos - selected.offsetLeft;
    y_elem   = y_pos - selected.offsetTop;
  }

// Will be called when user dragging an element
  function move_elem(e){
    x_pos = document.all ? window.event.clientX : e.pageX;
    console.log(x_pos)
    y_pos = document.all ? window.event.clientY : e.pageY;
    if(selected !== null){
      selected.style.left = (x_pos - x_elem) + 'px';
      selected.style.top  = (y_pos - y_elem) + 'px';
    }
  }

// Destroy the object when we are done
  function drop(){
    selected = null;
  }

// Bind the functions...
  document.getElementById('calculator').onmousedown = function(){
    draggable(this);
    return false;
  };

  document.onmousemove = move_elem;
  document.onmouseup   = drop;
})();
