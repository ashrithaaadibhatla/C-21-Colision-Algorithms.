function isTouching(ash,bara){
    if (ash.x - bara.x < bara.width/2 + ash.width/2
      && bara.x - ash.x < bara.width/2 + ash.width/2
      && ash.y - bara.y < bara.height/2 + ash.height/2
      && bara.y - ash.y < bara.height/2 + ash.height/2) {
    
        return true;
  }
  else {
    return false;
  }
  }
  
  
  