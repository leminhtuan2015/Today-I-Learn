
ID=$1

echo "VIDEO ID: $ID"

function checkID(){
  echo "Checking Video ID"  

  if [ "$1" = "" ]
  then
    echo "VIDEO ID EMPTY"
  elif [ "$1" = "x" ]
  then
      echo "USED"
  else
    thumnail "$1"
    clone "$1"
  fi
}

function thumnail(){
  curl "https://img.youtube.com/vi/${1}/mqdefault.jpg" > "${1}.jpg"
}


function clone(){
  echo "Cloning"   

  youtube-dl "$1" --output "$1"
  
  convert $1
}

function convert(){
  echo "Converting"

  ffmpeg -i "./${1}.mkv" "${1}.avi"  
}

checkID $ID
#convert $ID
#thumnail $ID















