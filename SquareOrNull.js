//sqaure or print Null

fun main(){
  var a = readLine()?.toIntOrNull()
  if(a==null){
    println("is Null")
  }
  else{
    println(a*a)
  }
}
