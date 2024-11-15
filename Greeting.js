//greeting

fun main(){
  var name:String?=readLine()
  if(!name.isNullOrEmpty()){
    println("HELLO $name")
  }
  else{
    println("HELLO user")
  }
}
